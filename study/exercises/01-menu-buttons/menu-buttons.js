/**
 * Universidad de La Laguna
 * Escuela Técnica Superior de Ingeniería Informática
 * bla bla
 * 
 * @author David Arteaga Sánchez
 * @since June 09 2022
 * @desc Exercise Menu with buttons
 *       This exercise is done with the objective of practice
 *       for the exam bla bla
 */

class Menu {
  #buttonsContainter;
  #statusBar;
  #buttons;

  constructor() {
    this.#buttonsContainter = document.querySelector('#menu');
    this.#statusBar = document.querySelector('#status-bar');
    this.#statusBar.textContent = 'No button clicked';
    this.#buttons = [
      new Button(this.#buttonsContainter, 'A'),
      new Button(this.#buttonsContainter, 'B'),
      new Button(this.#buttonsContainter, 'C')
    ];
    document.addEventListener('button-clicked', this.#showButtonClicked);
  }

  #showButtonClicked = (event) => {
    this.#statusBar.textContent = event.detail + ' button was clicked';
  }
}

class Button {
  #buttonText = '';
  #htmlElement;

  constructor(container, text) {
    this.#buttonText = text;
    this.#htmlElement = document.createElement('button');
    this.#htmlElement.textContent = text;
    this.#htmlElement.addEventListener('click', this.#onClick);
    container.appendChild(this.#htmlElement);
  }

  #onClick = () => {
    const BUTTON_INFO = this.#buttonText;
    console.log(BUTTON_INFO.buttonName);
    document.dispatchEvent(new CustomEvent('button-clicked', { detail: BUTTON_INFO }));
  }
}

new Menu();