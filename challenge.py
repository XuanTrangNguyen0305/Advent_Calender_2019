# // Put inputs to an array
# // Write a loop to go through everynumber of the inputs
# // Write a function to calculate every inputs
# // Write a function to have a sum of all the inputs

import math
inputFromFile = open("./inputs.txt", "r")
inputs = []
sum = 0

for line in inputFromFile:
    inputs.append(int(line.strip()))

def equation(x):
   num= math.floor(x/3) -2 
   return num

for x in inputs:
   sum += equation(x)
   
print(sum)


# import math
# inputFromFile = open("./inputs.txt", "r")

# inputs = []

# for line in inputFromFile:
#     inputs.append(int(line.strip()))

# total = 0

# for x in inputs:
#     sum = x // 3
#     sum2 = math.floor(sum)
#     sum3 = sum2 - 2
#     total += sum3

# print(total)