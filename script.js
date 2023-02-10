"use strict";

//PROBLEM 1
//We work for a company building a smart home thermometre.
//Our most recent task is this:
//"Given an array of temperatures of one day, calculate the temperature amplitude"
//"Keep in mind that sometimes there might be a sensor error"

//Solution
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//
// i)     What is a temperature amplitude
//        Ans: Difference between highest and lowest temperature
// ii)    How to calculate amplitude (highest and lowest)
// iii)   What is a sensor error? And what to do ?

// 2) Breaking up into sub-problems
//
// i)     How to ignore error
// ii)    Find max value in temp array
// iii)   Find min value in temp array
// iv)    Subtract min value from max value (amplitude) and return it

//SOLUTION

//Function to calculate the amplitude
const calcTempAmplitude = (temp) => {
  let max = temp[0]; //the values for the temp argument starting at 0
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    //A loop to loop through the values in temp (an array)
      if (typeof temp[i] !== "number") continue

    if (temp[i] > max) max = temp[i];
    if (temp[i] < min) min = temp[i];
  }
    console.log(max, min);
    return max - min
};
console.log(calcTempAmplitude(temperature));

//PROBLEM 2
//The function should recieve two arrays of temperatures. The rest of the function should work the same

// 1) Understanding the problem
//
// i)     With 2 arrays, should we implement the same functionality twice? No, just merge the 2
//        Ans: Difference between highest and lowest temperature

// 2) Breaking up into sub-problems
//
// i)     Merge 2 arrays

const calcTempAmplitudeNew = (temp1, temp2) => {
    const temps = temp1.concat(temp2)
    console.log(temps)

  let max = temps[0]; //the values for the temp argument starting at 0
  let min = temps[0];
    
  for (let i = 0; i < temps.length; i++) {
    //A loop to loop through the values in temp (an array)
    if (typeof temps[i] !== "number") continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([2, 4, 3], [4, 6, 1]);
console.log(amplitudeNew)
