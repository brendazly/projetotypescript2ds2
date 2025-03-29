"use strict";
var escola;
(function (escola_1) {
    class Pessoa {
        constructor(nome, anoNasc, cpf, endereco, telefone, matricula, curso, escola) {
            this._nome = nome;
            this._anoNasc = anoNasc;
            this._cpf = cpf;
            this._endereco = endereco;
            this._telefone = telefone;
        }
        // Método para calcular a idade
        calcularIdade(anoAtual) {
            return anoAtual - this._anoNasc;
        }
        // Getters para acessar as propriedades
        get nome() { return this._nome; }
        get anoNasc() { return this._anoNasc; }
        get cpf() { return this._cpf; }
        get endereco() { return this._endereco; }
        get telefone() { return this._telefone; }
    }
    escola_1.Pessoa = Pessoa;
    // Função para manipular o DOM
    const btnCadastrar = document.getElementById("btnCadastrar");
    const btnCalcularMedia = document.getElementById("btnCalcularMedia");
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    const campoCpf = document.getElementById("campoCpf");
    const campoEndereco = document.getElementById("campoEndereco");
    const campoTelefone = document.getElementById("campoTelefone");
})(escola || (escola = {}));
