/**
 * 
 */

"use strict";

import { BuffonNeedle } from "./buffon-needle.js";
import { BuffonTable } from "./buffon-table.js";

/**
 * @class
 * @desc BuffonView class. This class is used 
 *       to show the user the graphical part
 *       of the program Buffon Needles.
 */
export class BuffonView {
  /**
   * Canvas of the web page
   * @private
   */
  #canvas;

  /**
   * Context of the canvas
   * @private
   */
  #ctx;

  /**
   * Table of the program. The needles will be genereted there.
   * @type {BuffonTable}
   * @private
   */
  #table;

  /**
   * This will create the view of the program
   * @param {HTMLElement} canvas The canvas where the table will be printed.
   * @param {BuffonTable} table The Buffon Table where the needles will be generated.
   */
  constructor(canvas, table) {
    this.#canvas = canvas;
    this.#ctx = this.#canvas.getContext('2d');
    this.#table = table;
    this.#drawLines(1);
  }

  /**
   * Draw the lines in the table.
   * @param {Number} lineWidth 
   */
  #drawLines(lineWidth) {
    const lines = this.#table.getLines();
    this.#ctx.beginPath();
    for (let singleLine of lines) {
      console.log(singleLine);
      this.#ctx.moveTo(0, singleLine[1]);
      this.#ctx.lineTo(this.#table.getWidth(), singleLine[1]);
    }
    this.#ctx.strokeStyle = 'red';
    this.#ctx.lineWidth = lineWidth;
    this.#ctx.stroke();
    this.#ctx.strokeStyle = 'black';
  }

  /**
   * Draw a given needle in the canvas
   * @param {BuffonNeedle} needle 
   * @param {Number} lineWidth 
   */
  drawNeedle(needle, lineWidth) {
    this.#ctx.lineWidth = lineWidth;
    this.#ctx.beginPath();
    this.#ctx.moveTo(needle.getPointA()[0], needle.getPointA()[1]);
    this.#ctx.lineTo(needle.getPointB()[0], needle.getPointB()[1]);
    this.#ctx.stroke();
  }
}


