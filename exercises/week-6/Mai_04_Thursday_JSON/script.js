/* load photos via fetch and display 10 of them as images with title ( as  caption and as alt)
    fetch the data and turning json to object list
    loop through the array 10 items
    create Element image tag to display the image 
    create 2nd element for title -- either h-tag or figcaption-tag
    we use figure as wrapper element for img and figcaption
    we append the figure elements to the DOM, to the main
*/
const a = fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
.then(response => response.json())
.then(json => displayData(json))

// console.log(a);

const main = document.querySelector("main");

function displayData(data){
   //data = data.slice(0,10)
   data.slice(0,10).forEach(photoObj => {
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    //    console.log(photoObj);
        img.src = photoObj.url;
        img.alt = photoObj.title;
        main.appendChild(img);

        let figcaption = document.createElement("figcaption");
        figcaption.textContent = photoObj.title;

        figure.appendChild(figcaption);
        figure.appendChild(img);

        main.appendChild(figure);

    });
}
