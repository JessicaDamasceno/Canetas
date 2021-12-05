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

    escrever() {
        if(this.tampada == true || this.carga <= 0){
            console.log("Você não pode escrever, verifique sua caneta.");
        }else{
            console.log("Escrevendo...")
        }
    }

    tampar(){
        if(this.tampada){
            console.log("Sua caneta já está tampada!");
        }else{
            this.tampada = true;
            console.log("Sua caneta foi tampada!");
        }
    }

    destampar(){
        if(this.tampada){
            this.tampada = false;
            console.log("Sua caneta foi destampada!");
        }else{
            console.log("Sua caneta já está destampada!");
        }
    }
}
