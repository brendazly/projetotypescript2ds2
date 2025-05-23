"use strict";
var escola;
(function (escola_1) {
    const btnCalcular = document.getElementById("btnCalcularMedia");
    const btnCadastrar = document.getElementById("btnCadastrar");
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    const campoCpf = document.getElementById("campoCpf");
    const campoEndereco = document.getElementById("campoEndereco");
    const campoTelefone = document.getElementById("campoTelefone");
    const campoMatricula = document.getElementById("campoMatricula");
    const campoCurso = document.getElementById("campoCurso");
    const campoEscola = document.getElementById("campoEscola");
    const campoNota1 = document.getElementById("campoNota1");
    const campoNota2 = document.getElementById("campoNota2");
    const campoNota3 = document.getElementById("campoNota3");
    const campoNota4 = document.getElementById("campoNota4");
    let aluno;
    class Aluno {
        constructor(nome, anoNasc, cpf, endereco, telefone, numMatricula, curso, escola) {
            this.notas = [];
            this.nome = nome;
            this.anoNasc = anoNasc;
            this.cpf = cpf;
            this.endereco = endereco;
            this.telefone = telefone;
            this.numMatricula = numMatricula;
            this.curso = curso;
            this.escola = escola;
        }
        calcularMedia() {
            return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
        }
        adicionarNota(nota) {
            this.notas.push(nota);
        }
    }
    btnCadastrar.addEventListener("click", () => {
        aluno = new Aluno(campoNome.value, parseInt(campoAno.value), campoCpf.value, campoEndereco.value, campoTelefone.value, parseInt(campoMatricula.value), campoCurso.value, campoEscola.value);
        // Exibindo as informações do aluno no DOM
        document.getElementById("nomeAluno").textContent = aluno.nome;
        document.getElementById("idadeAluno").textContent = aluno.anoNasc.toString();
        document.getElementById("matriculaAluno").textContent = aluno.numMatricula.toString();
        document.getElementById("cursoAluno").textContent = aluno.curso;
        document.getElementById("escolaAluno").textContent = aluno.escola;
    });
    // Evento para calcular a média das notas
    btnCalcular.addEventListener("click", () => {
        if (aluno) {
            const media = aluno.calcularMedia();
            document.getElementById("media").textContent = `A média das notas é: ${media.toFixed(2)}`;
        }
        else {
            alert("Por favor, cadastre o aluno antes de calcular a média.");
        }
    });
})(escola || (escola = {}));
