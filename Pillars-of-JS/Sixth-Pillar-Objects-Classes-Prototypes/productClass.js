// Author: Jatin Munjal
// Product Class

class Product {
  // Data Members
  // no need of let, const and var
  #name;
  price;
  discount;
  description;

  constructor(n, p, d, ds) {
    this.#name = n;
    this.price = p;
    this.discount = d;
    this.description = ds;

    // return "anyPrimitiveValue" if we return any primitive value then constructor function avoid this statement
    // if we don't return anything then it is eqaul to saying return this

    // return {
    //   description: "your new object is ready",
    // };
  }

  //   behaviours
  //   no need of function keyword for creating member functions
  setName(name) {
    if (typeof name != "string") {
      console.log("Invalid name");
      return;
    } else {
      this.#name = name;
    }
  }
  //   buy() {}
  display() {
    console.log(this.#name, this.price, this.description);
  }
}

// syntax for creating an object in javascript
const product1 = new Product();

const product2 = new Product("Arctic Fox Bag", 800, 50, "a 30L Backpack");

console.log(product2);
product2.setName("Wildcraft Backpack");
product2.display();
