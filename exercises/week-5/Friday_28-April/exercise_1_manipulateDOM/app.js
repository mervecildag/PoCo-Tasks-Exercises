let h1Element = document.querySelector("h1");
let pElement= document.querySelector("p");
let aElement= document.querySelector("a");

//For the h1 variable write a loop with 2 iterations
for (let i = 0; i < 2; i++) {
   h1Element.innerHTML += " " + i ;
}



//For the p variable write a loop with 4 iterations
let newElementinP;

for (let i = 0; i < 4; i++) {
    newElementinP = document.createElement("span");
    newElementinP.textContent = " " + i;
    pElement.insertAdjacentElement("afterbegin", newElementinP)
}

//For the a variable write a loop with 7 iterations

let newElementinA;

for (let i = 0; i < 7; i++) {
 newElementinA = document.createElement("span");
 newElementinA.textContent = i;
  newElementinA.replaceWiths(i);
}







