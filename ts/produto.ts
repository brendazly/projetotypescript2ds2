namespace empresa {
    
    export class Produto {
        private _nome: string;
        private _preco: number;
        private _imp: number;

        get nome() {
            return this._nome;
        }

        set nome(nome: string) {
            this._nome = nome;
        }

        get preco() {
            return this._preco;
        }

        set preco(preco: number) {
            this._preco = preco;
        }

        get imp() {
            return this._imp;
        }

        set imp(imp: number) {
            this._imp = imp;
        }

        public calcularImposto(): number {
            return (this.preco * this.imp) / 100; 
        }

        public resultadoFinal(): number {
            return (this.preco + this.calcularImposto());

        }
    }
}
