import { appState } from './globals';

function findBoxPlotParams(data) {
    const lower = getPercentile(data, 0.25);
    const med = findMedian(data);
    const upper = getPercentile(data, 0.75);
    const min = findMinWhisker(upper, lower);
    const max = findMaxWhisker(upper, lower);
  
    return [min, lower, med, upper, max];
  }
  
  function findMinWhisker(upper, lower) {
    let whisker = lower - 1.5 * (upper - lower);
    //prevent negative whiskers
    let result = whisker < 0 ? 0 : whisker;
    return result;
  }
  
  function findMaxWhisker(upper, lower) {
    let whisker = upper + 1.5 * (upper - lower);
    let max = setConditionalMaxYProp();
    let result = whisker > max ? max : whisker;
    return result;
  }
  
  function setConditionalMaxYProp() {
    switch (appState.category) {
      case 1:
        return 9.9;
      case 2:
        return 50;
      case 3:
        return 100;
    }
  }
  
  function getPercentile(data, percentile) {
    data.sort();
    const index = percentile * data.length;
    let result = 0;
    if (Math.floor(index) == index) {
      result = (data[index - 1] + data[index]) / 2;
    } else {
      result = data[Math.floor(index)];
    }
    return result;
  }
  
  //find median - sort - handle %2 cases
  function findMedian(arr) {
    const sorted = arr.slice().sort((a, b) => {
      return a - b;
    });
    //if even numbered array
    if (sorted.length % 2 === 0) {
      const first = sorted[sorted.length / 2 - 1];
      const second = sorted[sorted.length / 2];
      return (first + second) / 2;
    }
    //simply select middle number
    else {
      const mid = Math.floor(sorted.length / 2);
      return sorted[mid];
    }
  }

  export { setConditionalMaxYProp, findBoxPlotParams } ;
  