//const convertButton = document.querySelector(".convert-button")// clase do botão de converter (Mapear o Botão)


//function convertValues() { // criar função para converter os valores.

    //const inputCurrencyValue = document.querySelector("input-currency").value //input que for digitado o valor à converter

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
     // valor em Real no HTML

     const currencyValueConverted = document.querySelector(".currency-value") // outras moedas


    //const dolarToday = 4.94

    //const convertedValue = inputCurrencyValue / dolarToday essa opção é deletada na parte 3 do código

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { // esse código é colocado dentro do if na parte 3 do código
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
    

    /* Exemplo sem Intl
    currencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueConverted.innerHTML = convertedValue
    */

//}

//convertButton.addEventListener("click", convertValues)





