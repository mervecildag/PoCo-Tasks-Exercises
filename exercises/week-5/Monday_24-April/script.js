// //find ul in DOM to add list item to it
// //check for click event on button
// //call function to add new list item

// const list = document.querySelector("ul");
// const btn = document.querySelector("button"); // if you have only one button, you should give id
// const input = document.querySelector("#your_favorite");
// const body = document.body;

// //btn.onclick = addFavorite;
// btn.addEventListener("click", addFavorite);
// // btn.onclick = function (input) {
// //     if (input.value.length > 0) {
// //         //create input value to it
// //         let li = document.createElement("li");
// //         //add input value to it
// //         li.textContent = input.value;
// //         //add list item to our list in the DOM 
// //         list.appendChild(li);
// //     }
// // }

// function addFavorite() {
//     if(input.value.length > 0){
//         if (isDuplicate()) {
//         // do not add, give message instead
//         console.log("Duplicate was found");
//         //create element p
//         let message = document.createElement("p");
//         //find the place where to add it
//         body.appendChild(message);
//         //use some method like innerHTML, to add the message
//         message.textContent = "Duplicate will not be added to the list."
//         } else {
//         //create element li
//         let li = document.createElement("li");
//         //add input value to it
//         li.textContent = input.value;
//         //add list item to our list in the DOM 
//         list.appendChild(li);
//         }
// }else  {
//         console.log("my value is empty. Why ??");
//     }
// }

// function isDuplicate() {
//     let result = false;
//     //loop through list items and check if value is equal to our input value
//     //find the list items, use forEach to find value of each item
//     list.querySelectorAll("li").forEach(function(item){
//        if(item.textContent.toLowerCase().trim() === input.value.toLowerCase().trim()){
//            result = true;
//        }
//     });
//     return result;
// }

//////////////////////////////////////////////////////

//the bigest number in an array

// const array = [-1,0,3, 99, 2, 99];

// function biggestNumberInArray(arr) {
//     for (let i = 0; i < array.length; i++) {
//        for(let j=1;j<array.length;j++){
//            for(let k =2;k<array.length;k++){
//                if(array[i]>array[j] && array[i]>array[k]){
//                      console.log(array[i]);
//             }
//           }
//        }
//     }
//  }

//////////////////////////////////////////////////////

//the bigest number in an array

// const array = [-1,0,3, 99, 2, 99];

// function biggestNumberInArray(arr) {
//     let maxNumber;
//     for(let i = 0; i < arr.length; i++){
//         if(!maxNumber){ // protect against an array of values less than 0
//             maxNumber = arr[i]
//         }
//         if(arr[i] > maxNumber){
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber
// }
// console.log(biggestNumberInArray(array));

//////////////////////////////////////////////////////

// Declare two variables
const num1 = 5;
const num2 = 5;

// Compare which number is greater
if (num1 > num2) {
  console.log(`The greater number of ${num1} and ${num2} is ${num1}.`);
} else if (num1 < num2) {
  console.log(`The greater number of ${num1} and ${num2} is ${num2}.`);
} else {
  console.log(`Both numbers ${num1} and ${num2} are equal.`);
}

//////////////////////////////////////////////////////
const numbers = [10, 75, 8, 20, 15];

let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i]; // Update the largest number
    }
  }
 
  // Log the largest number
console.log(`The largest number in the array is: ${largestNumber}`);

////////////////////////////////////////////////////////////////////////

function helloWorld(languageCode) {
    let greeting = "Hello, World"; // Default greeting in English
  
    // Use a switch statement to handle different language codes
    switch (languageCode) {
      case "tr":
        greeting = "Merhaba Dünya!"; // Spanish
        break;
      case "de":
        greeting = "Hallo, Welt!"; // German
        break;
      case "fr":
        greeting = "Bonjour, Monde!"; // French
        break;
      // Add more cases for additional languages
      default:
        // English is the default language
        break;
    }
  
    return greeting;
  }
  
  // Call the function for each supported language and log the result
  console.log(helloWorld("tr")); // Output: ¡Hola, Mundo!
  console.log(helloWorld("de")); // Output: Hallo, Welt!
  console.log(helloWorld("fr")); // Output: Bonjour, Monde!
  console.log(helloWorld("zh")); // Output: Hello, World (default to English)
  