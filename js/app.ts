
class Product {
    constructor(
        public price: number,
        public name: string,
        public isBackordered: boolean
    ) { }
}

class Cart {
    private products: Product[] = [];
    private totalPrice: number = 0;

    constructor(
    ) { }

    public addProduct = (item: Product): void => {
        this.products.push(item);

        this.updateTotal(item.price);
    }

    private updateTotal = (price: number): void => {
        this.totalPrice += price;
    }

    public getProductCount = (): number => {
        return this.products.length;
    }

    public getTotalPrice = (): number => {
        return this.totalPrice;
    }

    public getTax = (): number => {
        // Calculate Tax
        return this.totalPrice * 0.095;
    }
}

let shoppingCart = new Cart();
let xbox = new Product(349.99, 'xbox one halo edition', false);
let ps4 = new Product(299.99, 'PS4 Slim Edition', false);
let xboxController = new Product(74.99, 'xbox one wireless controller', false);
let game = new Product(89.99, 'Halo 5 Master Chief Edtion', true);

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

class Timer {
    public totalSeconds = 0;

    public start() {
        let self = this;

        window.setInterval(function () {
            self.totalSeconds++;
            console.log(self.totalSeconds);
        }, 1000);
    }
}

let timer = new Timer();

//timer.start();

function createFunction() {
    let a = 10;
    return function () {
        a++;
        console.log(a);
    }
}

let doSomething = createFunction();
doSomething();


function generateTemplateEmail(customerName) {
    return function (productName) {
        console.log(`Dear ${customerName}, thank you for your positive review of our ${productName} product.`);
    }
}

let bobTemplateEmail = generateTemplateEmail('Bob');
bobTemplateEmail('Coffee Maker');
bobTemplateEmail('Toaster');


function increment(incrementValue: number) {
    return function (baseValue: number) {
        console.log(baseValue + incrementValue);
    }
}



// create function that increments by 10
let incrementByTen = increment(10);
incrementByTen(34); // prints 44

// create function that increments by 50
let incrementByFifty = increment(50);
incrementByFifty(34); // prints 84


function divideNumbers(a, b) {
    try {
        if (b == 0) {
            throw new Error("b cannot be zero!");
        } else {

            console.log(a / b);
        }
    } catch(ex) {
        console.log(`${ex.name}: ${ex.message}`);
    }
}

divideNumbers(1, 2);
divideNumbers(1, 0);

