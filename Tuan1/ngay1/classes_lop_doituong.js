class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} âm thanh là`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} Gâu Gâu!`);
  }
}

const dog = new Dog("Mực");
dog.speak(); // In ra: Mực Gâu Gâu!
