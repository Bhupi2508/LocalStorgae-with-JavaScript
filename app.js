// call the print data tag from html
const printData = document.querySelector('#data')

// create a li tag for print the data one by one
const ol = document.createElement('ol')
// assign ol Id to ol tag
ol.id = 'ol';

// call the funstion
listenerValue();

// read the input value from the user during add
function listenerValue() {

    // Listener for add element
    document.querySelector('#form').addEventListener('submit', DataValue);

    // Listener for remove element
    printData.addEventListener('click', DataRemoveValue);

    // Listener for on-load localStorage data print
    // jQuery function
    // let a = window.addEventListener('DOMContentLoaded', localStorageOnLoad)

    if (document.readyState !== 'loading') init()
    else document.addEventListener('DOMContentLoaded', init);

    function init() {
        localStorageOnLoad()
    }

}

/**
 * Desc : // calling this fn from addEventListerners during add value
 * @param {*} e 
 */
function DataValue(e) {
    e.preventDefault();

    //get the input value
    const dataValue = document.querySelector('#name').value;

    // add a remove button with the value
    const removeButton = document.createElement('a');
    removeButton.classList = 'remove-data';
    removeButton.textContent = 'remove';

    // const = document.createElement('li')
    const li = document.createElement('li');

    li.textContent = dataValue;

    // append the remove button with the data
    li.appendChild(removeButton)

    // append li tag to ol tag
    ol.appendChild(li);

    // print data on page
    printData.appendChild(ol)

    // fn where we add the value in localStorage
    addLocalStorage(dataValue);

    // reset the input
    this.reset();


}

/**
 * Desc : calling this function from addEventListerners during remome value
 * @param {*} e 
 */
function DataRemoveValue(e) {

    // find the excat value
    if (e.target.classList.contains('remove-data')) {

        // remove parent tag for that value
        e.target.parentElement.remove()

        // Remove from Storage
        removeTweetLocalStorage(e.target.parentElement.textContent);
    }

}


/**
 * Desc : function where we add the value in localStorage
 * @param {*} dataValue
 */
function addLocalStorage(dataValue) {

    let datafromLocal = getLocalStorage();
    datafromLocal.push(dataValue)


    // add in localStorage with JSON format
    localStorage.setItem('names', JSON.stringify(datafromLocal))

}


/**
 * Desc : get the value from lcoalStorage
 * @param {*}  
 */
function getLocalStorage() {
    let data;

    // get the value from local Storage
    const localData = localStorage.getItem('names');

    if (localData === null) {
        data = [];
    } else {
        data = JSON.parse(localData)
    }

    return data;
}


/**
 * Desc : get the value from localStroage and print on load
 * @param {*} 
 */
function localStorageOnLoad() {

    // call the getLocalStorage function
    let onLoadData = getLocalStorage();

    // loop for print all the data
    onLoadData.forEach(dataValue => {

        // add a remove button with the value
        const removeButton = document.createElement('a');
        removeButton.classList = 'remove-data';
        removeButton.textContent = 'remove';

        // const = document.createElement('li')
        const li = document.createElement('li');

        li.textContent = dataValue;

        // append the remove button with the data
        li.appendChild(removeButton)

        // append li tag to ol tag
        ol.appendChild(li);

        // print data on page
        printData.appendChild(ol)
    });

}

/**
 * Desc : calling this function from addEventListerners during remome value
 * @param {*} 
 */
function removeTweetLocalStorage(tweet) {
    // get tweets from storage
    let tweets = getLocalStorage();

    // Remove the X from the tweet

    const tweetDelete = tweet.substring( 0, tweet.length - 6 );

    // Loop Throught  the tweets and remove the tweet that's equal
    tweets.forEach(function(tweetLS, index) {
         if(tweetDelete === tweetLS) {
              tweets.splice(index, 1);
         }
    });

    // Save the data 
    localStorage.setItem('names', JSON.stringify(tweets) );
}