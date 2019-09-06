// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {

         let topicSection = response.data.topics;
        topicSection.forEach(topic => {
            const tab = Tab(topic);
            topicContainer.appendChild(tab);
        }) 
    })
    .catch(error => {
        console.log('Une Erreur:', error)
    })

function Tab(info){

    const tabDiv = document.createElement('div');
    tabDiv.textContent = info
    tabDiv.classList.add('tab');

    return tabDiv;
}

const topicContainer = document.querySelector('.topics');

