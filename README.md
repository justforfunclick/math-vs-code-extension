# <img style="width:64px; vertical-align:middle" src="https://raw.githubusercontent.com/justforfun-click/math-vs-code-extension/master/icon.png"> Math To SVG

This extension will convert [AsciiMath](http://asciimath.org/) or [LaTeX](https://en.wikibooks.org/wiki/LaTeX) notations to SVG for Markdown.

## Syntax
For AsciiMath:

```
<img src="https://math.azureedge.net/$/ascii-math-notation"/>
```

For LateX:

```
<img src="https://math.azureedge.net/$$/ascii-math-notation"/>
```

## AsciiMath
For example:

```
<img src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/>
```

will get

> <img src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/>

Style is welcome.

For example, set the width:

```
<img style="width: 100px" src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/>
```

will get

> <img style="width: 100px" src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/>

Vertical align middle:

```
The formula is <img style="height: 100px; vertical-align: middle" src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/>
```

will get

> The formula is <img style="height: 100px; vertical-align: middle" src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/>

You can also write formula in multilines which will improve readability if the formula is complex (**WARNING: Github doesn't support this way currently**).

For example:

```
<img src="https://math.azureedge.net/$/
    {
        (2x, +, 17y, =, 23,,(1)),
        (x, -, y, =, 5,,(2))
    :}
">
```

will get:

> <img src="https://math.azureedge.net/$/
    {
        (2x, +, 17y, =, 23,,(1)),
        (x, -, y, =, 5,,(2))
    :}
">

and

```
<img src="https://math.azureedge.net/$/
    f(x) = {
                (n/2,, ``if `` n `` is even``),
                (-(n+1)/2,, ``if `` n `` is odd``)
           :}
">
```

will get:

> <img src="https://math.azureedge.net/$/
    f(x) = {
                (n/2,, ``if `` n `` is even``),
                (-(n+1)/2,, ``if `` n `` is odd``)
           :}
">

Due to html parser limitation, quote (`"`) can' be directly used. But you can use `` (two back quotes) instead.
For example:
```
<img style="height:50px" src="https://math.azureedge.net/$/obrace(1+2+3+4)^(``4 terms``)"/>
```

will get:

> <img style="height:50px" src="https://math.azureedge.net/$/obrace(1+2+3+4)^(``4 terms``)"/>

Or use url encoded character `%22`:
```
<img style="height:50px" src="https://math.azureedge.net/$/obrace(1+2+3+4)^(%224 terms%22)"/>
```

will get the same result:
> <img style="height:50px" src="https://math.azureedge.net/$/obrace(1+2+3+4)^(%224 terms%22)"/>

## LaTeX
For example:

```
<img src="https://math.azureedge.net/$$/\lim\limits_{x \to \infty} \exp(-x) = 0"/>
```

will get:

> <img src="https://math.azureedge.net/$$/\lim\limits_{x \to \infty} \exp(-x) = 0"/>

You can also use multiple line style (although github doesn't support it):
```
<img src="https://math.azureedge.net/$$/
M = \begin{bmatrix}
       \frac{5}{6} & \frac{1}{6} & 0           --[0.3em]
       \frac{5}{6} & 0           & \frac{1}{6} --[0.3em]
       0           & \frac{5}{6} & \frac{1}{6}
     \end{bmatrix}
"/>
```

will get:
> <img src="https://math.azureedge.net/$$/
M = \begin{bmatrix}
       \frac{5}{6} & \frac{1}{6} & 0           --[0.3em]
       \frac{5}{6} & 0           & \frac{1}{6} --[0.3em]
       0           & \frac{5}{6} & \frac{1}{6}
     \end{bmatrix}
"/>

Visit [https://en.wikibooks.org/wiki/LaTeX/Mathematics](https://en.wikibooks.org/wiki/LaTeX/Mathematics) for more latex syntax, but you need
remember the following rules:
* `\\` command should be replaced with `--`
* `"` should be replaced with `` (two back quote characters).
* `/` should be replaced with `//`

### Others
Shortcut `Ctrl+M` will insert `<img src="https://math.azureedge.net/$/"/>` for you. So that you don't need type the long text.
By default, it will use AsciiMath notation. If you want to use LateX notation as default, you can change the setting `math-to-svg.notation`
from `AsciiMath` to `LateX`.

Github friendly. Formulas can be displayed in github directly.

Additionally, user who doesn't install this extension can view the formulas also (but always in black color, not well if user uses dark theme).

More AsciiMath syntax please check the AsciiMath website: http://asciimath.org.

Source code for this extension: https://github.com/justforfunclick/math-vs-code-extension

Source code for image service: https://github.com/justforfunclick/math

## Acknowledge

This extension uses the following libraries:

* https://github.com/markdown-it/markdown-it (MIT License)
* https://github.com/mathjax/MathJax-src (Apache-2.0 License)

Icon is from:

* https://www.iconfinder.com/icons/4212910/formula_education_math_icon (Creative Commons Attribution 3.0 Unported (CC BY 3.0))
