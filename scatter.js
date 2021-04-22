import { appState } from './globals';
import { retrieveCache } from './buildDframes';

function buildScatterData(df) {
  let formattedData = [];
  for (let i = 0; i < df.length; i++) {
    df[i].map((point) => formattedData.push([i, point]));
  }
  return formattedData;
}

//scatter points toggle
function scatterEvent() {
  let switcher = document.getElementById("switch");
  if (switcher.checked === true) {
    appState.scatterData = true;
  } else {
    appState.scatterData = false;
  }
  buildChart(retrieveCache());
}

function addScatter(data, chart) {
  chart.addSeries({
    name: "Individual Results",
    color: "grey",
    type: "scatter",
    data: data[1],
    jitter: {
      x: 0.14, // Exact fit for box plot's groupPadding and pointPadding
    },
    marker: {
      fillColor: "rgba(191, 191, 191, 0.8)",
    },
    tooltip: {
      pointFormat: "Observation: {point.y}",
    },
  });
}

export {scatterEvent, addScatter , buildScatterData }


