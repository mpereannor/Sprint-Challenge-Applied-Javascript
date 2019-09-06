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
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let cardSection = Card(response.data.articles);

        cardContainer.appendChild(cardSection);
    })
    .catch(error => {
        console.log('Error:', error)
    })

function Card (cardData){

    //declaration of variables 

    cardDiv = document.createElement('div');
    headlineDiv = document.createElement('div');
    author = document.createElement('div');
    imgContainer = document.createElement('div');
    img = document.createElement('img');
    authorNm = document.createElement('span');

    //add contents to elements 

    headlineDiv.texContent = cardData.headline;
    img.setAttribute('src', cardData.authorPhoto);
    authorNm.textContent = `By ${cardData.authorName}`;

    //add attributes to elements

    cardDiv.classList.add('card');
    author.classList.add('author');
    headlineDiv.classList.add('img-container');

    //fill up parent element
    
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorNm);
    imgContainer.appendChild(img);
}

const cardContainer = document.querySelector('.card-container');