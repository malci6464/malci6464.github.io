import { appState, cachedData } from './globals';
import { rawDataFrame } from './data';
import { selectPropAndScore, seperateData, findNumbTests } from './dataProcess';
import { findBoxPlotParams } from './boxplotBuild';
import { buildScatterData } from './scatter';

// create instances and attach to nodes  - update state

function buildDataFrames(data) {
  const noOfCharts = findNumbTests(data);
  const dataForCharts = [];
  //skip category data - use vals only
  for (let i = 4; i < noOfCharts + 4; i++) {
    const newDF = buildMatrix(data, i);
    dataForCharts.push(newDF);
  }
  return dataForCharts;
}

function buildMatrix(dataset, testcase) {
  let df1 = selectPropAndScore(dataset, testcase);
  let df2 = seperateData(df1);
  const final = df2.map((factor) => findBoxPlotParams(factor));
  const pointData = buildScatterData(df2); //conditionally applied in buildChart
  return [final, pointData];
}

function updateY(val) {
  //expect val = 1,2,3 -> global value
  appState.category = Number(val); //type check safety
  buildChart(retrieveCache());
}

//build data - add to cache object
function buildBoxplotCache() {
  appState.category = 1
  cachedData.skill = buildDataFrames(rawDataFrame);
  appState.category = 2
  cachedData.experience = buildDataFrames(rawDataFrame);
  appState.category = 3
  cachedData.percentage = buildDataFrames(rawDataFrame);
 
}

function retrieveCache() {
  switch (appState.category) {
    case 1:
      return cachedData.skill;
    case 2:
      return cachedData.experience;
    case 3:
      return cachedData.percentage;
  }
}

export { retrieveCache, buildBoxplotCache, updateY } ;


