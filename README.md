# <img style="width:64px; vertical-align:middle" src="https://raw.githubusercontent.com/justforfun-click/math-vs-code-extension/master/icon.png"> Math To SVG

This extension will convert [AsciiMath](http://asciimath.org/) notations to SVG for Markdown.

Syntax:

```
<img src="https://math.justforfun.click/$/ascii-math-notation"/>
```

For example:

```
<img src="https://math.justforfun.click/$/sum_{i=1}^100 x_i + y_i"/>
```

will get

> <img src="https://math.justforfun.click/$/sum_{i=1}^100 x_i + y_i"/>

Style is welcome.

For example, set the width:

```
<img style="width: 100px" src="https://math.justforfun.click/$/sum_{i=1}^100 x_i + y_i"/>
```

will get

> <img style="width: 100px" src="https://math.justforfun.click/$/sum_{i=1}^100 x_i + y_i"/>

Vertical align middle:

```
The formula is <img style="height: 100px; vertical-align: middle" src="https://math.justforfun.click/$/sum_{i=1}^100 x_i + y_i"/>
```

will get

> The formula is <img style="height: 100px; vertical-align: middle" src="https://math.justforfun.click/$/sum_{i=1}^100 x_i + y_i"/>

You can also write formula in multilines which will improve readability if the formula is complex (**WARNING: Github doesn't support this way currently**).

For example:

```
<img src="https://math.justforfun.click/$/
    {
        (2x, +, 17y, =, 23),
        (x, -, y, =, 5)
    :}
">
```

will get:

> <img src="https://math.justforfun.click/$/
    {
        (2x, +, 17y, =, 23),
        (x, -, y, =, 5)
    :}
">

Shortcut `Ctrl+M` will insert `<img src="https://math.justforfun.click/$/"/>` for you, so that you don't need type the long text.

Github friendly. Formulas can be displayed in github directly.

Additional, user who doesn't install this extension can view the formulas also (but always in black color, not well if user uses dark theme).

More AsciiMath syntax please check the AsciiMath website: http://asciimath.org.

Source code for this extension: https://github.com/justforfun-click/math-vs-code-extension

Source code for image service: https://github.com/justforfun-click/math

## Acknowledge

This extension uses the following libraries:

* https://github.com/markdown-it/markdown-it (MIT License)
* https://github.com/mathjax/MathJax-src (Apache-2.0 License)

Icon is from:

* https://www.iconfinder.com/icons/4212910/formula_education_math_icon (Creative Commons Attribution 3.0 Unported (CC BY 3.0))
