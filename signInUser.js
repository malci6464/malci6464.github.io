/*MODULE - build signed in user data */

import { appState } from "./globals";
import { signedInUser } from './data';
import { getAxisTitles } from './buildChart'

// returns bool dependant on main dataframe selected in func unitTestDetection
function signedInUserData() {
    let data = appState.unitTestDataBool
      ? signedInUser.userUnitTests
      : signedInUser.itemData;
    return data;
  }
  
  //outputs nested 2d array in highcarts format
  function buildSingleUserData() {
    let results = signedInUserData();
  
    //item score data - one chart
    if (appState.unitTestDataBool === false) {
      return userItemScoreBuild(results);
    }
    //unit test data - multiple charts
    else if (appState.unitTestDataBool === true) {
      let newResults = results.slice(4);
      return userUnitTestBuild(newResults, results);
    } else {
      //if no user data
      return false;
    }
  }
  
  function userItemScoreBuild(results) {
    let currentY = results[1][appState.category];
    let newData = [];
    let newResults = results.map((each) => newData.push([each[4], currentY]));
    return newData;
  }
  
  function userUnitTestBuild(newdata, original) {
    //use global yProp
    let ypropVal = original[appState.category];
    let new2dArr = [];
    newdata.map((each) => new2dArr.push([[each, ypropVal]])); //highcharts data formatting
    return new2dArr;
  }
  
  function addSingleData(id, chart) {
    let singleData = buildSingleUserData();
    const dataFrame = appState.unitTestDataBool ? singleData[id] : singleData;
    insertToChart(dataFrame, chart);
  }
  
  function insertToChart(data, chart) {
    chart.addSeries({
      name: "Your data",
      color: "#ff5232",
      tooltip: {
        pointFormat: getAxisTitles("y") + "<b> {point.y}</b>",
  
        valueDecimals: 2,
      },
      marker: {
        symbol: "circle",
        radius: 6,
      },
      type: "scatter",
      data: data,
    });
  }

  export { addSingleData } 