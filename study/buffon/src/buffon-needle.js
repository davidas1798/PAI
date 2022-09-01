/**
 * Universidad de La Laguna 
 * Escuela Superior Técnica de Ingeniería Informática
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author David Arteaga Sánchez
 * @since June 08 2022
 * @desc Class Buffon Needle
 *       This class will implement the code of the buffon needle
 *       neccessary to estimate the value of PI.
 * @module buffon-needle.js
 */

"use strict";

/**
 * Class of the Buffon Needle that will be used to estimate the
 * value of PI.
 */
export class BuffonNeedle {
  /**
   * First point of the needle.
   * @type {Array} Array with x and y coordinates
   * @private
   */
  #pointA = [0, 0];

  /**
   * Last point of the needle.
   * @type {Array} Array with x and y coordinates
   * @private
   */
  #pointB = [0, 0];

  /**
   * Length of the needle.
   */
  #LENGTH = 0;

  /**
   * This will create the needle in a random position with a given length
   * @param {Number} maxX The maximum value available for the x coordinate
   * @param {Number} maxY The maximum value available for the y coordinate
   * @param {Number} length Length of the needle
   */
  constructor(maxX, maxY, length) {
    this.#LENGTH = length;
    this.#pointA = [this.#generateRandom(0, maxX), this.#generateRandom(0, maxY)];
    while ( 
      Math.abs(this.#distance(this.#pointA, this.#pointB) - this.#LENGTH) > 0.05  
      || this.#pointB[0] > maxX || this.#pointB[1] > maxY || this.#pointB[0] < 0 || this.#pointB[1] < 0
    ) {
      this.#pointB = [
        this.#generateRandom(this.#pointA[0] - this.#LENGTH, this.#pointA[0] + this.#LENGTH), 
        this.#generateRandom(this.#pointA[1] - this.#LENGTH, this.#pointA[1] + this.#LENGTH)
      ];
    }
    console.log(this.#pointB);
  }

  /**
   * Gets the distance between two points
   * @private
   * @param {Array} pointA 
   * @param {Array} pointB 
   * @returns The distance between two points
   */
  #distance(pointA, pointB) {
    return Math.sqrt( (pointB[0] - pointA[0]) ** 2 + (pointB[1] - pointA[1]) ** 2);
  }

  /**
   * Generates a random number between two given numbers
   * @private
   * @param {Number} minimum 
   * @param {Number} maximum 
   * @returns A random number between minimum and maximum
   */
  #generateRandom(minimum, maximum) {
    return Math.floor( Math.random() * (maximum - minimum + 1) + minimum);
  }

  /**
   * Gets the first point of the needle
   * @returns The first point of the needle
   */
  getPointA() {
    return this.#pointA;
  }

  /**
   * Gets the second point of the needle
   * @returns The second point of the needle
   */
  getPointB() {
    return this.#pointB;
  }

  /**
   * Gets the length of the needle
   * @returns The length of the needle
   */
  getLength() {
    return this.#LENGTH
  }
}