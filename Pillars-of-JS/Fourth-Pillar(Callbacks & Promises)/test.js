const fs = require("fs");
// Write a function to download the data from the url
// Write a function to save that downloaded data into a file and then return the file name
function fetchData(url, fn) {
  // this function downloads the data from the url and then passed the content to the callback function
  console.log("started downloading the data from the given", url);
  setTimeout(function download() {
    console.log("Downloading completed");
    let data =
      "The creator of Javascript Programming Language is Brendan Eich.";
    fn(data);
  }, 5000);
}

function downloadData(data) {
  console.log(data);
  fs.writeFile("output.md", data, (err) => {
    if (err) throw err;
  });
  return "output.md";
}

fetchData("www.google.com", downloadData);
