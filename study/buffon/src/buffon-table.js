/**
 * Universidad de La Laguna
 * Escuela Técnica Superior de Ingeniería Informática
 * bla bla
 * @author David Arteaga Sánchez
 * @desc Buffon Table Class
 *       This file will hold the code of the table class where the
 *       buffon needles will be generated.
 * @module buffon-table.js
 */

"use strict";

import { BuffonNeedle } from "./buffon-needle.js";

export class BuffonTable {
  /**
   * Width of the table
   * @private
   * @type {Number}
   */
  #WIDTH = 0;

  /**
   * Height of the table
   * @private
   * @type {Number}
   */
  #HEIGHT = 0;

  /**
   * Buffon Needles created
   * @private
   * @type {Array}
   */
  #needles = [];

  /**
   * The length that will have every needle generated in the table
   * @private
   * @type {Number}
   */
  #needleLength = 0;

  /**
   * Lines generated in the table
   * @private
   * @type {Array}
   */
  #lines = [];

  /**
   * Seperation between every line. In this example it will be equal to the length
   * of the needles
   * @private
   * @type {Number}
   */
  #lineSeparation = 0;

  /**
   * Number of needles that cross a line
   * @private
   * @type {Number}
   */
  #crossedCounter = 0;

  /**
   * This will instantiate the attributes to create a new table
   * @param {Number} width The width of the table
   * @param {Number} height The height of the table
   * @param {Number} needleLength The length of the needles that will be created
   */
  constructor(width, height, needleLength) {
    this.#WIDTH = width;
    this.#HEIGHT = height;
    this.#needleLength = needleLength;
    this.#lineSeparation = needleLength;
    this.#generateLines();
  }

  /**
   * Generates the lines of the table.
   */
  #generateLines() {
    for (let separation = this.#lineSeparation; separation < this.#HEIGHT; separation += this.#lineSeparation) {
      const NEW_LINE =  [0, separation];
      this.#lines.push(NEW_LINE);
    }
  }

  /**
   * Generates a needle and stores it.
   */
  generateNeedle() {
    const needle = new BuffonNeedle(this.#WIDTH, this.#HEIGHT, this.#needleLength);
    this.#needles.push(needle);
    if (this.needleCrossLine(needle)) {
      this.#crossedCounter++;
      console.log('CRUZO');
    }
    return needle;
  }

  needleCrossLine(needle) {
    const pointA = needle.getPointA();
    const pointB = needle.getPointB();
    for (let line of this.#lines) {
      if ( (pointA[1] <= line[1] && pointB[1] >= line[1]) || (pointB[1] <= line[1] && pointA[1] >= line[1]) )
        return true;
    }
    return false;
  }

  calculatePi() {
    return 2 * this.#needles.length / this.#crossedCounter;
  }

  getLines() {
    return this.#lines;
  }

  getWidth() {
    return this.#WIDTH;
  }

  getHeight() {
    return this.#HEIGHT;
  }
}
