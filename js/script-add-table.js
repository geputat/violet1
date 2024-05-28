document.addEventListener("DOMContentLoaded", function () {
    const press = document.querySelector(".itd-btn");
    const weightInput = document.querySelector("#exampleFormControlTextarea1");
    const volumeInput = document.querySelector("#exampleFormControlTextarea2");
    const priceDisplay = document.querySelector("#price");
    const tariffSelect = document.querySelector("#itd-tariff");

    // Объект с ценами для каждого тарифа
    const tariffPrices = {
        "1": 100,
        "2": 200,
        "3": 300,
        "4": 400,
        "5": 500,
        "6": 50,
        "7": 150,
        "8": 100,
        "10": 350,
        "11": 600
    };

    // Функция для рассчета суммы объема и веса с учетом тарифа
    function calculateTotalPrice() {
        const weight = parseFloat(weightInput.value) || 0;
        const volume = parseFloat(volumeInput.value) || 0;
        const tariffPrice = tariffPrices[tariffSelect.value] || 0;
        const totalPrice = weight + volume + tariffPrice;
        priceDisplay.textContent = totalPrice.toFixed(2);
    }

    // Добавляем обработчики событий для input-ов и select
    weightInput.addEventListener("input", calculateTotalPrice);
    volumeInput.addEventListener("input", calculateTotalPrice);
    tariffSelect.addEventListener("change", calculateTotalPrice);

    // Обработчик события клика на кнопку
    press.addEventListener('click', function() {
        console.log('1')
        const tariff = tariffSelect.value;
        const weight = weightInput.value;
        const volume = volumeInput.value;
        const city = document.querySelector("#exampleFormControlTextarea3").value;
        const price = priceDisplay.textContent;

        const cargo = {
            tariff: tariff,
            weight: weight,
            volume: volume,
            city: city,
            price: price
        };

        let cargos = JSON.parse(localStorage.getItem('cargos')) || [];
        cargos.push(cargo);
        localStorage.setItem('cargos', JSON.stringify(cargos));
        console.log('2')
    });
});