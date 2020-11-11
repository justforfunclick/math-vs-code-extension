# Tanh Layer

## Backpropagate

<img src="https://math.justforfun.click/$/x"/> is the input, <img src="https://math.justforfun.click/$/y"/> is the output. We have definition 

<p align="center">
<img src="https://math.justforfun.click/$/Y_{ij} = Tanh(X_{ij}) = (e^{2x_{ij}} - 1) / (e^{2x_{ij}} + 1)"/>
</p>

Obviously, input <img src="https://math.justforfun.click/$/X_{ij}"/> contributes the output <img src="https://math.justforfun.click/$/Y_{ij}"/> only. Therefore

<p align="center">
<img src="https://math.justforfun.click/$/Delta X_{ij} = Delta Y_{ij} * (partial Y_{ij})/(partial X_{ij})"/>
</p>

We already know <img src="https://math.justforfun.click/$/\Delta Y_{ij}"/> which comes from the previous backpropagation, so we only need caculate <img src="https://math.justforfun.click/$/(partial Y_{ij})/(partial X_{ij)"/>.

Because

<p align="center">
<img src="https://math.justforfun.click/$/(f/g)' = (f'g - fg')/g^2"/>
</p>

Therefore

<p align="center">
<img src="https://math.justforfun.click/$/(partial Y_{ij})/(partial X_{ij}) = (partial/(partial x_{ij})(e^{2x_{ij}} - 1) * (e^{2x_{ij}} + 1) - (e^{2x_{ij}} - 1) * partial/(partial x_{ij})(e^{2x_{ij} + 1}))/(e^{2x_{ij}} + 1)^2"/>
</p>

Because<sup>[1](#footnote1)</sup>

<p align="center">
<img src="https://math.justforfun.click/$/(partial e^{2x})/(partial x) = 2e^{2x}"/>
</p>

Therefore

<p align="center">

<img src="https://math.justforfun.click/$/(partial Y_{ij})/(partial X_{ij}) = (2e^{2x_{ij}} * (e^{2x_{ij}} + 1) - (e^{2x_{ij}} - 1) * 2e^{2x_{ij}})/((e^{2x_{ij}} + 1)^2) = (2 * 2e^{2x_{ij}})/((e^{2x_{ij}} + 1)^2) = 2/(e^{2x_{ij}} + 1) * (2e^{2x_{ij}})/(e^{2x_{ij}} + 1) = (1 - Y_{ij}) * (1 + Y_{ij}) = 1 - Y_{ij}^2"/>

</p>

Note:

<a name="footnote1">1</a>: This equation can be inferred by [chain rule](https://en.wikipedia.org/wiki/Chain_rule): if <img src="https://math.justforfun.click/$/f(x) = h(g(x))"/>, then
<img src="https://math.justforfun.click/$/f'(x) = h'(g(x)) * g'(x)"/>.

Let <img src="https://math.justforfun.click/$/h(x) = x^2"/> and <img src="https://math.justforfun.click/$/g(x) = e^x"/>, then <img src="https://math.justforfun.click/$/f(x) = h(g(x)) = (e^x)^2 = e^{2x}"/>.

Therefore

<p align="center">
<img src="https://math.justforfun.click/$/(partial e^{2x})/(partial x) = (partial f(x))/(partial x) = (partial h(g(x)))/(partial x) * (partial g(x))/(partial x) = 2e^x * e^x = 2e^{2x}"/>
</p>

In genernal

<p align="center">
<img src="https://math.justforfun.click/$/(partial e^{cx})/(partial x) = ce^{cx}"/>
</p>