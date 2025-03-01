namespace empresa{
    
    export class Produto{
        private _nome:string;
        private _preco:number;
        private _imp:number;

        get nome(){
            return this._nome;
        }

        set nome(nome:string){
            this._nome=nome;
        }

        get preco(){
            return this._preco;
        }

        set (preco:number){
            this._preco = preco;
        }

        public calcularImposto(imp:number){
            return this.preco + this._imp;
        }
    }
}