'use strict';

const { mathToSvg } = require('@justforfun-click/mathjax/js/mathToSvg');

const vscode = require('vscode');
const asciiMathTemplateSnippet = new vscode.SnippetString('<img src="https://math.justforfun.click/$/$0"/>');
const latexMathTemplateSnipped = new vscode.SnippetString('<img src="https://math.justforfun.click/$$/$0"/>');
var mathTemplateSnippet = asciiMathTemplateSnippet;

const imgRex = /<img .*?\bsrc\s*=\s*"https:\/\/math\.justforfun\.click\/(\$\$?\/[^"]*)"[^>]*>/s;
const imgStyleRex = /\bstyle\s*=\s*"([^"]*)"/s;

function render(md, options) {
    md.renderer.rules.html_block = md.renderer.rules.html_inline = (tokens, idx, options, env, self) => {
        var token = tokens[idx];
        var content = token.content;
        while (true) {
            var imgMatches = content.match(imgRex);
            if (!imgMatches) {
                break;
            }

            var imgContent = imgMatches[0];
            var svgContent = mathToSvg(decodeURI(imgMatches[1])) || "";
            var imgStyleMatches = imgContent.match(imgStyleRex);
            if (imgStyleMatches) {
                var styleContent = imgStyleMatches[1];
                if (styleContent.indexOf("width:") >= 0 || styleContent.indexOf("height:") >= 0) {
                    svgContent = svgContent.replace(/width="[^"]*"/, "");
                    svgContent = svgContent.replace(/height="[^"]*"/, "");
                }
                var styleStr = ' style="';
                var stylePos = svgContent.indexOf(styleStr);
                stylePos = svgContent.indexOf('"', stylePos + styleStr.length);
                svgContent = svgContent.substring(0, stylePos) + ";" + styleContent + svgContent.substring(stylePos);
            }
            content = content.replace(imgContent, svgContent);
        }
        return content;
    };
}

exports.activate = function activate(context) {
    vscode.commands.registerCommand('math-to-svg.insert-math', () => {
        var editor = vscode.window.activeTextEditor;
        switch (vscode.workspace.getConfiguration('math-to-svg')['notation'].toLowerCase()) {
        default:
        case "asciimath":
            mathTemplateSnippet = asciiMathTemplateSnippet;
            break;

        case "latex":
            mathTemplateSnippet = latexMathTemplateSnipped;
            break;
        }
        editor.insertSnippet(mathTemplateSnippet);
    });

    return {
        extendMarkdownIt: function (md) {
            return md.use(render);
        }
    };
};
