# Math To SVG LateX Tests

## Inline Test
> Bla bla <img src="https://math.justforfun.click/$$/\sum_{i=1}^{100} x_i + y_i"/> bla bla bal


## Block Test
Block test

> <img src="https://math.justforfun.click/$$/\sum_{i=1}^{100} x_i + y_i"/>

bla bla.


## Style Test (change size, height: 100px)
> <img src="https://math.justforfun.click/$$/\sum_{i=1}^{100} x_i + y_i" style="height:100px"/>


## Style Test (change size, width: 100px)
> <img src="https://math.justforfun.click/$$/\sum_{i=1}^{100} x_i + y_i" style="width:100px"/>


## Style Test (vertical align middle)
> This is a test <img style="height:100px; vertical-align:middle" src="https://math.justforfun.click/$$/\sum_{i=1}^{100} x_i + y_i"/>


## Multiple line test
> <img style="height:100px" src="https://math.justforfun.click/$$/
f(n) =
    \begin{cases}
        n//2       & \quad \text{if } n \text{ is even} --
        -(n+1)//2  & \quad \text{if } n \text{ is odd}
    \end{cases}
">

## Prime notation (`'`) test
> <img src="https://math.justforfun.click/$$/h'x'''(x) = g'(h(x)')"/>

> <img src="https://math.justforfun.click/$$/f'(x) = h'(g(x)) \cdot g'(x)"/>

## Align center
> <p align="center"><img src="https://math.justforfun.click/$$/a = a + b"/></p>

## Two instances in one html block
> <p align="center"><img src="https://math.justforfun.click/$$/a = a + b"/></p><p align="center"><img src="https://math.justforfun.click/$$/c = d + e"/></p>

## Color test
> <img src="https://math.justforfun.click/$$/k = {\color{red}x} \mathbin{\color{blue}-} 2"/>
