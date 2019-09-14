// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    //declaration of variables 

    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const lambdaTimes = document.createElement('h1');
    const tempSpan = document.createElement('span');

    //add contents to elements 

    dateSpan.textContent = 'MARCH 28, 2019';
    lambdaTimes.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';

    //add attributes to elements

    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //fill up parent element

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(lambdaTimes);
    headerDiv.appendChild(tempSpan);

    return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
