// from data.js
var tableData = data;

// YOUR CODE HERE!
// select the filter button
var button = d3.select("#filter-btn");

//select the form
var form = d3.select("#filters")

//Create event handlers

button.on("click",runEnter);
form.on("submit",runEnter);

//Complete event handler

function runEnter() {
    //prevent page from refreshing
    d3.event.preventDefault();
    //select input from datetime entry
    var inputElement = d3.select("#datetime");
    //get the value of the input
    var inputValue = inputElement.property("value");


var filteredData = tableData.filter(data => data.datetime === inputValue);

//Check input in console
console.log(filteredData);
console.log(tableData);

//Select the table
var table = d3.select(tableData);
//create a striped table with bootstrap

table.attr("class", "table table-striped");
http://getbootstrap.com/docs/3.3/css/#tables-striped

//select table body
var tbody=d3.select("tbody");
//append table row to the table body
var row =tbody.append("tr");
//append one cell to row for each datapoint
row.append("td").text([0].datetime);
row.append("td").text([0].city);
row.append("td").text(tableData.state);
row.append("td").text(tableData.country);
row.append("td").text(tableData.shape);
row.append("td").text(tableData.durationMinutes);
row.append("td").text(tableData.comments);
};