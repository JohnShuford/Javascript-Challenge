//create the table on the page with the ufo data
// rename the data to something more specific
var ufoData = data;

//empty data
var emptyData = [{ " ": " "}];


// table body refrence
var tbody = d3.select("tbody");

// render the table
ufoData.forEach((sightings) => {
  var row = tbody.append("tr");
  Object.entries(sightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

//filer through the table for a specific date
// button refrence
var button = d3.select("#filter-btn");

// form refrence
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", dateSearch);
form.on("submit",dateSearch);

function buildtable(data){
  tbody.html("");
  data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

function dateSearch(){
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // clearing();

  var inputValue = d3.select('#datetime').property('value');

  console.log(inputValue);

  var filteredDate = ufoData.filter(item => item.datetime===inputValue);

  console.log(filteredDate);

  buildtable(filteredDate);

  // filteredDate.forEach((sightings) => {
  //   var row = tbody.append("tr");
  //   Object.entries(sightings).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
}

