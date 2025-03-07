var empresa;
(function (empresa) {
    var cad = document.getElementById("cad");
    var campoNome = document.getElementById("campoNome");
    var campoPreco = document.getElementById("campoPreco");
    var campoImp = document.getElementById("campoImp");
    var Produto = /** @class */ (function () {
        function Produto() {
            this.nome = "";
            this.preco = 0;
            this.imp = 0;
        }
        Produto.prototype.calcularImposto = function () {
            return (this.preco * this.imp) / 100;
        };
        return Produto;
    }());
    cad.addEventListener("click", function () {
        var p = new Produto();
        p.nome = campoNome.value;
        p.preco = parseFloat(campoPreco.value);
        p.imp = parseFloat(campoImp.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("imp").textContent = p.calcularImposto().toString();
    });
})(empresa || (empresa = {}));
