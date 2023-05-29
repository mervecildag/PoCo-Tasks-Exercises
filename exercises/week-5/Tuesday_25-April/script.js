let array = ["Banana", "Apples", "Oranges", "Blueberries"];

// //Access and output Oranges.
console.log(array[2]);

// //Remove the Banana from the array.
console.log(array.shift());
console.log(array);

// //Sort the array in order.
console.log(array.sort());

// //Put "Kiwi" at the end of the array.
array.push("Kiwi")
console.log(array);

// //Remove "Apples" from the array.
//let deletedItems = array.splice(1,1);
console.log(array.splice(0,1));
// console.log(deletedItems);


//Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a']
console.log(array.reverse());

