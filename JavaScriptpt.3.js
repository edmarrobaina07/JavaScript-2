
const currencySelect = document.querySelector(".currency-select")






const euroToday = 6.2


if(currencySelect.value == "dolar") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

}

if(currencySelect.value == "euro") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
    
}