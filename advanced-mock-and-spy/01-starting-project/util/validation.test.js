import { it, expect } from 'vitest';
import {validateNotEmpty} from "./validation";

it('should throw an error if text is empty', () => {
    const text = '';
    const resultFunction = () => {
        validateNotEmpty(text);
    };
    expect(resultFunction).toThrow();
});

it ('should throw an error if text contains just spaces', () => {
    const text = '   ';
    const resultFunction = () => {
        validateNotEmpty(text);
    };
    expect(resultFunction).toThrow();
});

it('should throw an error with the provided Error Message', () => {
    const text = '';
    const errorMessage = 'Test';
    const resultFunction = () => {
        validateNotEmpty(text, errorMessage);
    };
    expect(resultFunction).toThrow(errorMessage);
});

it ('should throw an error if text is not a string', () => {
    const textNumber = 1;
    const textBool = true;

    const resultFunctionNumber = () => {
        validateNotEmpty(textNumber);
    };
    const resultFunctionBool = () => {
        validateNotEmpty(textBool);
    };
    expect(resultFunctionNumber).toThrow();
    expect(resultFunctionBool).toThrow();
})

it('should not throw an error if text has a value', () => {
    const text = 'Valid';
    const resultFunction = () => {
        validateNotEmpty(text)
    }
    expect(resultFunction).not.toThrow();
})