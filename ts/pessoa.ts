namespace escola {

    export class Pessoa {
        private _nome: string;
        private _anoNasc: number;
        private _cpf: string;
        private _endereco: string;
        private _telefone: string;
       

        constructor(
            nome: string, anoNasc: number, cpf: string, endereco: string, telefone: string,
            matricula: number, curso: string, escola: string,
      
        ) {
            this._nome = nome;
            this._anoNasc = anoNasc;
            this._cpf = cpf;
            this._endereco = endereco;
            this._telefone = telefone;

        }

        // Método para calcular a idade
        public calcularIdade(anoAtual: number): number {
            return anoAtual - this._anoNasc;
        }



        // Getters para acessar as propriedades
        get nome() { return this._nome; }
        get anoNasc() { return this._anoNasc; }
        get cpf() { return this._cpf; }
        get endereco() { return this._endereco; }
        get telefone() { return this._telefone; }

    }

    // Função para manipular o DOM
    const btnCadastrar = document.getElementById("btnCadastrar") as HTMLButtonElement;
    const btnCalcularMedia = document.getElementById("btnCalcularMedia") as HTMLButtonElement;

    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;
    const campoCpf = document.getElementById("campoCpf") as HTMLInputElement;
    const campoEndereco = document.getElementById("campoEndereco") as HTMLInputElement;
    const campoTelefone = document.getElementById("campoTelefone") as HTMLInputElement;
}
