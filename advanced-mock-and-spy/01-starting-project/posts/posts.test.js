import {describe, it, expect, beforeEach} from "vitest";
import {extractPostData} from "./posts";

const testTitle = 'Test title';
const testContent = 'Test content';
let testFormData;
describe('extractPostData()', () => {
    beforeEach(() => {
        testFormData = {
            title: testTitle,
            content: testContent,
            get(identifier) {
                return this[identifier]
            }
        };
    });

    it('should extract title and content from the provided form data', () => {
        const data = extractPostData(testFormData);
        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });

    it('should throw an error if an empty object is provided in the form', () => {
        const emptyObject = {};
        const resultFunction = () => {
            extractPostData(emptyObject)
        };
        expect(resultFunction).toThrow();
    });

    it('should receive strings from the form', () => {
        expect(testFormData.title).toBeTypeOf('string')
        expect(testFormData.content).toBeTypeOf('string')
    });

    it('should throw an error if invalid data are provided ', () => {
        const invalidDataTest = {
            title : 1,
            content: true,
        }

        const resultFunction = () => {
            extractPostData(invalidDataTest);
        }
        expect(resultFunction).toThrow()
    });
});