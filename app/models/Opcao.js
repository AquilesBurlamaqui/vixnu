class Opcao {

    constructor(opcao,v) {
      this._op = opcao;
      this._votos = 0;
    }
  
  	get opcao() {
  		return this._op;
  	}
    get votos() {
        return this._votos;
    }  
    vote() {
    	this._votos++;
    }
}

module.exports = function() {
  return Opcao;
}