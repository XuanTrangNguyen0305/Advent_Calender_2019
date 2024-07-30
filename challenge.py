import math

# Open the 'inputs.txt' file for reading
InputFromFile = open("./inputs.txt", "r")

# Initialize an empty list to store the numbers
Inputs = []

# Initialize the variable to accumulate the total sum of results
Sum = 0

# Read each line from the file, strip whitespace, and convert to an integer
for line in InputFromFile:
    Inputs.append(int(line.strip()))

# Function to calculate the fuel requirement


def Equation(x):
    num = math.floor(x / 3) - 2
    return num


# Calculate the total of all results by applying the calculation function
for x in Inputs:
    Sum += Equation(x)

# Print the total sum to the terminal
print(Sum)
