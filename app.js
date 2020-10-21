// call the print data tag from html
const printData = document.querySelector('#data')

// create a li tag for print the data one by one
const ol = document.createElement('ol')

// call the funstion
listenerValue()

// read the input value from the user
function listenerValue() {
    document.querySelector('form').addEventListener('submit', DataValue);
}

// calling this fn from addEventListerners
function DataValue(e) {
    e.preventDefault();

    //get the input value
    const dataValue = document.querySelector('#name').value;

    // assign ol Id to ol tag
    ol.id = 'ol';

    // const = document.createElement('li')
    const li = document.createElement('li');

    li.textContent = dataValue;

    // append li tag to ol tag
    ol.appendChild(li)

    // print data on page
    printData.appendChild(ol)

}