// 1. Create an Array of Book Objects
const books = [
  

  {
    name: "The African Origin of Civilization: Myth or Reality",
    author: "Cheikh Anta Diop",
    price:15.95,
    description: "Cheikh Anta Diop was an Afrocentric historian origins and pre-colonial African culture. The Swiss archaeologist Charles Bonnet's discoveries at the site of Kerma shed some light on the theories of Diop. They show close cultural links between Nubia and Ancient Egypt, though the relationship had been acknowledged for years.",
    image:"images/Diop.jpg",
  },

  {
    name: "Bird's Engineering Mathematics",
    author: "John Bird",
    price:23.91,
    description: "Now in its ninth edition, Bird’s Engineering Mathematics has helped thousands of students to succeed in their exams. Mathematical theories are explained in a straightforward manner, supported by practical engineering examples and applications to ensure that readers can relate theory to practice. The extensive and thorough topic coverage makes this a great text for a range of level 2 and 3 engineering courses – such as for aeronautical, construction, electrical, electronic, mechanical, manufacturing engineering and vehicle technology – including for BTEC First, National and Diploma syllabuses, City & Guilds Technician Certificate and Diploma syllabuses, and even for GCSE and A-level revision. ",
    image:"images/JohnBird.jpg",
},


{
    name: "2030: How Today's Biggest Trends Will Collide and Reshape the Future of Everything ",
    author: " Mauro F. Guillen",
    price:4.99,
    description: "Once upon a time, the world was neatly divided into prosperous and backward economies. Babies were plentiful, workers outnumbered retirees and people aspiring towards the middle class yearned to own homes and cars. Companies didn't need to see any further than Europe and the United States to do well. We grew up learning how to 'play the game', and we expected the rules to remain the same throughout our lifetimes. That world – and those rules – are over. By 2030, a new reality will take hold, and before you know it there will be more grandparents than grandchildren. The global economy will be driven by the non-Western consumer for the first time in modern history and there will be more global wealth owned by women than men. There will be more robots than workers and more currencies than countries. All these trends, currently underway, will change everything you know about culture, the economy and the world. ",
    image:"images/2030.jpg",
},

];


// 2. Create a Function to Render Book Information
function renderBooks() {
  // Assuming you have an HTML element with the ID "book-container"
  const bookContainer = document.getElementById("book-container"); 

 

  // Loop through the books array
  books.forEach((book) => {

    

    
    // Create HTML elements for each book
    const bookCard = document.createElement("div");
    // You can define a CSS class for styling
    bookCard.classList.add("book-card"); 
    bookCard.classList.add("author"); 

    
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.name;

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.name;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${book.author}`;
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");

    const bookPrice = document.createElement("p");
    bookPrice.textContent = `Price: £${book.price.toFixed(2)}`; 

    const bookDescription = document.createElement("p");
    bookDescription.textContent = book.description; 

    const buyButton = document.createElement("button");
    buyButton.textContent = "Buy Now";
    buyButton.addEventListener("click", () => {
    
      console.log(`Clicked on "${book.name}"`);   
      
      document.write("<br/>");
     
    });  

    // Append elements to the book card
    
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPrice);
    bookCard.appendChild(bookDescription);
    bookCard.appendChild(buyButton);
    

    // Append the book card to the container
    bookContainer.appendChild(bookCard);

    
  });  

  
}

// 3. Call the renderBooks function to display the books
renderBooks();
