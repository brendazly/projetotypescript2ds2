"use strict";
var empresa;
(function (empresa) {
    class Produto {
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get preco() {
            return this._preco;
        }
        set preco(preco) {
            this._preco = preco;
        }
        get imp() {
            return this._imp;
        }
        set imp(imp) {
            this._imp = imp;
        }
        calcularImposto() {
            return (this.preco * this.imp) / 100;
        }
        resultadoFinal() {
            return (this.preco + this.calcularImposto());
        }
    }
    empresa.Produto = Produto;
})(empresa || (empresa = {}));
