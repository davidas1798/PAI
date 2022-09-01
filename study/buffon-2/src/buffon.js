/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author David Arteaga Sánchez
 * @since May 22 2022
 * @desc Buffon
 *       Class Buffon. This class will be the model of the exam
 *       of the PAI subject. It will represent the model of the 
 *       buffon problem.
 * @module buffon.js
 */

export class Buffon {
  /**
   * Length of the needles and the separation between lines
   * @private
   */
  #needleLength = 0;

  /**
   * Array that will hold the y position of every line in the table
   * @private
   */
  #lines = [];

  /**
   * Width of the table
   * @private
   */
  #WIDTH = 0;

  /**
   * Height of the table
   * @private
   */
  #HEIGHT = 0;

  /**
   * First points of the needles
   * @private
   */
  #pointsA = [];

  /**
   * Second points of the needles
   * @private
   */
  #pointsB = [];

  /**
   * Creates a new model for the buffon problem
   * @param {Number} width Width of the table
   * @param {Number} height Height of the table
   * @param {Number} needleLength Length of the needles and the separation between lines
   */
  constructor(width, height, needleLength) {
    this.#WIDTH = width;
    this.#HEIGHT = height;
    this.#needleLength = needleLength;
    for (let separation = needleLength; separation < this.#HEIGHT; separation += needleLength) {
      this.#lines.push(separation);
    }
  }

  generatePointA() {
    const xCoordinate = this.#generateRandom(0, this.#WIDTH);
    const yCoordinate = this.#generateRandom(0, this.#HEIGHT);
    this.#pointsA.push([xCoordinate, yCoordinate]);
    return [xCoordinate, yCoordinate];
  }

  generatePointB(pointA) {
    let xCoordinate = this.#generateRandom(0, this.#WIDTH);
    let yCoordinate = this.#generateRandom(0, this.#HEIGHT);
    let mediumPoint = this.getMediumPoint(pointA, [xCoordinate, yCoordinate]);
    let nearestLine = this.getNearestLine(mediumPoint);
    while (
      Math.abs( this.#distance( pointA, [xCoordinate, yCoordinate] ) - this.#needleLength ) > 0.05
      || xCoordinate < 0 || xCoordinate > this.#WIDTH || yCoordinate < 0 || yCoordinate > this.#HEIGHT
      || this.#distance(mediumPoint, [mediumPoint[0], nearestLine]) > this.#needleLength / 2
    ) {
      console.log(this.#lines.length);
      xCoordinate = this.#generateRandom(pointA[0] - this.#needleLength, pointA[0] + this.#needleLength);
      yCoordinate = this.#generateRandom(pointA[1] - this.#needleLength, pointA[1] + this.#needleLength);
      mediumPoint = this.getMediumPoint(pointA, [xCoordinate, yCoordinate]);
      nearestLine = this.getNearestLine(mediumPoint);
    }
    return [xCoordinate, yCoordinate];
  }

  getMediumPoint(pointA, pointB) {
    return [( pointA[0] + pointB[0] ) / 2, ( pointA[1] + pointB[1] ) / 2];
  }

  getNearestLine(point) {
    let minimum = Infinity;
    let result;
    for (let line of this.#lines) {
      if(Math.abs(line - point[1]) < minimum) {
        minimum = line;
        result = line;
      }
    }
    return result;
  }

  #generateRandom(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  }

  #distance(pointA, pointB) {
    return Math.sqrt( (pointB[0] - pointA[0]) ** 2 + (pointB[1] - pointA[1]) ** 2);
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

  getNeedleLength() {
    return this.#needleLength;
  }
}