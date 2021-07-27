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

//https://webinar.web-academy.com.ua/stvoryuyemo-holovolomku-zahodynu-za-dopomohoyu-javascript-live?utm_source=smartsender&utm_medium=events&utm_campaign=free-webinar-for-fe-with-Borys-Cherepaha-21-07-2021&utm_content=free-webinar&utm_term=free-webinar-for-fe-with-Borys-Cherepaha-21-07-2021
