'use strict';

const mathJaxPackage = "@justforfun-click/mathjax"
const { mathjax } = require(`${mathJaxPackage}/js/mathjax`);
const { AsciiMath } = require(`${mathJaxPackage}/js/input/asciimath`);
const { SVG } = require(`${mathJaxPackage}/js/output/svg`);
const { RegisterHTMLHandler } = require(`${mathJaxPackage}/js/handlers/html`);
const { liteAdaptor } = require(`${mathJaxPackage}/js/adaptors/liteAdaptor`);

const adaptor = liteAdaptor();
const handler = RegisterHTMLHandler(adaptor);
const ascii = new AsciiMath();
const svg = new SVG();
const html = mathjax.document('', {InputJax: ascii, OutputJax: svg});

const vscode = require('vscode');
const mathTemplateSnippet = new vscode.SnippetString('<img src="https://math.justforfun.click/$/$0"/>');

const imgRex = /<img .*?\bsrc\s*=\s*"https:\/\/math\.justforfun\.click\/\$\/([^"]*)"[^>]*>/s;
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
            var mathContent = imgMatches[1].replace(/\s+/g, ' ');
            var svgContent = adaptor.innerHTML(html.convert(mathContent));
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
        editor.insertSnippet(mathTemplateSnippet);
    });

    return {
        extendMarkdownIt: function (md) {
            return md.use(render);
        }
    };
};
