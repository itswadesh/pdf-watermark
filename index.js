var pdfFiller = require('pdffiller');

var sourcePDF = "aoc-cv-303.pdf";
var watermarkPDF = "watermark.pdf";
var destinationPDF = "aoc-cv-303-complete.pdf";
var data = {
    "last_name": "John",
    "first_name": "Doe",
    "date": "Jan 1, 2013",
    "football": "Off",
    "baseball": "Yes",
    "basketball": "Off",
    "hockey": "Yes",
    "nascar": "Off"
};
// This does my job
// pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
//     if (err) throw err;
//     console.log("In callback (we're done).");
// });

// I want this function 
pdfFiller.addWatermark(sourcePDF, destinationPDF, watermarkPDF, function (err) {
    if (err) throw err;
    console.log("In callback (we're done).");
});

