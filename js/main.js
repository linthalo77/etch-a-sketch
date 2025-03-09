const gridContainer = document.querySelector(".grid-container");
const btnSquares = document.querySelector(".square-num-button");

let sketchboardSize = 800; // 800x800 px

let squareNum = 21; // default 16 x 16
btnSquares.addEventListener("click", () => {
    squareNum = prompt("Size of grid? (eg. 16 = 16x16 grid)");
    console.log(squareNum);
})

let squaresToBeGenerated = squareNum * squareNum + (squareNum + 1)
let squareSize = Math.round((sketchboardSize / squareNum) - 2);       // -2 because of border size
console.log(squareSize);

// divide height and width / num of squares to get height and width for squares
for (let i = 1; i < squaresToBeGenerated; ++i) {
    const div = document.createElement("div");
    if (!(i % (squareNum + 1))) {
        div.setAttribute("style", "width: 100%; height: 0px; border: 0px;");
    } else {
        div.classList.toggle("square");
        div.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; border: 1px solid black`);
    }
    gridContainer.appendChild(div);
}


const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    let temp = square.getAttribute("background-color")
    square.addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "green";
    })
    square.addEventListener("mouseleave", function (e) {
        e.target.style.backgroundColor = "green";
    })
});


