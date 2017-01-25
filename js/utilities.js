define(["require", "exports"], function (require, exports) {
    "use strict";
    // this function is exported
    function doSomething() {
        console.log('do something');
    }
    exports.doSomething = doSomething;
    ;
    // this class is exported
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.makeSound = function () {
            console.log('grrrrrr');
        };
        return Animal;
    }());
    exports.Animal = Animal;
    // this class is not exported
    var Secret = (function () {
        function Secret() {
        }
        Secret.prototype.saySecret = function () {
            console.log('secret');
        };
        return Secret;
    }());
});
//# sourceMappingURL=utilities.js.map