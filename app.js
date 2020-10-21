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
    document.querySelector('#form').addEventListener('submit', DataValue);

    printData.addEventListener('click', DataRemoveValue);
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

}

/**
 * Desc : // calling this fn from addEventListerners during remome value
 * @param {*} e 
 */
function DataRemoveValue(e) {

    // find the excat value
    if(e.target.classList.contains('remove-data')){

        // remove parent tag for that value
        e.target.parentElement.remove()
    }

}