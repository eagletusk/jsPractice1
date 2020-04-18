function assertArraysEqual(actual, expected, testName) {
  // your code here
  let flag = true; 
  if (actual.length === expected.length){
    for (let i =0; i<actual.length; i++){
      if (actual[i]===expected[i]) { flag = true}
      else {flag = false}    
    }
  } else {flag = false}
  if (flag === true) console.log('passed');
  else{
    const actstr = actual.toString();
    const expstr = expected.toString();
    console.log('FAILED [' + testName + '] Expected "' + expstr + '", but got "'  + actstr + '"');}
}


// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// assertArraysEqual(actual, expected, 'splits string into array of characters');
// // passed

