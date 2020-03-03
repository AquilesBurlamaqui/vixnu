class Opcao {

    constructor(opcao,v) {
      this._op = opcao;
      this._votos = 0;
      this._usuarios = [];
    }
  
  	get opcao() {
  		return this._op;
  	}
    get votos() {
        return this._votos;
    }  
    vote(usuario) {
      this._usuarios.push(usuario);
    	this._votos++;
    }
}

module.exports = function() {
  return Opcao;
}