
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    img: "https://media.shortform.com/covers/png/the-design-of-everyday-things-cover@8x.png",
    alreadyRead: false
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400.jpg",
    alreadyRead: true
  }
];

let h1Element = document.createElement("h1");
h1Element.textContent = "My Book List";
document.body.appendChild(h1Element);

let ulElement = document.createElement("ul");
document.body.appendChild(ulElement);



  books.forEach((book)=>{

    let listItem = document.createElement("li");
    listItem.style.listStyleType = "none";
    let pElement = document.createElement("p");
    let image = document.createElement("img");
    image.src = book.img;
    image.style.width = "100px"
    listItem.appendChild(image);
    pElement.textContent = `${book.title} + " by " + ${book.author}`;
    listItem.appendChild(pElement);
    ulElement.appendChild(listItem);

    if (book.alreadyRead == true) {
      listItem.style.color = "green";
    }else{
      listItem.style.color = "red";      
    }

})
