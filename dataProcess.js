import { appState } from './globals'

//select columns from data set for [x,y] pair per user
function selectPropAndScore(dataset, testcase) {
    let newData = [];
    const propScore = dataset.map((each) =>
      newData.push([each[appState.category], each[testcase]])
    );
    return newData;
  }
  
  //list of unique elemetns/factors in data
  function findUniqueFactors(data) {
    let uniqueFactors = [];
    data.map((numb) => uniqueFactors.push(numb[1]));
    //example: [0,1]
    let uniqueSet = [...new Set(uniqueFactors)];
    let emptyVals = [null, NaN, undefined];
    //remove any 'emptyVals' from category build - forces exclusion from calculations
    let finalSet = uniqueSet.filter((each) => !emptyVals.includes(each));
    return finalSet;
  }
  
  //takes unique factors array
  //build a 2d array
  function seperateData(data) {
    let uniqueVal = findUniqueFactors(data);
    let unique2d = [];
    uniqueVal.map((factor) => unique2d.push(findMatch(factor, data)));
    return unique2d;
  }
  
  function findMatch(factor, data) {
    let yPropArr = [];
    data.map((el) => (el[1] === factor ? yPropArr.push(el[0]) : ""));
    return yPropArr;
  }
  
  function findNumbTests(dataset) {
    //assume length of each line is equal
    const length = dataset[0].length;
    //include [0] - userid
    const ypropNumb = 4;
    return length - ypropNumb;
  }

  export { selectPropAndScore, seperateData, findNumbTests }
  