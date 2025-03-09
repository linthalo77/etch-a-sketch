const gridContainer = document.querySelector(".grid-container");
const btnSquares = document.querySelector(".square-num-button");
const sketchboardSize = 800;                                                // 800x800 px
let rowSize;
let squaresToBeGenerated;
let squareSize;

window.onload = () => {
    console.log("Started Code");
    rowSize = 16;                                                           // default 16 x 16
    squaresToBeGenerated = rowSize * rowSize + (rowSize + 1);               // need to add (squareNum + 1) to compensate for line break squares
    squareSize = Math.round((sketchboardSize / rowSize) -2);                // -2 because of border size
    generateGrid();
    addHover();
}

function generateGrid() {
    for (let i = 1; i < squaresToBeGenerated; ++i) {
        const div = document.createElement("div");
        if (!(i % (rowSize + 1))) {
            div.setAttribute("style", "width: 100%; height: 0px; border: 0px;");
        } else {
            div.classList.add("square");
            div.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; border: 1px solid black`);
        }
        gridContainer.appendChild(div);
    }
}

function addHover() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", function (e) {
            e.target.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        })
    });
}

function deleteGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => { 
        square.remove();
    });
}

btnSquares.addEventListener("click", () => {
    rowSize = prompt("Size of grid? (eg. 16 = 16x16 grid)");
    rowSize = +rowSize;
    squaresToBeGenerated = rowSize * rowSize + (rowSize + 1);               // need to add (squareNum + 1) to compensate for line break squares
    squareSize = Math.round((sketchboardSize / rowSize) -2);                // -2 because of border size
    deleteGrid();
    generateGrid();
    addHover();
})




