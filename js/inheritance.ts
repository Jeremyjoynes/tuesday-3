interface IVehicle {
    make: string;
    model: string;
    year: number;

    drive(): void;
}

interface IPassengers {
    doors: number;
    storage: "hatchback" | "trunk" | "none"
}

// Multiple Interface inheritence solution
interface IPassengerVehicle extends IVehicle, IPassengers { }

abstract class Vehicle implements IPassengerVehicle {
    constructor(
        public make: string,
        public model: string,
        public year: number,
        public doors: number,
        public storage: "hatchback" | "trunk" | "none"
    ) { }

    public drive():void {
        console.log("Don't drive angry!");
    }

    protected maximumOverDrive(): void {
        console.log(`DBZ:A is totally awesome and over powered(${this.hiddenDrivePower()})!`)
    }

    private hiddenDrivePower(): number {
        return 9001;
    }
}

abstract class Car extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        doors: number,
        storage: "hatchback" | "trunk" | "none",
        public transmission: "automatic" | "manual"
    ) { 
        super(make, model, year,doors, storage);
    }

    public drive():void {
        console.log("May the force be with you!");
    }
}

class Sedan extends Car {
    constructor(
        make: string,
        model: string,
        year: number
    ) {
        super(make, model, year, 4, "trunk", "automatic");
    }

    public drive():void {
        console.log("Oh Happy Days are hear again!");
        super.maximumOverDrive();
    }
}

class Truck extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        public towingCapacity: number
    ) { 
        super(make, model, year, 2, "none");
    }

    public drive():void {
        console.log("Keep on truckin'!");
        super.drive();
    }
}

class ExtendedCabTruck extends Truck {
    constructor(
        make: string,
        model: string,
        year: number,
        towingCapacity: number
    ) { 
        super(make, model, year, towingCapacity);

        this.doors = 4;
    }

    public drive():void {
        console.log("Built Ford Tough!");
        super.drive();
    }
}

let car = new Sedan('Subaru', 'XV', 2014);
let truck = new ExtendedCabTruck('MAC', 'Extended Hauler', 2014, 50000);

car.drive();
truck.drive();

console.log(car);
console.log(truck);
