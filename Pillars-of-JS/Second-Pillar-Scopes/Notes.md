# Function Expression in Javascript

### Function Declaration

`When the first valid expression of the line where we are defining the function is the keyword "function" then it is called the function declaration`

### Function Expression

`When the first valid expression of the line where we are defining the function contains and valid Javascript keyword other than the keyword "function" then it is called a function expression`

Example Code:

```javascript
let a = function gun() {
  // function logic goes here
};

(function () {
  // function logic goes here
});

const arrow = () => {
  // function logic goes here
};
```

### IIFE: Immediate Invoked Function Expression

Example code:

```javascript
(function gun(message) {
  console.log("You are is IIFE");
  let arr = [10, 20, 30, 40, 50];
  console.log(message);
})("Bye");
```
