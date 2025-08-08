const obj = {
  firstName: "Jatin",
  lastName: "Munjal",
  address: {
    houseNumber: 475,
    wardNumber: 5,
    area: "Prem Nagar",
    city: "Tohana",
  },
  postalCode: 125120,
};

console.log(obj);
console.log(obj.address);

// De-Structuring the nested obj Object

const {
  firstName,
  address: { houseNumber, wardNumber },
} = obj;

console.log(firstName);
console.log(houseNumber);
console.log(wardNumber);
