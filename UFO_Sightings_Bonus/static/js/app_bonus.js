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
      data.filter(item => item[key]===inputValue);
      var cell = row.append("td");
      cell.text(value);
      });
  });
};

//render the table upon loading
buildtable(ufoData);

var filterData = [];

//filer through the table for a specific date
// button refrence
var button = d3.select("#filter-btn");

// form refrence
var form = d3.select(".form-group");

// filter references
var filter = d3.selectAll(".filter").on("change",captureFilterData)

// Create event handlers 
button.on("click", dateSearch);
form.on("submit",dateSearch);



function captureFilterData(){
    var element = d3.select(this).select("input");
    var inputValue  = element.property('value');
    var id = element.attr('id');
    if(inputValue){
        filterData[id] = inputValue;
    }
    else{
        delete filterData[id];
    }

    buildFilterTable();

}



