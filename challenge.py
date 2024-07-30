import math
# import txt file to python 
inputFromFile = open("./inputs.txt", "r")
inputs = []
sum = 0

# split the content by whitespace
for line in inputFromFile:
    inputs.append(int(line.strip()))

# function to calculate the fuel 
def equation(x):
   num= math.floor(x/3) -2 
   return num

#calculate the total number all the results
for x in inputs:
   sum += equation(x)
   
#show to result in the terminal
print(sum)
