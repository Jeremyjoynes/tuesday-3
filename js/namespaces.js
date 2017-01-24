var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Utilities;
(function (Utilities) {
    var Addition = (function () {
        function Addition(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }
        Addition.prototype.add = function () {
            return this.num1 + this.num2;
        };
        return Addition;
    }());
    Utilities.Addition = Addition;
    var Subtraction = (function () {
        function Subtraction(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }
        Subtraction.prototype.subtract = function () {
            return this.num1 - this.num2;
        };
        return Subtraction;
    }());
    Utilities.Subtraction = Subtraction;
})(Utilities || (Utilities = {}));
var AwesomeMath;
(function (AwesomeMath) {
    var Multiply = (function () {
        function Multiply(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }
        Multiply.prototype.multiply = function () {
            return this.num1 * this.num2;
        };
        return Multiply;
    }());
    AwesomeMath.Multiply = Multiply;
    var SuperAddtion = (function (_super) {
        __extends(SuperAddtion, _super);
        function SuperAddtion() {
            return _super.apply(this, arguments) || this;
        }
        SuperAddtion.prototype.SuperAddtion = function () {
            return this.subtract();
        };
        return SuperAddtion;
    }(Utilities.Subtraction));
    AwesomeMath.SuperAddtion = SuperAddtion;
})(AwesomeMath || (AwesomeMath = {}));
//# sourceMappingURL=namespaces.js.map