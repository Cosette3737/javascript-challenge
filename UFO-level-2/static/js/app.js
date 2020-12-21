// from data.js
var tableData = data;

// YOUR CODE HERE!
// select the filter button/form/tablebody
var button = d3.select("#filter-btn");
var form = d3.select("#form-control");
var tbody = d3.select("tbody");
 //Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



//Complete event handler
function runEnter(){
    //prevent page from refreshing
    d3.event.preventDefault();
    //select input from datetime entry
    var inputdate = d3.select("#datetime");
    var inputcity = d3.select("#city");
    var inputstate = d3.select("#state");
    var inputcountry = d3.select("#country");
    var inputshape = d3.select("#shape");
    //get the value of the input
    var dateValue = inputdate.property("value");
    var cityValue = inputcity.property("value");
    var stateValue = inputstate.property("value");
    var countryValue = inputcountry.property("value");
    var shapeValue = inputshape.property("value");

    //filter data
    var filteredData = tableData.filter(tableData => tableData.datetime === dateValue); 
    var filteredData = tableData.filter(tableData => tableData.city === cityValue); 
    var filteredData = tableData.filter(tableData => tableData.state === stateValue);
    var filteredData = tableData.filter(tableData => tableData.country === countryValue);
    var filteredData = tableData.filter(tableData => tableData.shape === shapeValue);
    console.log(filteredData);
    //clear table for next filter
    tbody.html("");
    
    let allfilters= {
     dateValue,
     cityValue,
     stateValue,
     countryValue,
     shapeValue
   };
    //put filtered data into the table  
  if (allfilters.item == "")
    delete(allfilters.item);
    allfilters.forEach((rowData) => {
    let row = tbody.append("tr");
    Object.values(rowData).forEach(value) => {
    let cell = row.append("td");
    cell.text(value);
      });
    });

  };