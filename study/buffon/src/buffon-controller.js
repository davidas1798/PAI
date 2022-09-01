/**
 * 
 */

"use strict";

import { BuffonNeedle } from "./buffon-needle.js";
import { BuffonTable } from "./buffon-table.js";
import { BuffonView } from "./buffon-view.js";

export class BuffonController {
  #table;
  #view;
  #button;
  #inputNeedles;
  #multipleButton;
  #needlesNumber;
  #statusPi;

  constructor(table, view) {
    this.#table = table;
    this.#view = view;
    this.#button = document.getElementById('needle-button');
    this.#button.addEventListener('click', this.#generateNeedle);
    this.#inputNeedles = document.getElementById('needle-input');
    this.#multipleButton = document.getElementById('generate-multiple');
    this.#multipleButton.addEventListener('click', this.#generateMultiple);
    this.#statusPi = document.getElementById('status-pi');
  }

  #generateNeedle = () => {
    const LINE_WIDTH = 1;
    const needle = this.#table.generateNeedle();
    this.#view.drawNeedle(needle, LINE_WIDTH);
    this.#statusPi.textContent = 'π ≈ ' + String(this.#table.calculatePi().toFixed(4));
  }

  #generateMultiple = () => {
    const LINE_WIDTH = 1;
    let maxIterations = this.#inputNeedles.value;
    for (let i = 0; i < maxIterations; i++) {
      const needle = this.#table.generateNeedle();
      this.#view.drawNeedle(needle, LINE_WIDTH);
    }
    this.#statusPi.textContent = 'π ≈ ' + String(this.#table.calculatePi().toFixed(4));
  }
}

const canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.7;
const table = new BuffonTable(canvas.width, canvas.height, canvas.height / 3);
const view = new BuffonView(canvas, table);
const controller = new BuffonController(table, view);