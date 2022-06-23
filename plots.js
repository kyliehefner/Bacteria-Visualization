// Creates a dropdown menu of ID numbers dynamically
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

// Called in html doc when dropdown is changed
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Populate demographic info based on selection
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // metadata is filtered for an entry that matches the given ID
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Demographic Info panel is selected
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    // H6 elements with the selected demographic info are added
    PANEL.append("h6").text(`ID: ${result.id}`);
    PANEL.append("h6").text(`ETHNICITY: ${result.ethnicity}`);
    PANEL.append("h6").text(`GENDER: ${result.gender}`);
    PANEL.append("h6").text(`AGE: ${result.age}`);
    PANEL.append("h6").text(`LOCATION: ${result.location}`);
    PANEL.append("h6").text(`BBTYPE: ${result.bbtype}`);
    PANEL.append("h6").text(`WFREQ: ${result.wfreq}`);
  });
}