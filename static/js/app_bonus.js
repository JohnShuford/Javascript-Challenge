//renaming the data to something more unique
var ufoData = data;

// table body refrence
var tbody = d3.select("tbody");

// var filteredDate = ufoData.filter(item => item[key]===inputValue);

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
};

function filterData(data){
  data.filter(item => item[key]===inputValue);
}

//render the table upon loading
buildtable(ufoData);

//filer through the table for a specific date
// button refrence
var button = d3.select("#filter-btn");

// form refrence
var form = d3.select(".form-group");

// filter inputs and create its own event handler
var filter = d3.selectAll(".filter").on("change",captureFilterData)

// Create event handlers 
button.on("click", captureFilterData);
form.on("submit", captureFilterData);

function captureFilterData(){
  //creating an empty array for the filtered data
  var filter = [];

  // selecting the inputed element using this
  var element = d3.select(this).select("input");

  // finding the value from the element
  var inputValue  = element.property('value');

  // loggint the filter
  console.log(inputValue);

  // finding the id from the element
  var id = element.attr('id');

  // loggin the id
  console.log(id);

  // an if statement for creating the filter array
  if(inputValue){
      filter[id] = inputValue;
  }
  else {
      delete filter[id];
  }

  // logging the current filters
  console.log(filter)

  // filtering the data
  filteredData = ufoData.filter(item => item[id]===inputValue);

  // logging the filtered data
  console.log(filteredData);

  // building the table with the filtered data
  buildtable(filteredData);
};



