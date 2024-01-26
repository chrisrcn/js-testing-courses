import {it, expect} from 'vitest';
import {add} from "./math";

// We can use it or test --> Both do the same
/** Using AAA Pattern
 * A Arrange - Define the environment & values
 * A Act - Run the actual code / function that should be tested
 * A Assert - Evaluate the produced value / result and compare it to the expected value / result
**/

 it('should summarize all number values in an array', () => {
     // Arrange
     const numbers = [1,2,3];
     // Act
     const result = add(numbers);
     // Assert
     const expectedResult = numbers.reduce(
         (previousValue, currentValue) => previousValue + currentValue, 0
     );
     expect(result).toBe(expectedResult)
});

 it('should yield NaN if at least one invalid number is provided', () => {
     const inputs = ['invalid', 1];
     const result = add(inputs);
     expect(result).toBeNaN();
 });

it("should yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ['1', '2', '3'];
    const result = add(numbers);
    const expectedResult = numbers.reduce(
        (previousValue, currentValue) => +previousValue + +currentValue, 0
    );
    expect(result).toBe(expectedResult)
});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
    const resultFunction = () => {
        add();
    };
    expect(resultFunction).toThrow();
});

it ('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFunction = () => {
        add(num1, num2);
    };

    expect(resultFunction).toThrow(/is not iterable/);
})