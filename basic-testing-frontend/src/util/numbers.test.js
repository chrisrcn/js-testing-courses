import {describe, it, expect} from 'vitest';
import {cleanNumbers, transformToNumber} from "./numbers";


describe('transformToNumber()', () => {
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
});

/**
 * Integration test because cleanNumbers includes many called functions.
 */
describe('cleanNumbers()', () => {
    it('should return an array of numbers values if an array of string number values is provided', () => {
        const numbersValues = ['1', '2'];
        const cleanedNumbers = cleanNumbers(numbersValues)
        // expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1,2]);
        // We cannot use the method toBe() here because the compared arrayes occupies two different places in memory
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const numberValues = ['', '1'];
        const cleanFunction = () => { cleanNumbers(numberValues); }

        expect(cleanFunction).toThrow();
    });


})

