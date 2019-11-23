# Calendar App

> Made with the Google Calendar API

### Scripts:

`npm run scss` - Compiles SCSS to CSS.

`npm run scss:watch` - Runs the SCSS compiler in watch mode.

`npm start` - Runs `npm run scss` and starts the Node server.

`npm run dev` - Runs `npm run scss` and starts the Node server in development mode using Nodemon.

### Environmental variables:

In the root directory, create a `.env` file in which your environmental variables will be held.
An example file (`example.env`) has been provided, which is located in the root directory of the project. In the `.env` file, important server configuration details and other keys will be held for easy management.

`example.env`

```env
PORT=
NODE_ENV=
CALENDAR_CLIENT_ID=
CALENDAR_API_KEY=
```

### Usage:

Before you attempt running this app in your own environment, you need to go ahead and create a Calendar API application on the Google API Console. 

> Click [here](https://developers.google.com/calendar/quickstart/js) to get started.

Once you have created your app by clicking on the `Enable the Google Calendar API` and `Create API key` buttons, copy and paste the keys you have gathered into their corresponding fields in the `.env` file.

```env
...
CALENDAR_CLIENT_ID=<YOUR_CLIENT_ID>
CALENDAR_API_KEY=<YOUR_API_KEY>
```

After that has been done, if you are planning to use a port that is different than `8000`, go back to the [Google API Console](https://console.developers.google.com/), select your application(should be named `Quickstart` by default), and add `http://localhost:<YOUR_PORT>` to the list of authorized URLs.

If you have not done that already, run `npm install` to install all the necessary dependencies, and after that is done, you can finally run `npm start` or `npm run dev` to start the application.

Navigating to `http://localhost:<YOUR_PORT>` will open the dashboard, from which you will be able to log in and see any upcoming events in your Google Calendar!