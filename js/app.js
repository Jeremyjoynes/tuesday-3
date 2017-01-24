var Product = (function () {
    function Product(price, name, isBackordered) {
        this.price = price;
        this.name = name;
        this.isBackordered = isBackordered;
    }
    return Product;
}());
var Cart = (function () {
    function Cart() {
        var _this = this;
        this.products = [];
        this.totalPrice = 0;
        this.addProduct = function (item) {
            _this.products.push(item);
            _this.updateTotal(item.price);
        };
        this.updateTotal = function (price) {
            _this.totalPrice += price;
        };
        this.getProductCount = function () {
            return _this.products.length;
        };
        this.getTotalPrice = function () {
            return _this.totalPrice;
        };
        this.getTax = function () {
            // Calculate Tax
            return _this.totalPrice * 0.095;
        };
    }
    return Cart;
}());
var shoppingCart = new Cart();
var xbox = new Product(349.99, 'xbox one halo edition', false);
var ps4 = new Product(299.99, 'PS4 Slim Edition', false);
var xboxController = new Product(74.99, 'xbox one wireless controller', false);
var game = new Product(89.99, 'Halo 5 Master Chief Edtion', true);
shoppingCart.addProduct(xbox);
console.log("Total: " + shoppingCart.getTotalPrice());
shoppingCart.addProduct(xboxController);
console.log("Total: " + shoppingCart.getTotalPrice());
shoppingCart.addProduct(game);
console.log("Total: " + shoppingCart.getTotalPrice());
console.log("\nTotal: " + shoppingCart.getTotalPrice() + "\nTax: " + shoppingCart.getTax() + "\n\nGrand Total: " + (shoppingCart.getTotalPrice() + shoppingCart.getTax()) + "\n");
//# sourceMappingURL=app.js.map