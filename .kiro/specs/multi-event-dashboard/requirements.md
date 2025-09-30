# Requirements Document

## Introduction

This feature expands the existing single-event RSVP system into a comprehensive multi-event platform with administrative capabilities. The system will support multiple events with individual RSVP tracking, an administrative dashboard for event management, automated email notifications, and Google authentication with domain restrictions. The expansion maintains the existing design aesthetic while adding robust event management functionality.

## Requirements

### Requirement 1

**User Story:** As an event organizer, I want to create and manage multiple events through a dashboard, so that I can efficiently organize various events without needing separate RSVP systems.

#### Acceptance Criteria

1. WHEN an authenticated sodaworld.tv user accesses the dashboard THEN the system SHALL display a list of all events they have created
2. WHEN a user clicks "Create New Event" THEN the system SHALL display a form with fields for title, logo/image upload, and datetime selection
3. WHEN a user submits a valid event creation form THEN the system SHALL save the event to the database and redirect to the event management view
4. WHEN a user views an individual event THEN the system SHALL display event details and a list of all RSVPs for that event
5. IF a user tries to access an event they didn't create THEN the system SHALL deny access and show an error message

### Requirement 2

**User Story:** As a potential attendee, I want to RSVP to specific events, so that I can register for events I'm interested in attending.

#### Acceptance Criteria

1. WHEN a user visits an event-specific RSVP URL THEN the system SHALL display the RSVP form with that event's details
2. WHEN a user submits an RSVP form THEN the system SHALL associate the RSVP with the specific event
3. WHEN an RSVP is submitted THEN the system SHALL store the attendee's name, email, connection method, and event association
4. IF an event doesn't exist THEN the system SHALL display a "Event not found" error page
5. WHEN a user tries to RSVP for a past event THEN the system SHALL display a message indicating RSVPs are closed

### Requirement 3

**User Story:** As an event organizer, I want to receive email notifications when someone RSVPs to my event, so that I can stay informed about attendance.

#### Acceptance Criteria

1. WHEN someone submits an RSVP THEN the system SHALL send an email to the event creator with attendee details
2. WHEN someone submits an RSVP THEN the system SHALL send a confirmation email to the attendee
3. WHEN the day before an event arrives THEN the system SHALL send reminder emails to all RSVPed attendees and the event organizer
4. IF the email API is unavailable THEN the system SHALL log the error but still process the RSVP
5. WHEN sending emails THEN the system SHALL use the external email API at https://sendemail-be5gtmizmq-uc.a.run.app

### Requirement 4

**User Story:** As a system administrator, I want to restrict dashboard access to sodaworld.tv email domains, so that only authorized personnel can manage events.

#### Acceptance Criteria

1. WHEN a user tries to access the dashboard THEN the system SHALL require Google authentication
2. WHEN a user authenticates with Google THEN the system SHALL check if their email domain is sodaworld.tv
3. IF a user's email domain is not sodaworld.tv THEN the system SHALL deny access and display an unauthorized message
4. WHEN an authorized user logs in THEN the system SHALL create or update their user session
5. WHEN a user logs out THEN the system SHALL clear their session and redirect to the login page

### Requirement 5

**User Story:** As an event organizer, I want the dashboard to follow the same design patterns as the RSVP page, so that the interface feels cohesive and familiar.

#### Acceptance Criteria

1. WHEN displaying the dashboard THEN the system SHALL use the same color scheme (purple background, yellow accents, white cards)
2. WHEN showing forms THEN the system SHALL use the same input styling and rounded corners as the RSVP form
3. WHEN displaying buttons THEN the system SHALL use the same yellow button styling with hover effects
4. WHEN showing event cards THEN the system SHALL use white rounded cards with shadow effects
5. WHEN displaying the dashboard on mobile THEN the system SHALL maintain responsive design principles from the existing RSVP page

### Requirement 6

**User Story:** As an event organizer, I want to customize event appearance with logos and images, so that each event can have its own visual identity.

#### Acceptance Criteria

1. WHEN creating an event THEN the system SHALL allow uploading an image file for the event logo
2. WHEN an image is uploaded THEN the system SHALL validate the file type (PNG, JPG, JPEG, GIF)
3. WHEN an image is uploaded THEN the system SHALL store the image securely and generate a URL
4. WHEN displaying an event RSVP page THEN the system SHALL show the custom logo instead of the default flyer
5. IF no custom logo is provided THEN the system SHALL use the default flyer design

### Requirement 7

**User Story:** As an event organizer, I want to configure which game appears after RSVP submission, so that each event can have an appropriate post-RSVP experience.

#### Acceptance Criteria

1. WHEN creating an event THEN the system SHALL allow selecting a game type from available options
2. WHEN an attendee completes an RSVP THEN the system SHALL display the game configured for that specific event
3. WHEN no game is selected THEN the system SHALL default to the Rainbow Hop game
4. WHEN displaying the game THEN the system SHALL fix any existing bugs in the current Rainbow Hop implementation
5. WHEN adding new game types THEN the system SHALL maintain the same interface pattern for consistent user experience

### Requirement 8

**User Story:** As a system user, I want the database to efficiently handle multiple events and their RSVPs, so that the system can scale with usage.

#### Acceptance Criteria

1. WHEN storing events THEN the system SHALL create a separate events collection with unique identifiers
2. WHEN storing RSVPs THEN the system SHALL reference the associated event ID
3. WHEN querying RSVPs THEN the system SHALL efficiently filter by event ID
4. WHEN deleting an event THEN the system SHALL handle associated RSVP cleanup appropriately
5. WHEN creating database indexes THEN the system SHALL optimize for common query patterns (event lookups, RSVP filtering)