import {describe, it, expect, vi } from "vitest";
import {generateReportData} from "./data.js";

describe('generateReportData()', () => {
    it('should execute logFn if provided', () => {

        // vi.fn() is a spy
        const logger = vi.fn();

        // Replace an empty function like just above
        //logger.mockImplementation(() => {});
        generateReportData(logger);

        expect(logger).toBeCalled();
    });
})