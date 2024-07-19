# 24 Hour Thermometer Challenge
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

## Goal

Using SpaceX's [open API](https://docs.spacexdata.com/ ), we want you to build a simple web app that is able to list Rocket Launches, along with the ability to click into a Launch for additional information on the rocket.

In the list, we would like to see the following for each launch:
    - The patch image
    - The name of the mission
    - The day/time that it was launched
    - The status of the launch (failed, successful, upcoming)

After tapping on a launch in the list, we would like to have a screen that shows the following information about the rocket
    - The rocket name
    - The rocket type
    - Whether it was reused or not

## Design Requirements

- The content should have a max width of 600px and scale down accordingly

### Launch List

- Launch Cell
  - mission name should have size 16 font, semibold, black
  - launch date should have size 14 font, medium, lightgrey
  - image should be 56x56
  - Display the provided [placeholder image](/spacex_logo_square.png) if there is no patch image
  - status should have size 14 font, bold, red if failed, green if success, blue if upcoming
  - have a 1px lightgrey border bottom with 10px padding

### Rocket Details

- rocket name should be size 18 font
- rocket type and whether its reused should be size 14 font lightgrey
- have a 1px lightgrey border with 10px padding
