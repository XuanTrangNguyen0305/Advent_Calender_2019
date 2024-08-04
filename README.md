# Advent Calendar 2019 - Day 1

## The Challenge

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module:

1. Take its mass.
2. Divide by three.
3. Round down.
4. Subtract 2.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

**Objective**: What is the sum of the fuel requirements for all the modules on your spacecraft?

## Solutions

I have implemented solutions in both TypeScript and Python.

### TypeScript Solution

- **File**: `challenge.ts`
- **Test Framework**: Jest

### Python Solution

- **File**: `challenge.py`
- **Test Framework**: Coming soon

## Getting Started

### Prerequisites

- **Node.js** (for TypeScript solution)
- **npm** (for package management)
- **Python** (for Python solution)

### Files

- `input.txt`: Contains the input mass values to start with the challenge.

### Running the Solutions

#### TypeScript

1. **Run the Challenge**: Use `npx` with `tsx` to execute the TypeScript solution.

   ```bash
   npx tsx challenge.ts
