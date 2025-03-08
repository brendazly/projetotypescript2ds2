namespace empresa {

    const cad = document.getElementById("cad") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoPreco = document.getElementById("campoPreco") as HTMLInputElement;
    const campoImp = document.getElementById("campoImp") as HTMLInputElement;

    /*class Produto {
        nome: string;
        preco: number;
        imp: number;
        impostoCalculado: number;

        constructor() {
            this.nome = "";
            this.preco = 0;
            this.imp = 0;
            this.impostoCalculado = 0;
        }

        calcularImposto(): number {
            this.impostoCalculado = (this.preco * this.imp) / 100;
            return this.impostoCalculado;
        }

        resultadoFinal(): number {
            return this.preco + this.impostoCalculado;
        }*
        
    }*/

    

    cad.addEventListener("click", () => {
        let p = new Produto();
        p.nome = campoNome.value;
        p.preco = parseFloat(campoPreco.value); 
        p.imp = parseFloat(campoImp.value); 

        document.getElementById("nome")!.textContent = p.nome;
        document.getElementById("preco")!.textContent = p.preco.toString();
        document.getElementById("imp")!.textContent = p.calcularImposto().toString();
        document.getElementById("precinho")!.textContent = p.resultadoFinal().toString();
    });
}
