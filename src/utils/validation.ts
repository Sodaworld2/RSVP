// Validation utilities for forms and data

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Enhanced validation utilities
export class FormValidator {
  private errors: ValidationError[] = [];

  constructor() {
    this.errors = [];
  }

  // Add validation error
  private addError(field: string, message: string): void {
    this.errors.push({ field, message });
  }

  // Clear all errors
  clear(): void {
    this.errors = [];
  }

  // Get validation result
  getResult(): ValidationResult {
    return {
      isValid: this.errors.length === 0,
      errors: [...this.errors]
    };
  }

  // String validations
  required(value: string | null | undefined, field: string, customMessage?: string): this {
    if (!value || value.trim().length === 0) {
      this.addError(field, customMessage || `${field} is required`);
    }
    return this;
  }

  minLength(value: string, min: number, field: string, customMessage?: string): this {
    if (value && value.trim().length < min) {
      this.addError(field, customMessage || `${field} must be at least ${min} characters`);
    }
    return this;
  }

  maxLength(value: string, max: number, field: string, customMessage?: string): this {
    if (value && value.trim().length > max) {
      this.addError(field, customMessage || `${field} must be no more than ${max} characters`);
    }
    return this;
  }

  email(value: string, field: string = 'Email', customMessage?: string): this {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value && !emailRegex.test(value.trim())) {
      this.addError(field, customMessage || 'Please enter a valid email address');
    }
    return this;
  }

  domain(email: string, allowedDomain: string, field: string = 'Email', customMessage?: string): this {
    if (email && !email.toLowerCase().endsWith(`@${allowedDomain.toLowerCase()}`)) {
      this.addError(field, customMessage || `Email must be from ${allowedDomain}`);
    }
    return this;
  }

  // Date validations
  futureDate(date: Date | string, field: string, customMessage?: string): this {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();

    if (dateObj <= now) {
      this.addError(field, customMessage || `${field} must be in the future`);
    }
    return this;
  }

  validDate(date: Date | string, field: string, customMessage?: string): this {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) {
      this.addError(field, customMessage || `${field} must be a valid date`);
    }
    return this;
  }

  // File validations
  fileSize(file: File, maxSizeBytes: number, field: string, customMessage?: string): this {
    if (file && file.size > maxSizeBytes) {
      const maxSizeMB = (maxSizeBytes / (1024 * 1024)).toFixed(1);
      this.addError(field, customMessage || `${field} must be smaller than ${maxSizeMB}MB`);
    }
    return this;
  }

  fileType(file: File, allowedTypes: string[], field: string, customMessage?: string): this {
    if (file && !allowedTypes.includes(file.type)) {
      const typesText = allowedTypes.map(type => type.split('/')[1]).join(', ');
      this.addError(field, customMessage || `${field} must be one of: ${typesText}`);
    }
    return this;
  }

  // Custom validation
  custom(condition: boolean, field: string, message: string): this {
    if (!condition) {
      this.addError(field, message);
    }
    return this;
  }
}

// Legacy validation functions (kept for backward compatibility)
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type);
};

export const validateFileSize = (file: File, maxSizeInMB: number): boolean => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

export const validateSodaworldDomain = (email: string): boolean => {
  return email.endsWith('@sodaworld.tv');
};

// Enhanced validation functions
export const validateRequiredField = (value: string | null | undefined, fieldName: string): string | null => {
  if (!value || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
};

export const validateEmailField = (email: string): string | null => {
  if (!email) return null;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  return null;
};

export const validateLength = (value: string, min: number, max: number, fieldName: string): string | null => {
  if (!value) return null;

  const length = value.trim().length;
  if (length < min) {
    return `${fieldName} must be at least ${min} characters`;
  }
  if (length > max) {
    return `${fieldName} must be no more than ${max} characters`;
  }
  return null;
};

// Validation hook for React components
export const useFormValidation = () => {
  const validator = new FormValidator();

  return {
    validator,
    validate: (validationFn: (validator: FormValidator) => void): ValidationResult => {
      validator.clear();
      validationFn(validator);
      return validator.getResult();
    }
  };
};