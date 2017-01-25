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
// shoppingCart.addProduct(xbox);
// console.log(`Total: ${shoppingCart.getTotalPrice()}`);
// shoppingCart.addProduct(xboxController);
// console.log(`Total: ${shoppingCart.getTotalPrice()}`);
// shoppingCart.addProduct(game);
// console.log(`Total: ${shoppingCart.getTotalPrice()}`);
// console.log(`
// Total: ${shoppingCart.getTotalPrice()}
// Tax: ${shoppingCart.getTax()}
// Grand Total: ${shoppingCart.getTotalPrice() + shoppingCart.getTax()}
// `);
var Timer = (function () {
    function Timer() {
        this.totalSeconds = 0;
    }
    Timer.prototype.start = function () {
        var self = this;
        window.setInterval(function () {
            self.totalSeconds++;
            console.log(self.totalSeconds);
        }, 1000);
    };
    return Timer;
}());
var timer = new Timer();
//timer.start();
function createFunction() {
    var a = 10;
    return function () {
        a++;
        console.log(a);
    };
}
var doSomething = createFunction();
doSomething();
function generateTemplateEmail(customerName) {
    return function (productName) {
        console.log("Dear " + customerName + ", thank you for your positive review of our " + productName + " product.");
    };
}
var bobTemplateEmail = generateTemplateEmail('Bob');
bobTemplateEmail('Coffee Maker');
bobTemplateEmail('Toaster');
function increment(incrementValue) {
    return function (baseValue) {
        console.log(baseValue + incrementValue);
    };
}
// create function that increments by 10
var incrementByTen = increment(10);
incrementByTen(34); // prints 44
// create function that increments by 50
var incrementByFifty = increment(50);
incrementByFifty(34); // prints 84
function divideNumbers(a, b) {
    try {
        if (b == 0) {
            throw new Error("b cannot be zero!");
        }
        else {
            console.log(a / b);
        }
    }
    catch (ex) {
        console.log(ex.name + ": " + ex.message);
    }
}
divideNumbers(1, 2);
divideNumbers(1, 0);
//# sourceMappingURL=app.js.map