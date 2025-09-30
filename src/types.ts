// Existing types
export enum ConnectionMethod {
  VR = 'VR',
  IRL = 'IRL',
  Online = 'Online',
}

// Enhanced RSVP Data interface with eventId reference
export interface RsvpData {
  id?: string;
  eventId: string;
  name: string;
  email: string;
  connectionMethod: ConnectionMethod | null;
  submittedAt?: Date;
  reminderSent?: boolean;
}

// Game types enum
export enum GameType {
  RAINBOW_HOP = 'rainbow_hop',
  // Future game types can be added here
}

// Event interface
export interface Event {
  id: string;
  title: string;
  description?: string;
  datetime: Date;
  createdBy: string; // User email
  createdAt: Date;
  updatedAt: Date;
  logoUrl?: string;
  gameType: GameType;
  isActive: boolean;
}

// User interface for authentication
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  domain: string;
  lastLogin: Date;
}

// Validation error type
export interface ValidationError {
  field: string;
  message: string;
}

export type ValidationResult = {
  isValid: boolean;
  errors: ValidationError[];
};

// Event validation functions
export const validateEvent = (event: Partial<Event>): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!event.title || event.title.trim().length === 0) {
    errors.push({ field: 'title', message: 'Event title is required' });
  } else if (event.title.trim().length > 100) {
    errors.push({ field: 'title', message: 'Event title must be 100 characters or less' });
  }

  if (!event.datetime) {
    errors.push({ field: 'datetime', message: 'Event date and time is required' });
  } else if (new Date(event.datetime) <= new Date()) {
    errors.push({ field: 'datetime', message: 'Event date must be in the future' });
  }

  if (!event.createdBy || !isValidEmail(event.createdBy)) {
    errors.push({ field: 'createdBy', message: 'Valid creator email is required' });
  }

  if (event.description && event.description.length > 500) {
    errors.push({ field: 'description', message: 'Event description must be 500 characters or less' });
  }

  if (event.gameType && !Object.values(GameType).includes(event.gameType)) {
    errors.push({ field: 'gameType', message: 'Invalid game type selected' });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// RSVP validation functions
export const validateRsvpData = (rsvp: Partial<RsvpData>): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!rsvp.name || rsvp.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (rsvp.name.trim().length > 50) {
    errors.push({ field: 'name', message: 'Name must be 50 characters or less' });
  }

  if (!rsvp.email || !isValidEmail(rsvp.email)) {
    errors.push({ field: 'email', message: 'Valid email address is required' });
  }

  if (!rsvp.eventId || rsvp.eventId.trim().length === 0) {
    errors.push({ field: 'eventId', message: 'Event ID is required' });
  }

  if (rsvp.connectionMethod === null || rsvp.connectionMethod === undefined) {
    errors.push({ field: 'connectionMethod', message: 'Connection method is required' });
  } else if (!Object.values(ConnectionMethod).includes(rsvp.connectionMethod)) {
    errors.push({ field: 'connectionMethod', message: 'Invalid connection method selected' });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// User validation functions
export const validateUser = (user: Partial<User>): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!user.uid || user.uid.trim().length === 0) {
    errors.push({ field: 'uid', message: 'User ID is required' });
  }

  if (!user.email || !isValidEmail(user.email)) {
    errors.push({ field: 'email', message: 'Valid email address is required' });
  }

  if (!user.domain || user.domain.trim().length === 0) {
    errors.push({ field: 'domain', message: 'Email domain is required' });
  }

  if (user.displayName && user.displayName.length > 100) {
    errors.push({ field: 'displayName', message: 'Display name must be 100 characters or less' });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Helper validation functions
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidSodaworldEmail = (email: string): boolean => {
  return isValidEmail(email) && email.toLowerCase().endsWith('@sodaworld.tv');
};

export const isValidImageFile = (file: File): boolean => {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  return allowedTypes.includes(file.type) && file.size <= maxSize;
};

// Game type validation
export const validateGameType = (gameType: string): boolean => {
  return Object.values(GameType).includes(gameType as GameType);
};

// Type guards for runtime type checking
export const isEvent = (obj: any): obj is Event => {
  return obj && 
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    obj.datetime instanceof Date &&
    typeof obj.createdBy === 'string' &&
    obj.createdAt instanceof Date &&
    obj.updatedAt instanceof Date &&
    Object.values(GameType).includes(obj.gameType) &&
    typeof obj.isActive === 'boolean';
};

export const isRsvpData = (obj: any): obj is RsvpData => {
  return obj &&
    typeof obj.eventId === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.email === 'string' &&
    Object.values(ConnectionMethod).includes(obj.connectionMethod);
};

export const isUser = (obj: any): obj is User => {
  return obj &&
    typeof obj.uid === 'string' &&
    typeof obj.email === 'string' &&
    typeof obj.domain === 'string' &&
    obj.lastLogin instanceof Date;
};

// Service interfaces
export interface AuthService {
  signInWithGoogle(): Promise<User>;
  signOut(): Promise<void>;
  getCurrentUser(): User | null;
  isAuthorized(user: User): boolean;
  onAuthStateChanged(callback: (user: User | null) => void): () => void;
}

export interface EventService {
  createEvent(event: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<Event>;
  getEventsByUser(userEmail: string): Promise<Event[]>;
  getEventById(id: string): Promise<Event | null>;
  getActiveEvents(): Promise<Event[]>;
  getEventsForReminders(): Promise<Event[]>;
  updateEvent(id: string, updates: Partial<Event>): Promise<void>;
  deleteEvent(id: string): Promise<void>;
  uploadEventLogo(file: File): Promise<string>;
}

export interface RsvpService {
  submitRsvp(rsvp: Omit<RsvpData, 'id' | 'submittedAt'>): Promise<void>;
  getRsvpsByEvent(eventId: string): Promise<RsvpData[]>;
  getRsvpsByEmail(email: string): Promise<RsvpData[]>;
  getRsvpsNeedingReminders(eventId: string): Promise<RsvpData[]>;
  markReminderSent(rsvpIds: string[]): Promise<void>;
}

export interface EmailPayload {
  to: string[];
  subject: string;
  html: string;
  from?: string;
}

export interface EmailService {
  sendRsvpConfirmation(rsvp: RsvpData, event: Event): Promise<void>;
  sendOrganizerNotification(rsvp: RsvpData, event: Event): Promise<void>;
  sendEventReminder(recipients: string[], event: Event): Promise<void>;
}