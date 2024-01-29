import {it, expect, vi} from "vitest";
import {sendDataRequest} from "./http";
import {HttpError} from "./errors";

const testResponseData = {testKey: 'testData'};

/**
 * Use vi.mock('axios') if using axios on the frontend.
 * Providing a __mocks__/axios.js file .
 */

const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
            return reject('Not a string');
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                })
            }
        }
        resolve(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);
it ('should return any available response data', () => {
    const testData = {key : 'test'};
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
    const testData = {key : 'test'};
    let errorMsg = '';
    try {
        await sendDataRequest(testData)
    } catch (error) {
        errorMsg = error;
    }
    return expect(errorMsg).not.toBe('Not a string');
});

it('should throw an HttpError in case of non-ok response', () => {
    testFetch.mockImplementationOnce((url, options) => {
        return new Promise((resolve, reject) => {
            if (typeof options.body !== 'string') {
                return reject('Not a string');
            }
            const testResponse = {
                ok: false,
                json() {
                    return new Promise((resolve, reject) => {
                        resolve(testResponseData);
                    })
                }
            }
            resolve(testResponse);
        });
    });
    const testData = {key : 'test'};
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);

})