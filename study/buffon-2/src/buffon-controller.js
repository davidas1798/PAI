/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author David Arteaga Sánchez
 * @since May 22 2022
 * @desc Buffon Controller
 *       Class BuffonController. This class will be the controller of 
 *       the events of the exam of the PAI subject. It will represent 
 *       the model of the buffon problem.
 * @module buffon-controller.js
 */

import { Buffon } from "./buffon.js";
import { BuffonView } from "./buffon-view.js";

export class BuffonController {
  #buffonModel;
  #buffonView;
  #oneNeedleButton;
  #tenNeedleButton;
  #hundredNeedleButton;
  #inputNeedle;
  #inputButton;
  #needleCoordinatesContainer;

  constructor(buffonModel, buffonView) {
    this.#buffonModel = buffonModel;
    this.#buffonView = buffonView;

    this.#oneNeedleButton = document.getElementById('one-needle');
    this.#tenNeedleButton = document.getElementById('ten-needle');
    this.#hundredNeedleButton = document.getElementById('hundred-needle');
    this.#inputNeedle = document.getElementById('input-needle');
    this.#inputButton = document.getElementById('input-button');

    this.#oneNeedleButton.addEventListener('click', this.#generateOneNeedle);
    this.#tenNeedleButton.addEventListener('click', this.#generateTenNeedle);
    this.#hundredNeedleButton.addEventListener('click', this.#generateHundredNeedle);
    this.#inputButton.addEventListener('click', this.#generateInputNeedle);

    this.#needleCoordinatesContainer = document.createElement('div');
    document.querySelector('body').appendChild(this.#needleCoordinatesContainer);
  }

  #generateOneNeedle = () => {
    const pointA = this.#buffonModel.generatePointA();
    this.#buffonView.drawPoint(pointA, 3, 'red');
    const pointB = this.#buffonModel.generatePointB(pointA);
    this.#buffonView.drawPoint(pointB, 3, 'blue');
    this.#buffonView.connectPoints(pointA, pointB);
    const mediumPoint = this.#buffonModel.getMediumPoint(pointA, pointB)
    this.#buffonView.drawPoint(mediumPoint, 4, 'black');
    this.#needleCoordinatesContainer.innerHTML = '';
    const text = document.createElement('strong');
    text.textContent = `Coordiantes of the medium point of the last needle: ${mediumPoint}`;
    this.#needleCoordinatesContainer.appendChild(text);
  }

  #generateTenNeedle = () => {
    for(let counter = 0; counter < 10; counter++) {
      this.#generateOneNeedle();
    }
  }

  #generateHundredNeedle = () => {
    for(let counter = 0; counter < 100; counter++) {
      this.#generateOneNeedle();
    }
  }

  #generateInputNeedle = () => {
    const iterations = this.#inputNeedle.value;
    for(let counter = 0; counter < iterations; counter++) {
      this.#generateOneNeedle();
    }
  }
}