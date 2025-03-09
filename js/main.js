const gridContainer = document.querySelector(".grid-container");
const changeGrid = document.querySelector(".change-grid");

const sketchboardSize = 800;                                                // 800x800 px

function generateGrid(size) {
    let squareSize = sketchboardSize / size - 2;                            // subtract 2 because of border size
    for (let i = 0; i < (+size * +size); ++i) {
        const square = document.createElement("div");

        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; border: 1px solid black`);
        square.classList.toggle("square");

        gridContainer.appendChild(square);
    }

    addHover();
}

function addHover() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", function (e) {
            const red = Math.round(Math.random() * 255);
            const green = Math.round(Math.random() * 255);
            const blue = Math.round(Math.random() * 255);
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    });
}

function deleteGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => { 
        square.remove();
    });
}


generateGrid(16);

changeGrid.addEventListener("click", () => {
    let size = +prompt("Size of grid? (eg. 16 = 16x16 grid)");
    while(size > 100 || size < 1) {
        alert("Sorry! Values over 100 are not allowed.")
        size = +prompt("Size of grid? (eg. 16 = 16x16 grid)");
    }

    deleteGrid();
    generateGrid(size);
})




