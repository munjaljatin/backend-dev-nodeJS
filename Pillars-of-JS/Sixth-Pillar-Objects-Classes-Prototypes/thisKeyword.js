const Iphone = {
  name: "Iphone 15 pro max",
  price: 150000,
  description: "The new apple iphone 15 pro max",
  rating: 4.5,
  color: "platinum green",

  display() {
    console.log("Iphone", this);
  },
};

const macbook = {
  name: "Macbook M2",
  price: 175000,
  description: "The new apple Macbook M2",
  rating: 4.7,
  color: "black",

  display() {
    console.log("Macbook log", this);
  },
};

// console.log(Iphone);
// console.log(macbook);

Iphone.display();
macbook.display();

// console.log("Jatin", "Munjal");
