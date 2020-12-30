//renaming the data to something more unique
var ufoData = data;

// table body refrence
var tbody = d3.select("tbody");


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

var filterData = [];

//filer through the table for a specific date
// button refrence
var button = d3.select("#filter-btn");

// form refrence
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", dateSearch);
form.on("submit",dateSearch);


// class X(A,B,C){
//     A = 1
//     B=2
//     C=3

// }

// class y(X){
//     print(A,B,C);
//     print(this.A,this.B,this.C);
// }

// X(10,20,30)

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

d3.selectAll(".filter").on("change",captureFilterData)

