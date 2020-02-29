var Opcao = require('./Opcao.js')()

class Questao {
    constructor(autor, sala, pergunta, op1,op2,op3,op4) {
      this._id = Questao.number; 
      this._autor = autor;
      this._sala = sala;
      this._pergunta = pergunta;
      this._op1 = new Opcao(op1); 
      this._op2 = new Opcao(op2);
      this._op3 = new Opcao(op3);
      this._op4 = new Opcao(op4);
      Questao.number++;
    }

    //Getter
    get id() {
        return this._id;
    }  
  
    get pergunta() {
        return this._pergunta;
    }  

    print() {
      console.log("\nid: "+this._id+" "+this._pergunta);
      console.log("autor: "+this._autor+" "+this._sala);
      console.log("op1: "+this._op1.votos);
      console.log("op2: "+this._op2.votos);
      console.log("op3: "+this._op3.votos);
      console.log("op4: "+this._op4.votos);
    }
}

Questao.number = 0;

module.exports = function() {
  return Questao;
}