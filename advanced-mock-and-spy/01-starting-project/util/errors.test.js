import { it, expect, describe, vi } from 'vitest'
import {HttpError, ValidationError} from "./errors";

describe('class HttpError', () => {
    it('should match the values provided in the constructor when we target the properties of the object', () => {
        let statusCode = 400;
        let message = 'Error';
        let data = { someData: 'dfokdofkdo', someOtherData: 'eokfdokdsk', idSomeData: 1};

        const error = new HttpError(statusCode, message, data);
        expect(error.data).toBe(data);
        expect(error.statusCode).toBe(statusCode);
        expect(error.message).toBe(message);
    });

    it('should have the properties of the object', () => {
        const error = new HttpError();
        expect(error).toHaveProperty('statusCode');
        expect(error).toHaveProperty('message');
        expect(error).toHaveProperty('data');
    });

    it('should contain undefined as data if no data is provided', () => {
        let statusCode = 400;
        let message = 'Error';

        const error = new HttpError(statusCode, message);
        expect(error.data).toBe(undefined);
    })
});

describe('class ValidationError', () => {
    it('should match the value provided in the constructor when we target the propertie of the object', () => {
        let message = 'Error';
        const error = new ValidationError(message);
        expect(error.message).toBe(message);
    });

    it('should have the properties of the object', () => {
        const error = new ValidationError();
        expect(error).toHaveProperty('message');
    });
});

