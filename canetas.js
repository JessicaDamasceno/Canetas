import { Canetas } from "./caneta.js";

let caneta1 = new Canetas;
    caneta1.modelo = "BIC";
    caneta1.cor = "Vermelho";
    caneta1.ponta = 0.5;
    caneta1.carga = 50;
    caneta1.tampada = false;

    console.log(caneta1);
    caneta1.tampar();
    console.log(caneta1);
    caneta1.escrever();


let caneta2 = new Canetas;
    caneta2.modelo = "BIC";
    caneta2.cor = "Preto";
    caneta2.carga = 15;
    caneta2.tampada = true;

    console.log(caneta2);
    caneta2.destampar();
    console.log(caneta2);
    caneta2.escrever();
