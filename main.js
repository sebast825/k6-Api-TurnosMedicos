import { Options } from "./config/options.js";
import { getTurnosDisponibles } from "./scenarios/getTurnosDisponibles.js";
import { getHealthCheck } from "./scenarios/getHealthCheck.js";

export const options = Options.getHealthCheck;

export default function () {
    // ejemplo simple: llamar un endpoint para el médico 5
    //getTurnosDisponibles(5);
    getHealthCheck();
  
  }
