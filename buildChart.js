import { appState } from './globals';
import { addSingleData } from './signInUser';
import { addScatter } from './scatter';
import {  setConditionalMaxYProp } from './boxplotBuild';

const yTitle = ["Skill score", "Experience (years)", "% correct"];
const xTitle = ["Unit tests", "Item score Categories"];
const unitTests = ["Failed", "Passed"];
const itemScoreCategories = [
  "Speed",
  "OO",
  "Refactoring",
  "Implimentations",
  "Unit tests",
  "Regression",
];

//should correspond to number of charts
const unitTestNames = [
  "test1",
  "test2",
  "test3",
  "test4",
  "test5",
  "test6",
  "test7",
];

/*MODULE - chart template */

function buildChart(dataList) {
    let id = 0;
    if (appState.unitTestDataBool) {
      //unit test chart
      dataList.forEach((chart) => {
        let chartObject = createChart(id, chart);
        id++;
        if (appState.scatterData === true) {
          addScatter(chartObject[0], chartObject[1]);
        }
      });
    } else {
      //itemscore chart
      let chartObject = createChart(id, dataList[0]);
      if (appState.scatterData === true) {
        addScatter(chartObject[0], chartObject[1]);
      }
    }
  }
  
  function getAxisTitles(stringid) {
    if (stringid === "x") {
      switch (appState.unitTestDataBool) {
        case true:
          return xTitle[0];
        case false:
          return xTitle[1];
      }
    } else if (stringid === "y") {
      return yTitle[appState.category - 1]; //handle index
    }
  }
  
  
  function itemScoreUpdate(chart) {
    if (appState.unitTestDataBool === false) {
      chart.update({
        chart: {
          inverted: true,
        },
        title: {
          text: "Item Score",
        },
        xAxis: {
          reversed: false,
          categories: itemScoreCategories,
        },
        legend: {
          enabled: false,
        },
      });
    }
  }
  
  function createChart(id, data) {
    let chartOptions = {
      chart: {
        type: "boxplot",
        renderTo: "container" + id.toString(),
      },
      title: {
        text: unitTestNames[id],
      },
      legend: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        //todo: add progromatically
        categories: unitTests,
        title: {
          text: getAxisTitles("x"),
        },
      },
      yAxis: {
        max: setConditionalMaxYProp(),
        title: {
          text: getAxisTitles("y"),
        },
      },
      plotOptions: {
        boxplot: {
          fillColor: "#F2F2F2",
          lineWidth: 2,
          medianColor: "#FF5232",
          medianWidth: 3,
          stemColor: "#696969",
          stemWidth: 1,
          whiskerColor: "#696969",
          whiskerLength: "20%",
          whiskerWidth: 3,
          //prevent add and remove of boxplots - leads to small axis category bug
          events: {
            legendItemClick: function (e) {
              e.preventDefault();
            },
          },
        },
      },
  
      series: [
        {
          name: "Observations",
          color: "#ff5232",
          data: data[0],
          tooltip: {
            headerFormat: "Factor: <em>{point.key}</em><br/>",
            valueDecimals: 2,
          },
        },
      ],
    };
    //build instance
    const chart = new Highcharts.Chart(chartOptions);
  
    //conditional upon globals if avail/req
    addSingleData(id, chart);
    itemScoreUpdate(chart);
  
    //consumed by conditional scatter data option
    return [data, chart];
  }
  
  export { buildChart, createChart, getAxisTitles }