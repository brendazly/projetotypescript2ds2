var empresa;
(function (empresa) {
    var Produto = /** @class */ (function () {
        function Produto() {
        }
        Object.defineProperty(Produto.prototype, "nome", {
            get: function () {
                return this._nome;
            },
            set: function (nome) {
                this._nome = nome;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Produto.prototype, "preco", {
            get: function () {
                return this._preco;
            },
            set: function (preco) {
                this._preco = preco;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Produto.prototype, "imp", {
            get: function () {
                return this._imp;
            },
            set: function (imp) {
                this._imp = imp;
            },
            enumerable: false,
            configurable: true
        });
        Produto.prototype.calcularImposto = function () {
            return (this.preco * this.imp) / 100;
        };
        return Produto;
    }());
    empresa.Produto = Produto;
})(empresa || (empresa = {}));
