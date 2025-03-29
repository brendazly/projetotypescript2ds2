namespace escola {

    const btnCalcular = document.getElementById("btnCalcularMedia") as HTMLButtonElement;
    const btnCadastrar = document.getElementById("btnCadastrar") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;
    const campoCpf = document.getElementById("campoCpf") as HTMLInputElement;
    const campoEndereco = document.getElementById("campoEndereco") as HTMLInputElement;
    const campoTelefone = document.getElementById("campoTelefone") as HTMLInputElement;
    const campoMatricula = document.getElementById("campoMatricula") as HTMLInputElement;
    const campoCurso = document.getElementById("campoCurso") as HTMLInputElement;
    const campoEscola = document.getElementById("campoEscola") as HTMLInputElement;
    const campoNota1 = document.getElementById("campoNota1") as HTMLInputElement;
    const campoNota2 = document.getElementById("campoNota2") as HTMLInputElement;
    const campoNota3 = document.getElementById("campoNota3") as HTMLInputElement;
    const campoNota4 = document.getElementById("campoNota4") as HTMLInputElement;

    let aluno: Aluno;

    class Aluno {
        nome: string;
        anoNasc: number;
        cpf: string;
        endereco: string;
        telefone: string;
        numMatricula: number;
        curso: string;
        escola: string;
        notas: number[] = [];

        constructor(nome: string, anoNasc: number, cpf: string, endereco: string, telefone: string, numMatricula: number, curso: string, escola: string) {
            this.nome = nome;
            this.anoNasc = anoNasc;
            this.cpf = cpf;
            this.endereco = endereco;
            this.telefone = telefone;
            this.numMatricula = numMatricula;
            this.curso = curso;
            this.escola = escola;
        }

        calcularMedia(): number {
            return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
        }

        adicionarNota(nota: number) {
            this.notas.push(nota);
        }
    }

    btnCadastrar.addEventListener("click", () => {
        aluno = new Aluno(
            campoNome.value,
            parseInt(campoAno.value),
            campoCpf.value,
            campoEndereco.value,
            campoTelefone.value,
            parseInt(campoMatricula.value),
            campoCurso.value,
            campoEscola.value
        );

        // Exibindo as informações do aluno no DOM
        document.getElementById("nomeAluno")!.textContent = aluno.nome;
        document.getElementById("idadeAluno")!.textContent = aluno.anoNasc.toString();
        document.getElementById("matriculaAluno")!.textContent = aluno.numMatricula.toString();
        document.getElementById("cursoAluno")!.textContent = aluno.curso;
        document.getElementById("escolaAluno")!.textContent = aluno.escola;
    });

    // Evento para calcular a média das notas
    
btnCalcular.addEventListener("click", () => {
    if (aluno) {
        const media = aluno.calcularMedia();
        document.getElementById("media")!.textContent = `A média das notas é: ${media.toFixed(2)}`;
    } else {
        alert("Por favor, cadastre o aluno antes de calcular a média.");
    }
    });
}