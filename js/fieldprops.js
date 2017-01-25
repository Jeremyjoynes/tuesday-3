var StoreFront;
(function (StoreFront) {
    var Product = (function () {
        function Product(_name, _price) {
            this._name = _name;
            this._price = _price;
        }
        Object.defineProperty(Product.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "price", {
            get: function () {
                return this._price;
            },
            set: function (value) {
                if (value > 0) {
                    this._price = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        return Product;
    }());
    var item = new Product('Soda', 1.25);
    //console.log(item);
})(StoreFront || (StoreFront = {}));
//# sourceMappingURL=fieldprops.js.map