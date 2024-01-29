import { ValidationError } from './errors.js';

export function validateNotEmpty(text, errorMessage) {
  if (!text || text.trim().length === 0 || typeof text !== "string") {
    throw new ValidationError(errorMessage);
  }
}

export function validateFormObject(form, errorMessage) {
  if (form === 'undefined' || form === {}) {
    throw new ValidationError(errorMessage);
  }
}