# Chandrayaan 3 TDD Assessment

This is a test-driven development (TDD) project for the Chandrayaan 3 lunar spacecraft navigation program. The program translates commands sent from Earth into instructions understood by the spacecraft to navigate through the galaxy using galactic coordinates.

## Requirements

The following functionalities are implemented in the program:

1. Move the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.
2. Turn the spacecraft left/right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.
3. Turn the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.

## Tools and Technologies Used

- **Node.js**: Node.js is a JavaScript runtime that allows us to run JavaScript code outside of the browser. It is used in this project to execute the spacecraft navigation program and run the test cases.
- **Jest**: Jest is a popular JavaScript testing framework. It is used for writing and running the test cases to ensure that the spacecraft navigation functions work as expected.
- **Istanbul (nyc)**: Istanbul, also known as `nyc`, is a code coverage tool. It works in conjunction with Jest to generate code coverage reports, helping us measure how much of the codebase is covered by the tests.

## Code Coverage and Testing Practices

In this project, I have used Istanbul (nyc) to measure code coverage, which is the percentage of code that is executed during the test run. While code coverage is a valuable metric to assess the extent of test coverage, it does not guarantee that the code is completely bug-free or well-tested.

It's important to keep in mind that code coverage is just one aspect of testing, and achieving 100% code coverage does not necessarily mean that all possible scenarios and edge cases have been tested. It's essential to combine code coverage with other testing practices to ensure the overall quality of your code
