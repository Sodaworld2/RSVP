import { describe, it, expect } from 'vitest';
import {
  FormValidator,
  validateRequiredField,
  validateEmailField,
  validateLength,
  useFormValidation
} from '../utils/validation';

describe('FormValidator', () => {
  describe('required validation', () => {
    it('should pass for valid values', () => {
      const validator = new FormValidator();
      const result = validator.required('test', 'field').getResult();
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should fail for empty values', () => {
      const validator = new FormValidator();
      const result = validator.required('', 'field').getResult();
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].field).toBe('field');
      expect(result.errors[0].message).toBe('field is required');
    });

    it('should fail for null/undefined values', () => {
      const validator = new FormValidator();
      const result1 = validator.required(null, 'field').getResult();
      const result2 = validator.required(undefined, 'field').getResult();

      expect(result1.isValid).toBe(false);
      expect(result2.isValid).toBe(false);
    });

    it('should use custom message', () => {
      const validator = new FormValidator();
      const result = validator.required('', 'field', 'Custom required message').getResult();
      expect(result.errors[0].message).toBe('Custom required message');
    });
  });

  describe('email validation', () => {
    it('should pass for valid emails', () => {
      const validator = new FormValidator();
      const result = validator.email('test@example.com', 'email').getResult();
      expect(result.isValid).toBe(true);
    });

    it('should fail for invalid emails', () => {
      const validator = new FormValidator();
      const result = validator.email('invalid-email', 'email').getResult();
      expect(result.isValid).toBe(false);
      expect(result.errors[0].message).toBe('Please enter a valid email address');
    });

    it('should pass for empty email (optional field)', () => {
      const validator = new FormValidator();
      const result = validator.email('', 'email').getResult();
      expect(result.isValid).toBe(true);
    });
  });

  describe('length validation', () => {
    it('should pass for valid length', () => {
      const validator = new FormValidator();
      const result = validator
        .minLength('hello', 3, 'field')
        .maxLength('hello', 10, 'field')
        .getResult();
      expect(result.isValid).toBe(true);
    });

    it('should fail for too short', () => {
      const validator = new FormValidator();
      const result = validator.minLength('hi', 5, 'field').getResult();
      expect(result.isValid).toBe(false);
      expect(result.errors[0].message).toBe('field must be at least 5 characters');
    });

    it('should fail for too long', () => {
      const validator = new FormValidator();
      const result = validator.maxLength('very long text', 5, 'field').getResult();
      expect(result.isValid).toBe(false);
      expect(result.errors[0].message).toBe('field must be no more than 5 characters');
    });
  });

  describe('date validation', () => {
    it('should pass for future dates', () => {
      const validator = new FormValidator();
      const futureDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // Tomorrow
      const result = validator.futureDate(futureDate, 'field').getResult();
      expect(result.isValid).toBe(true);
    });

    it('should fail for past dates', () => {
      const validator = new FormValidator();
      const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000); // Yesterday
      const result = validator.futureDate(pastDate, 'field').getResult();
      expect(result.isValid).toBe(false);
      expect(result.errors[0].message).toBe('field must be in the future');
    });

    it('should fail for invalid dates', () => {
      const validator = new FormValidator();
      const result = validator.validDate('invalid-date', 'field').getResult();
      expect(result.isValid).toBe(false);
      expect(result.errors[0].message).toBe('field must be a valid date');
    });
  });

  describe('file validation', () => {
    it('should pass for valid file size', () => {
      const validator = new FormValidator();
      const file = new File(['content'], 'test.txt', { type: 'text/plain' });
      const result = validator.fileSize(file, 1024 * 1024, 'field').getResult(); // 1MB limit
      expect(result.isValid).toBe(true);
    });

    it('should pass for valid file type', () => {
      const validator = new FormValidator();
      const file = new File(['content'], 'test.txt', { type: 'text/plain' });
      const result = validator.fileType(file, ['text/plain'], 'field').getResult();
      expect(result.isValid).toBe(true);
    });

    it('should fail for invalid file type', () => {
      const validator = new FormValidator();
      const file = new File(['content'], 'test.txt', { type: 'text/plain' });
      const result = validator.fileType(file, ['image/jpeg'], 'field').getResult();
      expect(result.isValid).toBe(false);
      expect(result.errors[0].message).toBe('field must be one of: jpeg');
    });
  });

  describe('custom validation', () => {
    it('should pass for true condition', () => {
      const validator = new FormValidator();
      const result = validator.custom(true, 'field', 'Custom error').getResult();
      expect(result.isValid).toBe(true);
    });

    it('should fail for false condition', () => {
      const validator = new FormValidator();
      const result = validator.custom(false, 'field', 'Custom error').getResult();
      expect(result.isValid).toBe(false);
      expect(result.errors[0].message).toBe('Custom error');
    });
  });

  describe('chaining validations', () => {
    it('should accumulate multiple errors', () => {
      const validator = new FormValidator();
      const result = validator
        .required('', 'name')
        .email('invalid', 'email')
        .minLength('hi', 5, 'password')
        .getResult();

      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(3);
      expect(result.errors.map(e => e.field)).toEqual(['name', 'email', 'password']);
    });

    it('should pass when all validations pass', () => {
      const validator = new FormValidator();
      const result = validator
        .required('John Doe', 'name')
        .email('john@example.com', 'email')
        .minLength('password123', 8, 'password')
        .getResult();

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });
});

describe('Validation Helper Functions', () => {
  describe('validateRequiredField', () => {
    it('should return null for valid values', () => {
      expect(validateRequiredField('test', 'field')).toBeNull();
    });

    it('should return error for empty values', () => {
      expect(validateRequiredField('', 'field')).toBe('field is required');
      expect(validateRequiredField(null, 'field')).toBe('field is required');
      expect(validateRequiredField(undefined, 'field')).toBe('field is required');
    });
  });

  describe('validateEmailField', () => {
    it('should return null for valid emails', () => {
      expect(validateEmailField('test@example.com')).toBeNull();
      expect(validateEmailField('')).toBeNull(); // Empty is considered valid (optional)
    });

    it('should return error for invalid emails', () => {
      expect(validateEmailField('invalid')).toBe('Please enter a valid email address');
      expect(validateEmailField('test@')).toBe('Please enter a valid email address');
      expect(validateEmailField('@example.com')).toBe('Please enter a valid email address');
    });
  });

  describe('validateLength', () => {
    it('should return null for valid lengths', () => {
      expect(validateLength('hello', 3, 10, 'field')).toBeNull();
      expect(validateLength('', 0, 10, 'field')).toBeNull(); // Empty string
    });

    it('should return error for invalid lengths', () => {
      expect(validateLength('hi', 5, 10, 'field')).toBe('field must be at least 5 characters');
      expect(validateLength('very long text here', 1, 10, 'field')).toBe('field must be no more than 10 characters');
    });
  });
});