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
  updateEvent(id: string, updates: Partial<Event>): Promise<void>;
  deleteEvent(id: string): Promise<void>;
  uploadEventLogo(file: File): Promise<string>;
}

export interface RsvpService {
  submitRsvp(rsvp: Omit<RsvpData, 'id' | 'submittedAt'>): Promise<void>;
  getRsvpsByEvent(eventId: string): Promise<RsvpData[]>;
  getRsvpsByEmail(email: string): Promise<RsvpData[]>;
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