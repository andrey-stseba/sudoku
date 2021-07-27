"use strict";
const game = {
  board: "",
  boardEl: document.querySelector(".sudoku_board"),

  createCells() {
    const cells = [];

    for (let i = 0; i < 81; i++) {
      const cell = document.createElement("div");
      cell.className = ".sudoku_cell";
      cells.push(cell);
    }

    this.cells = cells;
    this.boardEl.append(...cells);
  },
  start(coplexity) {
    this.board = sudoku.generate(coplexity);
  },
};

game.createCells();
game.start("medium");
