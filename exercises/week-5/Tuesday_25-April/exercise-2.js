const myChoices = ["blue", "red", "green", "yellow", "orange"]; // Example array of top color choices


// For each choice, log to the screen a string like: "My #1 choice is blue."

for (let index = 0; index < myChoices.length; index++) {
  console.log(`My #${index+1} choise is ${myChoices[index]}.`)   
}


// Loop through the array and log each choice with ordinal suffix
for (let i = 0; i < myChoices.length; i++) {
  let ordinalSuffix;

  // Determine the ordinal suffix based on the number
  if (i === 0) {
    ordinalSuffix = "st";
  } else if (i === 1) {
    ordinalSuffix = "nd";
  } else if (i === 2) {
    ordinalSuffix = "rd";
  } else {
    ordinalSuffix = "th";
  }

  // Log the choice with ordinal suffix
  console.log(`My ${i + 1}${ordinalSuffix} choice is ${myChoices[i]}.`);
}
