import { rawDataFrame } from "./data";
import { buildBoxplotCache, retrieveCache } from "./buildDframes";
import { appState } from './globals';
import { buildChart } from './buildChart'; 

// bool update to var unitTestDataBool
function unitTestDetection(dataset) {
  //remove the name,skill,experience.%results from arbitary row
  let row = dataset[1].slice(4);
  //assumption that item data is one chrt instance
  if (row.length === 1) {
    appState.unitTestDataBool = false;
    console.log("Unit test data set detected: " + appState.unitTestDataBool);
  } else {
    const check = row.map((el) =>
      el === 0 || el === 1
        ? (appState.unitTestDataBool = true)
        : (appState.unitTestDataBool = false)
    );
    console.log("Unit test data set detected: " + appState.unitTestDataBool);
  }
}

//done once on page build/load only
function createDiv(id) {
  let div = document.createElement("div");
  div.id = "container" + id.toString();
  let divBuild = appState.unitTestDataBool
    ? document.getElementById("grid-container").append(div)
    : document.getElementById("item-score").append(div);
}

function attachDivToDom(list) {
  let id = 0;
  if (appState.unitTestDataBool) {
    list.forEach((chart) => {
      createDiv(id);
      id++;
    });
  } else {
    createDiv(id);
  }
}

//create cache - set chart type
buildBoxplotCache();
unitTestDetection(rawDataFrame);

//set default for page load
appState.category = 1

//build nodes and charts
attachDivToDom(retrieveCache());
buildChart(retrieveCache());
