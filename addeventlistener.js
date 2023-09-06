const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

/*.addEventListener("change", function(){
    console.log("troquei o valor")
})*/


function troqueiOValor(event) {
    console.log(event)
}



input.addEventListener("change", troqueiOValor)

