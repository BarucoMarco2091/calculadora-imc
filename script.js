function converter() {
    var weight = document.getElementById('num')
    var peso = Number(weight.value)
    var height = document.getElementById('num1')
    var altura = Number(height.value)
    var res = document.getElementById('resultado')
        IMC = peso / (altura ** 2)
    res.innerText = IMC
}