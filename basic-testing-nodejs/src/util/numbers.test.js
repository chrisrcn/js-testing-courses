import {it, expect} from 'vitest';
import {transformToNumber} from "./numbers";

it('should transform the string number to a number of type number', () => {
    const value = '1';
    const result = transformToNumber(value);
    const expectedValue = 1;
    expect(result).toBe(expectedValue);
});

// Close to be the same test
it('should be a number if a string number is provided', () => {
    const value = '1';
    const result = transformToNumber(value);
    expect(result).toBeTypeOf('number');
});

it('should yield NaN if a string or an object is provided', () => {
    const value = 'blabla';
    const value2 = {};
    const result = transformToNumber(value);
    const result2 = transformToNumber(value2);
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});

