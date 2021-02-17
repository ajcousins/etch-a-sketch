
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

const canvasSize = 337;
var widthStart = 16;

buildCanvas (widthStart);

function buildCanvas (width) {
    let height = width;

    const canvas = document.createElement("div");
    canvas.setAttribute("id", "canvas");
    container.insertBefore(canvas, container.firstChild);

    for (let i = 0; i < height; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        canvas.appendChild(row);
        for (let j = 0; j < width; j++) {
            var unit = document.createElement("div");
            unit.classList.add("unit");
            unit.setAttribute("id", `x${i} y${j}`);

            unit.addEventListener("mouseover", hover);

            // Set CSS unit sizes before appending
            let unitHeight = (canvasSize - width - 1) / width
            unit.style.height = `${unitHeight}px`
            unit.style.width = `${unitHeight}px`
            row.appendChild(unit);
        }
    }
    bottomEdge = document.createElement("div");
    bottomEdge.classList.add("bottomEdge");
    canvas.appendChild(bottomEdge);
}

function hover () {
    this.classList.add("yellow");
}

const input = document.createElement("input");
input.classList.add("input");
input.setAttribute("id", "input");
input.setAttribute("type", "number");
input.setAttribute("min", "1");
input.setAttribute("max", "100");
input.setAttribute("value", "16");
container.appendChild(input);

const button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "GENERATE";
button.addEventListener("click", restart);
container.appendChild(button);

function restart () {
    console.log("restart");
    a = document.getElementsByClassName("yellow");
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("yellow");
        i--;
    }
    console.log(input.value);
    document.getElementById("canvas").remove();
    buildCanvas(input.value);
}