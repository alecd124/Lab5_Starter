// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// testing phone #'s 
test('isPhoneNumber: true cases', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber: false cases', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// testing emaisl 
test('isEmail: true cases', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('user@site.org')).toBe(true);
});
test('isEmail: false cases', () => {
  expect(isEmail('invalid@com')).toBe(false);
  expect(isEmail('nosymbol.com')).toBe(false);
});

// testing passwords 
test('isStrongPassword: true cases', () => {
  expect(isStrongPassword('abc123')).toBe(true);
  expect(isStrongPassword('GoodPwd9')).toBe(true);
});
test('isStrongPassword: false cases', () => {
  expect(isStrongPassword('12')).toBe(false);
  expect(isStrongPassword('$$')).toBe(false);
});

// testing date 
test('isDate: true cases', () => {
  expect(isDate('12/25/2023')).toBe(true);
  expect(isDate('01/01/2000')).toBe(true);
});
test('isDate: false cases', () => {
  expect(isDate('12-25-2023')).toBe(false);
  expect(isDate('2023-12-25')).toBe(false); 
});

// testing hex color 
test('isHexColor: true cases', () => {
  expect(isHexColor('#FFF')).toBe(true);
  expect(isHexColor('#123abc')).toBe(true);
});
test('isHexColor: false cases', () => {
  expect(isHexColor('12345')).toBe(false);
  expect(isHexColor('#xyz')).toBe(false);
});

