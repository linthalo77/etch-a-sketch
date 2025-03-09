const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i < 273; ++i) {
    const div = document.createElement("div");
    if (!(i % 17)) {
        div.setAttribute("style", "width: 100%; height: 0px; border: 0px;");
    } else {
        div.setAttribute("style", "height: 25px; width:25px; border: 1px solid black");
    }
    gridContainer.appendChild(div);
}



