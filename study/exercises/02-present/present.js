/**
 * Universidad de La Laguna
 * bla bla
 * blablabla
 * @author David Arteaga Sánchez
 */

'use strict';

const PRESENT_SOURCES = [
  'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif',
  'https://media.giphy.com/media/LEcRaYyUptIxG/giphy.gif',
  'https://media.giphy.com/media/3BBv1D4AFbJkY/giphy.gif',
  'https://media.giphy.com/media/13smkcXZiTLDgc/giphy.gif',
  'https://media.giphy.com/media/GknfGjiYhsFQk/giphy.gif'
];

class App {
  #presentContainer;
  #textContainer;
  #presents = [];
  #openedCount = 0;

  constructor(presentContainer, textContainer) {
    this.#presentContainer = presentContainer;
    this.#textContainer = textContainer;
    for (let presentSrc of PRESENT_SOURCES) {
      const NEW_PRESENT = new Present(this.#presentContainer, presentSrc, this.#onPresentOpened);
      this.#presents.push(NEW_PRESENT);
    }
  }

  #onPresentOpened = () => {
    this.#openedCount++;
    console.log(this.#openedCount);
    if (this.#openedCount === this.#presents.length) {
      this.#textContainer.textContent = 'Enjoy your 5 presents!';
    }
  }
}

class Present {
  #presentContainer;
  #presentSrc;
  #onOpenCallback;
  #image;

  constructor(containerElement, presentSrc, onOpenCallback) {
    this.#presentContainer = containerElement;
    this.#presentSrc = presentSrc;
    this.#onOpenCallback = onOpenCallback;

    this.#image = document.createElement('img');
    this.#image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.#image.addEventListener('click', this.#openPresent);
    this.#presentContainer.appendChild(this.#image);
  }

  #openPresent = () => {
    this.#image.src = this.#presentSrc;
    this.#image.removeEventListener('click', this.#openPresent);
    this.#onOpenCallback();
  }
}

const container = document.querySelector('#present-container');
const text = document.querySelector('#status-text');
new App(container, text);
