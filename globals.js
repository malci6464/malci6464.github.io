
// yProp - 1 = skill, 2 = experience, 3 = % correct
// unitTestDataBool = datset type - itemdata = false

let cachedData = {
  skill: null,
  experience: null,
  percentage: null,
};

let appState = {
    unitTestDataBool : true,
    scatterData: false, 
    category: 1
}

export { cachedData, appState };