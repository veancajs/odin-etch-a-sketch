const main = document.querySelector(".main");
const container = document.querySelector(".container");
const gridNumber = document.querySelector("#grid-number");

function getGrid(param) {
    for (let i = 1; i <= param; i++) {
        let div = document.createElement("div");
        div.innerHTML += `<div class="grid"></div>`;
        container.appendChild(div);
        for (let j = 1; j < param; j++) {
            div.innerHTML += `<div class="grid"></div>`;
            container.appendChild(div);
        }
    }
}

getGrid(16);

gridNumber.addEventListener("click", function () {
    let value = prompt("Enter the number of squares per side for the new grid:", "");

    const squares = document.querySelectorAll(".grid");
    squares.forEach(square => {
        square.remove();
    })

    if (+value >= 1 && +value <= 100) {
        getGrid(+value);
        setGridColor();
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.")
    }
});

function getRandomColor() {
    const color = ["red", "blue", "green", "yellow", "pink", "purple", "brown", "violet", "orange", "gold"];
    return color[Math.floor(Math.random() * color.length)];
}

function setGridColor() {
    const squares = document.querySelectorAll(".grid");
    let value = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

    squares.forEach(function (square) {
        let random = getRandomColor();
        let opacityValue = 0;
        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = "red";
            square.style.backgroundColor = random;
            square.style.opacity = value[opacityValue];
            opacityValue++;
        });
    })
}

setGridColor();