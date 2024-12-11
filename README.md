# JavaScript Function with Null and Undefined Handling Bug

This repository demonstrates a common JavaScript bug related to handling null and undefined values in function parameters. The bug is subtle and can lead to unexpected behavior.  The solution provides a more robust approach to addressing null and undefined values.

## Bug Description

The `foo` function adds two numbers.  It correctly handles `null` inputs.  However, it fails to correctly handle `undefined` inputs, leading to potential `NaN` (Not a Number) results in some situations.

## Solution

The improved solution uses stricter checks to identify and handle both `null` and `undefined` inputs, preventing unexpected `NaN` results.  Additionally, type checking could be added for more robust error handling.  See the `bugSolution.js` file for the improved implementation.