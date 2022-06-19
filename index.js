function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let startPoint = 0;                startPoint < array.length;   startPoint++)
  for(let currentPoint = startPoint + 1; currentPoint < array.length; currentPoint++)

  if(array[startPoint] + array[currentPoint] === target) return true
  

  return false
}

/* 
  Write the Big O time complexity of your function here
  time complexity : O(n)

*/

/* 
  Add your pseudocode here

  startpoint is equal to 0, startpoint < array.length; startpoint ++
  currentpoint is equal to startpoint + 1; currentpoint < array.length; currebtpoint ++
  if array[startpoint]+ array[currentpoint] === target
  return startpoint + curentpoint

*/

/*
  Add written explanation of your solution here
if two nums in an array are added not doubled they equal target
start point and current point
start point + current  point === target
return target



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
