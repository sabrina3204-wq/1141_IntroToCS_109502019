const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.querySelector("#gradeTable tbody");

let rowCount = 0;

submitBtn.addEventListener("click", function () {
    const math = Number(mathInput.value);
    const english = Number(englishInput.value);

    // Input validation
    if (mathInput.value === "" || englishInput.value === "") {
        alert("Please enter both grades.");
        return;
    }

    const average = ((math + english) / 2).toFixed(1);
    rowCount++;

    // Create new row
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td class="math">${math}</td>
        <td class="english">${english}</td>
        <td class="rowAvg">${average}</td>
    `;

    tableBody.appendChild(newRow);

    updateColumnAverages();

    // Clear input
    mathInput.value = "";
    englishInput.value = "";
});

function updateColumnAverages() {
    const mathCells = document.querySelectorAll(".math");
    const englishCells = document.querySelectorAll(".english");
    const rowAvgCells = document.querySelectorAll(".rowAvg");

    let mathSum = 0;
    let englishSum = 0;
    let overallSum = 0;

    mathCells.forEach(cell => mathSum += Number(cell.textContent));
    englishCells.forEach(cell => englishSum += Number(cell.textContent));
    rowAvgCells.forEach(cell => overallSum += Number(cell.textContent));

    const count = mathCells.length;

    document.getElementById("mathAvg").textContent =
        (mathSum / count).toFixed(1);

    document.getElementById("englishAvg").textContent =
        (englishSum / count).toFixed(1);

    document.getElementById("overallAvg").textContent =
        (overallSum / count).toFixed(1);
}
