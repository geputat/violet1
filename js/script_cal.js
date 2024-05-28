window.onload = function() {
    const cargos = JSON.parse(localStorage.getItem('cargos')) || [];

    const tableBody = document.querySelector('#tableBody');
    cargos.forEach((cargo, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${cargo.volume}</td>
            <td>${cargo.tariff}</td>
            <td>${cargo.weight}</td>
            <td>${cargo.city}</td>
            <td>${cargo.price}</td>
            <td><button style="background: #063479" class="btn text-light justify-content-center align-items-center" onclick="deleteRow(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Добавляем обработчик событий для формы поиска
    const searchForm = document.querySelector('#search-form');
    searchForm.addEventListener('submit', searchByTariff);
};

function deleteRow(index) {
    const confirmation = confirm("Are you sure you want to delete this row?");
    if (confirmation) {
        const table = document.querySelector('#tableBody');
        table.deleteRow(index);
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    const tableRows = document.querySelectorAll('#tableBody tr');
    const cargos = [];
    tableRows.forEach(row => {
        const cargo = {
            volume: row.cells[1].textContent,
            tariff: row.cells[2].textContent,
            weight: row.cells[3].textContent,
            city: row.cells[4].textContent,
            price: row.cells[5].textContent
        };
        cargos.push(cargo);
    });
    localStorage.setItem('cargos', JSON.stringify(cargos));
}

function searchByTariff(event) {
    event.preventDefault();
    const searchInput = document.querySelector('#search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const tableBody = document.querySelector('#tableBody');
    const tableRows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < tableRows.length; i++) {
        const tariffCell = tableRows[i].cells[2];
        const tariff = tariffCell.textContent.toLowerCase();
        if (tariff.includes(searchTerm)) {
            tableRows[i].style.display = '';
        } else {
            tableRows[i].style.display = 'none';
        }
    }
}