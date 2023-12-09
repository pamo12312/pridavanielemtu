const words = ["Jirka", "Ondra", "Lucie", "Tereza", "Patrik", "Denis"];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function initializeTable() {
    const table = document.querySelector("#myTable");

    // Add initial 10 rows to the table
    for (let i = 0; i < 10; i++) {
        const row = table.insertRow();

        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell();
            cell.innerHTML = getRandomWord();
        }
    }
}

function addRow() {
    const table = document.querySelector("#myTable");
    const row = table.insertRow();

    for (let j = 0; j < 5; j++) {
        const cell = row.insertCell();
        cell.innerHTML = getRandomWord();
    }
}

function deleteRow() {
    const table = document.querySelector("#myTable");

    // Check if the table has more than 1 row before deleting the last row
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function reverseTable() {
    const table = document.querySelector("#myTable");
    const rows = Array.from(table.rows);
    rows.reverse();

    table.innerHTML = "";

    rows.forEach((row) => {
        table.appendChild(row);
    });
}

// Initialize the table when the page is loaded
document.addEventListener("DOMContentLoaded", initializeTable);
