









function changeCurrency () {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }


    convertValues()

}




currencySelect.addEventListener("change", changeCurrency )