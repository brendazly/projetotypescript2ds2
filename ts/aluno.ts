namespace escola {
    export class Aluno {
       
        private _matricula: number;
        private _curso: string;
        private _escola: string;
        private _nota1: number;
        private _nota2: number;
        private _nota3: number;
        private _nota4: number;

        constructor(
        
            matricula: number, curso: string, escola: string,
            nota1: number, nota2: number, nota3: number, nota4: number
        ) {

            this._matricula = matricula;
            this._curso = curso;
            this._escola = escola;
            this._nota1 = nota1;
            this._nota2 = nota2;
            this._nota3 = nota3;
            this._nota4 = nota4;
        }


        public calcularMedia(): number {
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


    const btnCadastrar = document.getElementById("btnCadastrar") as HTMLButtonElement;
    const btnCalcularMedia = document.getElementById("btnCalcularMedia") as HTMLButtonElement;
    const campoMatricula = document.getElementById("campoMatricula") as HTMLInputElement;
    const campoCurso = document.getElementById("campoCurso") as HTMLInputElement;
    const campoEscola = document.getElementById("campoEscola") as HTMLInputElement;
    const campoNota1 = document.getElementById("campoNota1") as HTMLInputElement;
    const campoNota2 = document.getElementById("campoNota2") as HTMLInputElement;
    const campoNota3 = document.getElementById("campoNota3") as HTMLInputElement;
    const campoNota4 = document.getElementById("campoNota4") as HTMLInputElement;
}