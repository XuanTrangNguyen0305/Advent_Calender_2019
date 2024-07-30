// Import the 'fs' module to work with file system
import * as fs from "fs";

// Read the contents of the 'inputs.txt' file
let fileContent = fs.readFileSync("inputs.txt", "utf8");

// Split the content by new lines and convert each line to an integer
const inputs = fileContent.split("\n").map((line) => parseInt(line, 10));

// Function to calculate the fuel requirement
const calculation = (num: number): number => {
  return Math.floor(num / 3) - 2;
};

// Apply the calculation function to each number in the array
for (let i = 0; i < inputs.length; i++) {
  inputs[i] = calculation(inputs[i]);
}

// Function to calculate the sum of an array of numbers
const sum = (nums: number[]): number => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
};

// Output the total sum of all results to the terminal
console.log(sum(inputs));
