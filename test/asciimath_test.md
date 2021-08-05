# Math To SVG AsciiMath Tests

## Inline Test
> Bla bla <img src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/> bla bla bal


## Block Test
Block test

> <img src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/>

bla bla.


## Style Test (change size, height: 100px)
> <img src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i" style="height:100px"/>


## Style Test (change size, width: 100px)
> <img src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i" style="width:100px"/>


## Style Test (vertical align middle)
> This is a test <img style="height:100px; vertical-align:middle" src="https://math.azureedge.net/$/sum_{i=1}^100 x_i + y_i"/>


## Multiple line test
> <img style="height:100px" src="https://math.azureedge.net/$/
    {
        (2x, +, 17y, =, 23,,,(1)),
        (x, -, y, =, 5,,,(2))
    :}
">

> <img style="height:100px" src="https://math.azureedge.net/$/
    f(x) = {
        (n/2,,, ``if `` n `` is even``),
        (-(n+1)/2,,, ``if `` n `` is odd``)
    :}
">

## Prime notation (`'`) test
> <img src="https://math.azureedge.net/$/h'x'''(x) = g'(h(x)')"/>

> <img src="https://math.azureedge.net/$/f'(x) = h'(g(x)) * g'(x)"/>

## Align center
> <p align="center"><img src="https://math.azureedge.net/$/a = a + b"/></p>

## Two instances in one html block
> <p align="center"><img src="https://math.azureedge.net/$/a = a + b"/></p><p align="center"><img src="https://math.azureedge.net/$/c = d + e"/></p>

## Url decoding test
> <img src="https://math.azureedge.net/$/n xx 10%25 %22    if %22 n %22 is negative%22"/>

## `` test
> <img style="width: 200px;" src="https://math.azureedge.net/$/obrace(1+2+3+4)^(``4 terms``)"/>

## Color test
> <img src="https://math.azureedge.net/$/k = color(red)(x) color(blue)(-) 2"/>
