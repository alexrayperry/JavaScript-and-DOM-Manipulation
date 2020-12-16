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