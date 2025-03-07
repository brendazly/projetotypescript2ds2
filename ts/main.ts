namespace empresa {

    const cad = document.getElementById("cad") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoPreco = document.getElementById("campoPreco") as HTMLInputElement;
    const campoImp = document.getElementById("campoImp") as HTMLInputElement;

    class Produto {
        nome: string;
        preco: number;
        imp: number;

        constructor() {
            this.nome = "";
            this.preco = 0;
            this.imp = 0;
        }

        calcularImposto(): number {
            return (this.preco * this.imp) / 100;
        }
    }

    cad.addEventListener("click", () => {
        let p = new Produto();
        p.nome = campoNome.value;
        p.preco = parseFloat(campoPreco.value); 
        p.imp = parseFloat(campoImp.value); 

        document.getElementById("nome")!.textContent = p.nome;
        document.getElementById("preco")!.textContent = p.preco.toString();
        document.getElementById("imp")!.textContent = p.calcularImposto().toString();
    });
}
