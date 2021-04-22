## BOXPLOT DOCS

# 1 - USAGE

This file is designed to produce boxplot charts using the Highcharts library - it is written in vanilla JS.

There are two types of chart catered for - unit tests and item scores. These are generated and selected automatically depending on the data frame that is inputted.

The code is dynamic and caters for n number of unit test cases (and therefore n number of charts) whilst the item score caters for only one chart but n number of items.

Buttons and sliders are used to show different factors and features of the data. There are a limited number of permutations and so the data is built and stored in a cache style object meaning faster rendering of the data even for larger data sets.

# 2 - CONSTRAINTS & REQUIREMENTS
Data and global variables

The dataframe must be in the following format for unit tests (nested arrays):

const rawDataFrame = [
  ["user343", 5.5, 2,   55,     0, 0, 1, 1, 1, NaN, 1],
  ["user213", 8.1, 1.5, 34,     1, 1, null, undefined, 1, 1, 1],
  ["user3",   3.2, 3,   77,     1, 0, 0, 1, 1, 1, 1]
]

column[0] = string user name
columns[1/2/3] = y axis property
columns[4 to n] = data - will handle any number of factors

*NaN, null, undefined are required for empty results per factor/unit test

The dataframe for item scores must be in the folowing format (nested arrays):

["user343", 5.5, 2, 55, 0]
It is similar to unit tests except that there can only be 5 columns - the final column representing the factor.

The global variable 'rawDataFrame' is used to select the dataset.

Optional data includes data relating to the signed in user. Depending on the graph type shown the programme will look for data here and show it if available. 

const signedInUser = {
  userUnitTests: ["user373", 6.7, 9, 88, 0, 0, 0, 0, 0, 1, 1],
  itemData: [
    ["user373", 6.7, 9, 88, 3],
    ["user373", 6.7, 9, 88, 3],
    ["user373", 6.7, 9, 88, 1],
    ["user373", 6.7, 9, 88, 4],
  ],
};

Global variables.....
Chart set up - these are to enable a first render of the data. They are selected conditionally.

const jitter = 0.14; // Exact fit for box plot's groupPadding and pointPadding
const yTitle = ["Skill score", "Experience (years)", "% correct"];
const xTitle = ["Unit tests", "Item score Categories"];
const unitTests = ["Failed", "Passed"];
const itemScoreCategories - list of strings
const unitTestNames - list of strings

// 1 = skill, 2 = experience, 3 = % correct
let yProp = 1; 

let scatterData = false;

//this global is updated on load by a detection function - 
// unit tests = true , item score  = false
let datasetType = null;

# 3 - DATA FLOW
A description of the order of data build

1 - build cache
2 - set chart type
3 - build dom nodes
4 - build and load charts

Building the cache uses:
buildDataFrames() -> buildMatrix()

# 4 - MODULE DESCRIPTIONS

HTML
There are three main buttons which select the y value for all charts.
Also a slider enables a scatter plot overlay of individual data points.
One 'grid-container' div is present which the charts (as child nodes) are attached to.

CSS
Styling per n number of unit tests and n number of charts is enabled with this selector: [id^="container"] 

The button section and charts are all fully responsive and the page is usable on mobile devices.

JAVASCRIPT MODULES
* A short list / description of each function
** Order here matches code ordering

A - DETECTION
unitTestDetection(dataset) - sets global var of datsetType (boolean)
signedInUserData() - sets either item score or unit test data for signed in user

B - DATA PROCESSING
selectPropAndScore(dataset, yprop, testcase) - y value selector
findUniqueFactors(data) 
seperateData(data) 
findMatch(factor, data) - group by factor
findNumbTests(dataset) - number of unit tests

C -BOX PLOT MATH

findBoxPlotParams(data) - master function for the following
findMinWhisker(upper, lower)
findMaxWhisker(upper, lower)
setConditionalMaxYProp()
getPercentile(data, percentile) 
findMedian(arr)

D - BUILD DATA + DOM NODES

buildMatrix(dataset, yprop, testcase)
buildScatterData(df)
createDiv(id)

E - CHART BUILD

buildChart(dataList)
getAxisTitles(stringid)
scatterToggle(chart)
findAxisMax()
buildSingleUserData()
userItemScoreBuild(results)
addYPropToSingle(newdata, original)
addSingleData(id, chart)
insertToChart(data, chart)
createChart(id, data)
createChartItemScore(id, data)

F - UPDATE STATE

setState(df, yProp)
updateY(val) 
scatterEvent()

G - BUILD DATAFRAMES

buildDataFrames(data, yprop)
buildInitial(list)


H - UNIT TESTS

propTest(dataset, yprop, testcase)
signedInUserCheck() 

I - INIT ON LOAD

const dataList = buildDataFrames(rawDataFrame, yProp);
buildInitial(dataList);


# 4 - FUTURE / TODO's

refactor cache - build on page load - use an asncy function 
-consider removing columns per request

test:...................................
    different number of item scores 
    add feature to buildMatrix to handle a [0] string row of titles
    write tests for empty or incorrect arrays - looks like this works ok - skips over in df build - unique set
    run on page load - create flag to turn test on on or off
    no restrictions on factor item score inputs

notes...................................

* no switch for usr data - they will always want to see it as a priority and it can be switched off view in per graph legend



