import {it, expect, describe} from 'vitest';
import {validateNumber, validateStringNotEmpty} from "./validation";

describe('validateStringNotEmpty function', () => {
    it('should throw an error if the provided string is empty', () => {
        const value = '';
        const resultFunction = () => {
            validateStringNotEmpty(value);
        }
        expect(resultFunction).toThrow(/Invalid input - must not be empty/);
    });

    it('should throw an error if the provided value is not a string', () => {
        const value = 1;
        const value2 = [];
        const resultFunction = () => {
            validateStringNotEmpty(value);
        }

        const resultFunction2 = () => {
            validateStringNotEmpty(value2);
        }
        expect(resultFunction).toThrow();
        expect(resultFunction2).toThrow();
    });

    it('should not throw an error if a string is provided', () => {
        const value = 'valid';
        const resultFunction = () => {
            validateStringNotEmpty(value);
        }
        expect(resultFunction).not.toThrow();
    });
});

describe('validateNumber function', () => {
    it('should throw an error if the provided value is not a number', () => {
        const value = 'invalid';
        const resultFunction = () => {
            validateNumber(value);
        }
        expect(resultFunction).toThrow(/Invalid number input/);
    });

    it('should throw an error if the provided value is a string number', () => {
        const value = '1';
        const resultFunction = () => {
            validateNumber(value);
        }
        expect(resultFunction).toThrow(/Invalid number input/);
    });

    it('should not throw an error if the a number is provided', () => {
        const value = 2;
        const resultFunction = () => {
            validateNumber(value);
        }
        expect(resultFunction).not.toThrow();
    });
});

