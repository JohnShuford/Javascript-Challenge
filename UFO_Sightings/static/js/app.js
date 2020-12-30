//create the table on the page with the ufo data
// rename the data to something more specific
var ufoData = data;

// table body refrence
var tbody = d3.select("tbody");

/* creating a function that will render the table 
with the data that gets passed into it */
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

// render the table
buildtable(ufoData);

//filer through the table for a specific date
// button refrence
var button = d3.select("#filter-btn");

// form refrence
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", dateSearch);
form.on("submit",dateSearch);


function dateSearch(){
  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputValue = d3.select('#datetime').property('value');

  console.log(inputValue);

  var filteredDate = ufoData.filter(item => item.datetime === inputValue);

  console.log(filteredDate);

  buildtable(filteredDate);
}

