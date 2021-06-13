// Selects the appropriate forms that we will be interacting with
var buttonField = d3.select("button");
var inputField = d3.select("input");

// from data.js
var tableData = data;

// Create a reference to tbody so we can create a row for every object in the array
var bodySelect = d3.select("tbody");

// This function will load whatever data is passed into it to override what is currently there in the table
function tableTalk(activeData) {

    // We'll have to reset our table, which we can do by writing over our bodySelect with empty space
    bodySelect.html("");

    activeData.forEach(ufoData => {

        // Creates the tr tag to place td tags and data inside
        var rowCreate = bodySelect.append("tr");

        // For each object, we'll need loop through and create & write a td tag
        Object.entries(ufoData).forEach(([key, value]) => {
            var cellCreate = rowCreate.append("td");
            cellCreate.text(value);
        });
    });
}

// This function filters on only the value that is currently entered in the form
// This is set-up to work both for a click and an enter
function dataFilter() { 

    // Select the date from the in put
    var date = inputField.property("value");

    // Set temporary variable to be written over with reduced data
    tempData = tableData;

    // Condition to check date goes here, if DNE or empty then load normally
    if (date) { // This will check if there is a value that have been passed
        tempData = tempData.filter(ufoData => ufoData.datetime === date)
    }

    tableTalk(tempData);
}

tableTalk(tableData);

buttonField.on("click", dataFilter);

// Not sure why this isn't working for when on submit. It appears to load instantaneously then disappear
// We will leave this off for now as starting to type out a date causes the main data to disappear as it doesn't recognize the partial date
// inputField.on("change", dataFilter);