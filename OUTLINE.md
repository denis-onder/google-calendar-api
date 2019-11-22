**Requirements:**
- Allow users to log in using Google OAuth
- Pull Google Calendar events from the user
- Render the events in the form of a list

**Approach:**
1. Create a Node server on top of Express
2. Set up a REST API to handle authentication and retrieve events from the calendar
3. Pass the events from the back-end to the view, and render them as a list