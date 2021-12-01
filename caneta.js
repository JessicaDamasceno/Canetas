export class Canetas {
    //static numeroDeCanetas = 0;
    modelo;
    cor;
    ponta;
    carga;
    tampada;

    // constructor (modelo, cor, ponta, carga, tampada){
    //     this.modelo = modelo;
    //     this.cor = cor;
    //     this.ponta = ponta;
    //     this.carga = carga;
    //     this.tampada = tampada;
    //     Canetas.numeroDeCanetas += 1;
    //}


// class escrever {
//     if(tampada == true){
//          console.log(numeroDeCanetas);
//     }
// }

tampar(){
    if(tampada == false){
        console.log("Sua caneta foi tampada");
        tampada = true;
    }else{
        console.log("Sua caneta já está tampada");
    }
}
}

// destampar(){
//     if(tampada){

//     }
// }
