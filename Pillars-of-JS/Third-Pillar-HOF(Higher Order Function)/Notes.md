# Arrays in JavaScript

- arrays are also custom objects in Javascript
- index of the element is key and the element itself is the value
- ["abc", "def", "ghi", "jkl"] => {0: "abc", 1: "def", 2: "ghi", 3: "jkl"}

**_ Funtions associated with array object _**

## map function

map is a higher order function that is avaiable with arrays.

- map takes a function as an argument -> f
- it returns an array in which every value is actually poplulated by calling the function f with original array element as argument
-
- Every element of the original array is passed one by one in the argument function f
- and then whatever is the output for each individual element, we populate that output in an array
-
- map internally iterates/loops over every element of the given origianl array
- pass that element in the argument function f and then store the returned value inside an array
- - if the function that we are passing inside the map(HOF) function takes two arguments

* then the first argument will be accessing the actual value
* and the second argument will be accessing the index of the value

## sort function

sort is a HOF(Higher order fcuntion) also available with arrays.
the default implementation of digits.sort() fucntion is going to sort the array in lexicographical order or dictionary order

- 0 -> A
- 1 -> B
- 2 -> C
- 3 -> D
- 4 -> E
- 5 -> F
- 6 -> G
- 7 -> H
- 8 -> I
- 9 -> J
- .....
- **_[B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D] and the sort() function sorts the array according to the dictionary order_**
- [B, BA, BAA, BAAA, BB, BC, BD, BE, C, D, J];

## filter function

- filter function
- filter is also a HOF(Higher Order Function)
- filter function also loops over the array elements
- there is one special thing about filter function, i.e. the argument function f which we have to pass inside
- filter should always return a boolean value, if it is not the boolean value then the output will be converted to a boolean value
-
- filter loops over the array elements, passes that element in the argument function
- and then if the output of this function is true, then
- it stores the original element in a new array otherwise
- doesn't add this element to the array

## reduce function

- reduce is also a HOF(Higher Order Function) available for arrays
- reduce function also takes a function => f as an argument,
- what reduce function does is, it one by one goes to the every element of the array,
- say the current element is arr[i]
- the reduce function will pass this element to the function f, and accumulate the result of further function calls with this particular result

  ### What map function does?

  - let arr = [1,2,3,4,5,6];
  - then what reduce function will do:
  - previousValue -> 1, first element -> 2 = 3
  - previousValue -> 3, second element -> 3 = 6
  - previousValue -> 6, third element -> 4 = 10
  - previousValue -> 10, fourth element -> 5 = 15
  - previousValue -> 15, fifth element -> 6 = 21
