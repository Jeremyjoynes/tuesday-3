namespace StoreFront {
    class Product {
        get name() {
            return this._name;
        }

        get price() {
            return this._price;
        }

        set price(value: number) {
            if(value > 0 ) {
                this._price = value;
            }
        }

        constructor(
            private _name: string, 
            private _price: number
        ) { }
    }

    let item = new Product('Soda', 1.25);

    //console.log(item);
}