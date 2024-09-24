const container = document.querySelector(".container");
const gridNumber = document.querySelector("#grid-number");

function getGrid(param) {
    for (let i = 1; i <= param; i++) {
        let div = document.createElement("div");
        div.innerHTML += `<div class="grid">${i}</div>`;
        container.appendChild(div);
        for (let j = 1; j <= param; j++) {
            div.innerHTML += `<div class="grid">${i}</div>`;
            container.appendChild(div);
        }
    }
}

getGrid(16);

gridNumber.addEventListener("click", function () {
    let value = prompt("Enter the number of squares per side for the new grid:", "");

    let squares = document.querySelectorAll(".grid");
    squares.forEach(square => {
        square.remove();
    })

    if (+value >= 1 && +value <= 100) {
        getGrid(+value);
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.")
    }
});