"use strict";
var escola;
(function (escola_1) {
    class Aluno {
        constructor(matricula, curso, escola, nota1, nota2, nota3, nota4) {
            this._matricula = matricula;
            this._curso = curso;
            this._escola = escola;
            this._nota1 = nota1;
            this._nota2 = nota2;
            this._nota3 = nota3;
            this._nota4 = nota4;
        }
        calcularMedia() {
            return (this._nota1 + this._nota2 + this._nota3 + this._nota4) / 4;
        }
        get matricula() { return this._matricula; }
        get curso() { return this._curso; }
        get escola() { return this._escola; }
        get nota1() { return this._nota1; }
        get nota2() { return this._nota2; }
        get nota3() { return this._nota3; }
        get nota4() { return this._nota4; }
    }
    escola_1.Aluno = Aluno;
    const btnCadastrar = document.getElementById("btnCadastrar");
    const btnCalcularMedia = document.getElementById("btnCalcularMedia");
    const campoMatricula = document.getElementById("campoMatricula");
    const campoCurso = document.getElementById("campoCurso");
    const campoEscola = document.getElementById("campoEscola");
    const campoNota1 = document.getElementById("campoNota1");
    const campoNota2 = document.getElementById("campoNota2");
    const campoNota3 = document.getElementById("campoNota3");
    const campoNota4 = document.getElementById("campoNota4");
})(escola || (escola = {}));
