var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle(make, model, year, doors, storage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.doors = doors;
        this.storage = storage;
    }
    Vehicle.prototype.drive = function () {
        console.log("Don't drive angry!");
    };
    Vehicle.prototype.maximumOverDrive = function () {
        console.log("DBZ:A is totally awesome and over powered(" + this.hiddenDrivePower() + ")!");
    };
    Vehicle.prototype.hiddenDrivePower = function () {
        return 9001;
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, doors, storage, transmission) {
        var _this = _super.call(this, make, model, year, doors, storage) || this;
        _this.transmission = transmission;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("May the force be with you!");
    };
    return Car;
}(Vehicle));
var Sedan = (function (_super) {
    __extends(Sedan, _super);
    function Sedan(make, model, year) {
        return _super.call(this, make, model, year, 4, "trunk", "automatic") || this;
    }
    Sedan.prototype.drive = function () {
        console.log("Oh Happy Days are hear again!");
        _super.prototype.maximumOverDrive.call(this);
    };
    return Sedan;
}(Car));
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, towingCapacity) {
        var _this = _super.call(this, make, model, year, 2, "none") || this;
        _this.towingCapacity = towingCapacity;
        return _this;
    }
    Truck.prototype.drive = function () {
        console.log("Keep on truckin'!");
        _super.prototype.drive.call(this);
    };
    return Truck;
}(Vehicle));
var ExtendedCabTruck = (function (_super) {
    __extends(ExtendedCabTruck, _super);
    function ExtendedCabTruck(make, model, year, towingCapacity) {
        var _this = _super.call(this, make, model, year, towingCapacity) || this;
        _this.doors = 4;
        return _this;
    }
    ExtendedCabTruck.prototype.drive = function () {
        console.log("Built Ford Tough!");
        _super.prototype.drive.call(this);
    };
    return ExtendedCabTruck;
}(Truck));
var car = new Sedan('Subaru', 'XV', 2014);
var truck = new ExtendedCabTruck('MAC', 'Extended Hauler', 2014, 50000);
car.drive();
truck.drive();
console.log(car);
console.log(truck);
//# sourceMappingURL=inheritance.js.map