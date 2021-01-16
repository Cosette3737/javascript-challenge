// from data.js
var tableData = data;

// YOUR CODE HERE!
// select the filter button/form/tablebody
var button = d3.select("#filter-btn");
var form = d3.select("#form-id");
var tbody = d3.select("tbody");
var clearButton = d3.select("#clear-btn")
 //Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
clearButton.on("click", fillTable);
  // Attach table to container
function fillTable() {
 tableData.forEach((rowData) => { 
   
    let row = tbody.append("tr");
      Object.values(rowData).forEach((value) => {
        let cell = row.append("td");
        cell.text(value);
          });
        })
      };



//Complete event handler
function runEnter() {
    //prevent page from refreshing
  d3.event.preventDefault();
    //select input from datetime entry
  var inputElement = d3.select("#datetime");
    //get the value of the input
  var inputValue = inputElement.property("value");
    //filter data
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue); 
  //clear table for next filter
  tbody.html("");
  //console.log(filteredData);
//put filtered data into the table  
  filteredData.forEach((rowData) => { 
   
    let row = tbody.append("tr");
      Object.values(rowData).forEach((value) => {
        let cell = row.append("td");
        cell.text(value);
          });
        })
      
};
fillTable();