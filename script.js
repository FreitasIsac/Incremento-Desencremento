var body = document.querySelector("body")

var numero = Number(prompt("Digite um Numero"))

for(var index = 1; index <= 10; index++) {
    body.innerHTML += `<p>${numero} x ${index} = ${numero * index}</p>`
}