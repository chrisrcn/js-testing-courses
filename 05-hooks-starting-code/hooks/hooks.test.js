import { it, expect, afterEach, beforeEach, beforeAll, afterAll } from 'vitest';
import { User } from './hooks.js';

/**
 * it.concurrent can allow to run a test in parallel of the other ones if this one is taking
 * a certain amount of time. It's allowing to speed up the test runnings.
 */

const testEmail = 'test@test.com';
let user;

beforeAll(() => {
  user = new User(testEmail);
})

beforeEach(() => {
  console.log('beforeEach')
});

// also work to clear the email beforeEach test
afterEach(() => {
  user = new User(testEmail);
})

afterAll(() => {
  console.log('afterAll')
  // to erase a db / data from a db or something similar
});

it('should update the email', () => {
  const newTestEmail = 'test2@test.com';
  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();
  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();
  expect(user).toHaveProperty('email');
});
