// from data.js
var tableData = data;

// Create a reference to tbody so we can create a row for every object in the array
var bodySelect = d3.select("tbody")

// We'll need to loop through each object in the array
tableData.forEach(ufoData => {
    var rowCreate = bodySelect.append("tr");
    
    // For each object, we'll need loop through and create & write a td tag
    Object.entries(ufoData).forEach(([key, value]) => {
        var cellCreate = rowCreate.append("td");
        cellCreate.text(value)
      });
});