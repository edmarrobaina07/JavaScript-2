const convertButton = document.querySelector(".convert-button")// clase do botão de converter (Mapear o Botão)


function convertValues() { // criar função para converter os valores.

    const inputCurrencyValue = document.querySelector("input-currency").value //input que for digitado o valor à converter

    const dolarToday = 4.94

    const convertedValue = inputCurrencyValue / dolarToday

}

convertButton.addEventListener("click", convertValues)





