
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

shoppingCart.addProduct(xbox);
console.log(`Total: ${shoppingCart.getTotalPrice()}`);

shoppingCart.addProduct(xboxController);
console.log(`Total: ${shoppingCart.getTotalPrice()}`);

shoppingCart.addProduct(game);
console.log(`Total: ${shoppingCart.getTotalPrice()}`);

console.log(`
Total: ${shoppingCart.getTotalPrice()}
Tax: ${shoppingCart.getTax()}

Grand Total: ${shoppingCart.getTotalPrice() + shoppingCart.getTax()}
`);


