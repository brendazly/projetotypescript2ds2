"use strict";
var empresa;
(function (empresa) {
    const cad = document.getElementById("cad");
    const campoNome = document.getElementById("campoNome");
    const campoPreco = document.getElementById("campoPreco");
    const campoImp = document.getElementById("campoImp");
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
        let p = new empresa.Produto();
        p.nome = campoNome.value;
        p.preco = parseFloat(campoPreco.value);
        p.imp = parseFloat(campoImp.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("imp").textContent = p.calcularImposto().toString();
        document.getElementById("precinho").textContent = p.resultadoFinal().toString();
    });
})(empresa || (empresa = {}));
