"use strict";
var escola;
(function (escola) {
    // Definindo os elementos do formulário
    const btnCalcularMedia = document.getElementById("btnCalcularMedia");
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
    // Evento para cadastrar o aluno
    btnCadastrar.addEventListener("click", () => {
        aluno = new escola.Aluno(campoNome.value, parseInt(campoAno.value), campoCpf.value, campoEndereco.value, campoTelefone.value, parseInt(campoMatricula.value), campoCurso.value, campoEscola.value, parseFloat(campoNota1.value), parseFloat(campoNota2.value), parseFloat(campoNota3.value), parseFloat(campoNota4.value));
        // Exibindo as informações do aluno no DOM
        document.getElementById("nomeAluno").textContent = aluno.nome;
        document.getElementById("idadeAluno").textContent = aluno.calcularIdade(2025).toString(); // A idade é calculada aqui
        document.getElementById("matriculaAluno").textContent = aluno.matricula.toString();
        document.getElementById("cursoAluno").textContent = aluno.curso;
        document.getElementById("escolaAluno").textContent = aluno.escola;
        // Inicializa a exibição de média
        document.getElementById("mediaAluno").textContent = "N/A";
    });
    // Evento para calcular a média das notas
    btnCalcularMedia.addEventListener("click", () => {
        if (aluno) {
            const media = aluno.calcularMedia();
            document.getElementById("mediaAluno").textContent = media.toString();
        }
    });
})(escola || (escola = {}));
