// Get a references
// table body
var tbody = d3.select("#ufo-table");
// button
var button = d3.select("#filter-btn");
console.log(button);
// form
var form = d3.select("#")

// from data.js
var tableData = data;

tableData.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
