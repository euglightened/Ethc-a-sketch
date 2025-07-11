let squares = document.getElementById("squares")

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    squares.appendChild(square)
}

const squareNumButton = document.getElementById("squareNumButton")
squareNumButton.addEventListener('click', function() {
    let numofSquares = prompt("Enter number of squares")
    size = parseInt(numofSquares)
    if (size >= 1 && size <= 100) {
        changingSquares(size)
    } else {
        alert("Number can be 1 - 99")
    }
});

function changingSquares(size) {
    squares.innerHTML = "";
    squares.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    squares.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const totalSquares = size * size 

    for (i = 0; i < totalSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square")
        squares.appendChild(square)
    }
}