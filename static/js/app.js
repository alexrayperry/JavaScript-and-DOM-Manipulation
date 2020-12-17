// from data.js
var tableData = data;

// Select the "tbody" tag using d3. "tbody" will be used to manipulate the table area of the webage.

var tbody = d3.select("tbody")

// Loop through each object in the dataset

tableData.forEach((entry) => {

    // Define new row in table using "tr" tag

    var row = tbody.append("tr");

    // Iterate through JS objects and simultaneously retrieve values from key/value pairs
    // and add values to HTML table using previously defined "row" variable and appending "td" tag.

    Object.entries(entry).forEach(([key,value]) => {

        var ufoInfo = row.append("td");

        ufoInfo.text(value);

    });
});

// Crete variables to hold selected HTML tag/id/class

var button = d3.select("#filter-btn");

var form = d3.select("form");

// Create event listeners for when a specific event take place and run function

button.on("click", runEnter);

form.on("submit", runEnter);

// Begin writing function for preventing default action when form is submitted, 
// listening when the button is clicked, and filtering table and displaying on webpage. 

function runEnter() {

    // Prevent default behavior

    d3.event.preventDefault();

    // Variable for tag where user entered a date

    var inputElement = d3.select("#datetime");

    // Variable and retrieval of the value date entered by the user

    var inputValue = inputElement.property("value");

    // Filter data by the date the user entered

    var filteredData = tableData.filter(tableData => tableData.dateime === inputValue);

    // Remove current HTML and data that is displayed in the table

    tbody.html("");

    // Loop through filtered data and display on table

    filteredData.forEach((search) => {

        // Define variable for appending a new row to html table

        var row = tbody.append("tr");

        // Iterate through JS objects and simultaneously retrieve values from key/value pairs
        // and add values to HTML table using previously defined "row" variable and appending "td" tag.

        Object.entries(search).forEach(([key, value]) => {

            var sightingInfo = row.append("td");

            sightingInfo.text(value);
            
        });

    });

};