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

     axios.get('https:/lambda-times-backend.herokuapp.com/articles').then(response => {

        response.data.articles['javascript'].forEach(element => {
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

        // const  articles = [];
        // const articles2 = response.data.articles;
        // const articles3 = Object.keys(articles2);

        // const articles4 = articles3.forEach(element => {
        //     articles2[element];
        // });

        // console.log(articles4)
        
        // // console.log(articles2);

        // // console.log(articles3);

        // articles.forEach(element => {
        //     cardCointainer.appendChild(Card(element));
        //         }

    
    .catch(error => {
        console.log('Error:', error)
    });
    
const cardContainer = document.querySelector('.cards-container');


function Card (headline, authorPhoto, authorName){

    //declaration of variables 

    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorNm = document.createElement('span');

    //add contents to elements 

    headlineDiv.texContent = headline;
    img.setAttribute('src', authorPhoto);
    authorNm.textContent = `By ${authorName}`;

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

    return cardDiv;
}
