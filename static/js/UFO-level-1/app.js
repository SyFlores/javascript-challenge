// Event listener here
// var button = d3.select(".filter-btn"); // Revisit after ev
var inputField = d3.select("input");


// from data.js
var tableData = data;

// Create a reference to tbody so we can create a row for every object in the array
var bodySelect = d3.select("tbody")

function displayData(date) { 
    // We'll need to loop through each object in the array
    tableData.forEach(ufoData => {

        // Condition to check date goes here, if DNE or empty then load normally
        if (ufoData.datetime.value === date) {

            console.log(ufoData.datetime.value);

        var rowCreate = bodySelect.append("tr");

        // For each object, we'll need loop through and create & write a td tag
        Object.entries(ufoData).forEach(([key, value]) => {
            var cellCreate = rowCreate.append("td");
            cellCreate.text(value);
            });
        }

        else {
            console.log(`${ufoData.datetime.value} not selected`);
        }
})};


function dataFilter(event) {
    var inputText = d3.event.target.value;
    // Page reload triggered date event listener... maybe not necessary?

    displayData(inputText);
}





inputField.on("change", dataFilter);