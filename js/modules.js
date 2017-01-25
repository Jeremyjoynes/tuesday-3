define(["require", "exports", "./utilities"], function (require, exports, utilities) {
    "use strict";
    // use external function
    utilities.doSomething();
    // use external class
    var beast = new utilities.Animal();
    beast.makeSound();
});
//# sourceMappingURL=modules.js.map