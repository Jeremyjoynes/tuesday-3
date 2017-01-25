// this function is exported
export function doSomething() {
  console.log('do something');
};

// this class is exported
export class Animal {
  makeSound() {
    console.log('grrrrrr');
  }
}

// this class is not exported
class Secret {
  saySecret() {
    console.log('secret');
  }
}