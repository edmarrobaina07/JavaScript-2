const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

const currencySelectMoney = document.querySelector(".currency-money")


async function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real 
    const currencyValueConverted = document.querySelector(".currency-value")// Outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

    const dolar = data.USDBRL.high

    const euro = data.EURBRL.high

    const libra = data.GBPBRL.high

    const bitcoin = data.BTCBRL.high

    /*const dolarToday = 4.94
    const euroToday = 5.33
    const libraToday = 6.23
    const bitcoinToday = 127.218*/



    if(currencySelect.value == "dolar") { // se o select estiver selecionado o valor de dólar entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)
    

    }// os dois == é comparação.

    if(currencySelect.value == "euro") { // se o select estiver selecionado o valor de euro entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro)

    }

    if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libra)
        
    }

    if(currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoin)
        
    }

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
}




function changeCurrency() {
    

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "USD"
        currencyImage.src = "./assets/usd.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "EURO"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "LIBRA"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "BTC"
        currencyImage.src = "./assets/bitcoin.png"
    }


    convertValues()

}



currencySelect.addEventListener("change", changeCurrency)


convertButton.addEventListener("click", convertValues)