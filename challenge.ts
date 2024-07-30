//import inputs.txt file to typescript
import * as fs from "fs";

//read the txt file
let fileContent = fs.readFileSync("inputs.txt", "utf8");

//split the content in inputs.txt by whitespace and parse the strings to intergers
const inputs = fileContent.split("\n").map((line) => parseInt(line, 10));

// //function to calculate the fuel
const calculation = (num: number) => {
  return Math.floor(num / 3) - 2;
};

//calculate by using the function above for each number
for (let i = 0; i < inputs.length; i++) {
  inputs[i] = calculation(inputs[i]);
}

//calculate the total number all the results
const sum = (nums: number[]): number => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
};

//show to result in the terminal
console.log(sum(inputs));
