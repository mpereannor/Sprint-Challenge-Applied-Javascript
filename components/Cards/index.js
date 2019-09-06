// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https:/lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        response.data.articles["javascript"].forEach(element => {
        let cc = Card(element.headline, element.authorPhoto, element.authorName);
        cardContainer.appendChild(cc);
 
        });

        response.data.articles['bootstrap'].forEach(element => {
            let cc = Card(element.headline, element.authorPhoto, element.authorName);
            cardContainer.appendChild(cc);
        });

        response.data.articles['technology'].forEach(element => {
            let cc = Card(element.headline, element.authorPhoto, element.authorName);
            cardContainer.appendChild(cc);
        });

        response.data.articles['jquery'].forEach(element => {
            let cc = Card(element.headline, element.authorPhoto, element.authorName);
            cardContainer.appendChild(cc);
        });

        response.data.articles['node'].forEach(element => {
            let cc = Card(element.headline, element.authorPhoto, element.authorName);
            cardContainer.appendChild(cc);
        });
     })   
    
    .catch(error => {
        console.log('Error:', error)
    });
    
const cardContainer = document.querySelector('.cards-container');


function Card(headline, authorPhoto, authorName){

    const cardDiv = document.createElement("div");
    const headlineDiv = document.createElement("div");
    const author = document.createElement("div");
    const authorNm = document.createElement("span");
    const img = document.createElement("img");
    const imgContainer = document.createElement("div");
    
    
    img.setAttribute("src", authorPhoto);
    imgContainer.classList.add("img-container");
    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    author.classList.add("author");
    
    headlineDiv.textContent = headline;
    authorNm.textContent = authorName;
    
    author.appendChild(imgContainer);
    author.appendChild(authorNm);
    imgContainer.appendChild(img);
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(author);
    
    return cardDiv;
  
}
