/*const input = document.getElementById("main-input")

console.log(input)*/

/*const elements = document.getElementsByClassName("paragraph-js")

console.log(elements)*/

/*const elements = document.getElementsByTagName("p")

console.log(elements)*/

/*const elements = document.getElementsByName("nome-completo")

console.log(elements)*/

/*const elements = document.querySelector("p") /* para procurar uma class colocar o . Ex (".paragraph-js")  procurar pelo id usar o #
 
para procurar um elemento que tem a mesma class repetida, e queria um específico usar da seguinte forma Ex ("button.main-btn")

console.log(elements)

*/

/*const elements = document.querySelectorAll("p")

console.log(elements)*/


/* Alterando elementos na prática */

/*const elements = document.querySelector("#main-input")

elements.placeholder = "Agora é esse texto"
/* Exemplo: elements.value = "7777"*/

/*console.log(elements.placeholder)*/


/*Alterando e acessando textos

textContent -> Pega todo o conteúdo
innerText -> Pega Apenas o texto
innerHTML -> Permite adicionar HTML e Texto*/

const elements = document.querySelector(".paragraph-js")

/*elements.innerText = "O novo texto é esse"*/
elements.innerHTML = "Novas Aulas De <b>JavaScipt</b> Part. 02"

console.log(elements.textContent)// Só HTML
console.log(elements.innerText)// Leva em conta o CSS
console.log(elements.innerHTML)// Trás Tudo - Permite adicionar HTML

/*const button = document.querySelector(".main-btn")

button.style.color = "black"
button.style.backgroundColor = "#cccccc"*/





/*Eventos 

const input = document.querySelector("#main-input")
const result = document.querySelector("#result")
    

function cliqueiNoBotao() {
    
   alert(input.value)
    
}


function digiteiNoInput() {
    
    //console.log("digitei no input")
   
}


*/
function cliqueiNoBotao() {

    const input = document.querySelector("#main-input").value
   
    document.querySelector("#result").innerHTML = input

}








