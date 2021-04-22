/*MODULE - tests */

// todo: test that length of user data is equivalent to main data framw

function propTest(dataset, yprop, testcase) {
    //y props can only be index 1,2,3
    if (yprop < 1 && yprop > 3) {
      console.log("Y property selection issue");
      return Error;
    }
    // test cases can only b >=3 and <testCaseNumb
    let ypropLength = 4; //includes user string at [0]
    if (testcase < ypropLength && testcase > dataset[0].length) {
      console.log("Test case selection issue");
      return Error;
    }
  }
  
  //not essential
  function signedInUserCheck() {
    if (unitTestDataBool) {
      const result = signedInUser.userUnitTests.length > 0 ? true : false;
      return result;
    } else {
      const result = signedInUser.itemData.length > 0 ? true : false;
      return result;
    }
  }
  function bigDataCheck() {
    if (unitTestDataBool === true && rawDataFrame.length > 100) {
      //run async promise - lazy build in background
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    }
  }
  