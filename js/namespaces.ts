namespace Utilities {

    export interface ITwoNumbers {
        num1: number;
        num2: number;
    }

    export class Addition implements ITwoNumbers {
        constructor(
            public num1: number,
            public num2: number
        ) { }

        public add(): number {
            return this.num1 + this.num2;
        }
    }

    export class Subtraction implements ITwoNumbers {
        constructor(
            public num1: number,
            public num2: number
        ) { }

        public subtract(): number {
            return this.num1 - this.num2;
        }
    }

}

namespace AwesomeMath {
    export class Multiply implements Utilities.ITwoNumbers {
        constructor(
            public num1: number,
            public num2: number
        ) { }

        public multiply(): number {
            return this.num1 * this.num2;
        }
    }

    export class SuperAddtion extends Utilities.Subtraction {

        public SuperAddtion(): number {
            return this.subtract();
        }
    }
}