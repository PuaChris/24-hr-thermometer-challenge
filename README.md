# SpaceX Launch Dashboard
- Language: TypeScript
- Framework: React (Create React App)
- Libraries: 
  - Moment.js
  - react-router-dom

In the project directory, you can run: 
1. `npm install` or `yarn install`
2. `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Description 
Using SpaceX's [open API](https://docs.spacexdata.com/ ), I built a simple web app that is able to list Rocket Launches, along with the ability to click into a Launch for additional information on the rocket.

The following information is displayed for each launch:
    - The patch image
    - The name of the mission
    - The day/time that it was launched
    - The status of the launch (failed, successful, upcoming)

After tapping on a launch in the list, a screen appears that shows the following information about the rocket
    - The rocket name
    - The rocket type
    - Whether it was reused or not
