/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author David Arteaga Sánchez
 * @since May 22 2022
 * @desc Buffon View
 *       Class Buffon View. This class will be the view of the exam
 *       of the PAI subject. It will represent the visual part of the 
 *       model of the buffon problem.
 * @module buffon-view.js
 */

import { Buffon } from "./buffon.js";

export class BuffonView {
  /**
   * Canvas of the webpage where the program will be printed
   * @private
   */
  #canvas;

  /**
   * Context of the canvas
   * @private
   */
  #ctx;

  /**
   * Model of the program
   * @private
   */
  #buffonModel;

  /**
   * Creates a new view for the buffon problem
   * @param {HTMLElement} canvas 
   * @param {Buffon} buffonModel 
   */
  constructor(canvas, buffonModel) {
    this.#canvas = canvas;
    this.#ctx = this.#canvas.getContext('2d');
    this.#buffonModel = buffonModel;
    this.#drawLines();
  }

  #drawLines() {
    const lines = this.#buffonModel.getLines();
    for (let singleLine of lines) {
      this.#ctx.moveTo(0, singleLine);
      this.#ctx.lineTo(this.#buffonModel.getWidth(), singleLine);
    }
    this.#ctx.stroke();
  }

  drawPoint(point, radius, color) {
    this.#ctx.beginPath();
    this.#ctx.fillStyle = color;
    this.#ctx.arc(point[0], point[1], radius, 0, 2 * Math.PI);
    this.#ctx.fill();
    this.#ctx.fillStyle = 'black';
  }

  connectPoints(pointA, pointB) {
    this.#ctx.beginPath();
    this.#ctx.moveTo(pointA[0], pointA[1]);
    this.#ctx.lineTo(pointB[0], pointB[1]);
    this.#ctx.stroke();
  }
}