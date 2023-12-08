const words = ["Petr", "Jan", "Honza", "Adam", "Marek", "Jirka", "Ondra", "Lucie", "Tereza", "Patrik", "Denis"];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function createTable() {
    const table = document.querySelector("#myTable");

    for (let i = 0; i < 10; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 3; j++) {
            const cell = row.insertCell();
            cell.innerHTML = getRandomWord();
        }
    }
}

function addRow() {
    const table = document.querySelector("#myTable");
    const row = table.insertRow();

    for (let j = 0; j < 3; j++) {
        const cell = row.insertCell();
        cell.innerHTML = getRandomWord();
    }
}

function deleteRow() {
    const table = document.querySelector("#myTable");

    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function reverseTable() {
    const table = document.querySelector("#myTable");
    const rows = Array.from(table.rows);
    rows.reverse();

    table.innerHTML = "";

    rows.forEach(row => {
        table.appendChild(row);
    });
}