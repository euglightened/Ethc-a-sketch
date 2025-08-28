// ----- VARIABLES -----
const grid = document.getElementById('grid');
let isDrawing = false;
let currentColor = 'black';
let gridSize = 16;

// ----- FUNCTIONS -----

// Create the drawing grid
function createGrid(size) {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.style.border = '1px solid #eee';
    cell.addEventListener('mousedown', () => paint(cell));
    cell.addEventListener('mouseover', () => { if (isDrawing) paint(cell); });
    grid.appendChild(cell);
  }
}

// Paint a cell
function paint(cell) {
  cell.style.backgroundColor = currentColor;
}

// Clear the grid
function clearGrid() {
  grid.querySelectorAll('div').forEach(cell => cell.style.backgroundColor = 'white');
}

// Change grid size
function changeGridSize() {
  const size = prompt('Enter grid size (max 64):', gridSize);
  if (size >= 1 && size <= 64) {
    gridSize = size;
    createGrid(gridSize);
  } else {
    alert('Invalid size!');
  }
}

// ----- EVENTS -----
document.body.addEventListener('mousedown', () => isDrawing = true);
document.body.addEventListener('mouseup', () => isDrawing = false);

// Keyboard shortcuts
document.body.addEventListener('keydown', (e) => {
  if (e.key === 'c' || e.key === 'C') clearGrid();
  if (e.key === 's' || e.key === 'S') changeGridSize();
});

// Color palette selection
const paletteColors = document.querySelectorAll('.color');
paletteColors.forEach(div => {
  div.addEventListener('click', () => {
    currentColor = div.style.backgroundColor;
  });
});

// ----- INITIALIZE -----
createGrid(gridSize);