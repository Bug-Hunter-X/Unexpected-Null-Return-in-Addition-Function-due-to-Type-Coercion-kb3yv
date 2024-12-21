# Unexpected Null Return in JavaScript Addition Function

This repository demonstrates a subtle bug in a JavaScript addition function that can lead to unexpected null returns when dealing with type coercion and the values 0 and null. 

## Bug Description

The function `foo` is designed to add two numbers. However, the current implementation considers both `0` and `null` as falsy values and returns `null` if either input is falsy. This can cause problems when `0` is a valid input.

## Reproduction

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js (or a similar JavaScript runtime).
4. Observe the unexpected null output when either input is 0.

## Solution

The solution addresses the type coercion issue by explicitly checking for null values before performing the addition.

## Mitigation

To avoid this bug, use strict equality (`===`) when checking for null values and handle 0 appropriately based on your specific requirements.