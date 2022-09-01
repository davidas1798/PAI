/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author David Arteaga Sánchez
 * @since May 22 2022
 * @desc Buffon Client
 *       Client of the program of the Buffon Problem
 */

import { Buffon } from "./buffon.js"
import { BuffonView } from "./buffon-view.js"
import { BuffonController } from "./buffon-controller.js";

const canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight *0.8;
const model = new Buffon(canvas.width, canvas.height, canvas.height / 3);
const view = new BuffonView(canvas, model);
new BuffonController(model, view);