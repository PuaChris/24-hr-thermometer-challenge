# Perpetua SpaceX Web Challenge
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

## Interviewee Notes:
- Omitted testing as it is not expected of me and would increase the amount of time for me to complete the challenge
- Omitted extra security checking for API usage + extra status checks and use cases
- Had a question about what is considered for a rocket to be "reused" (see `controller.ts, line 71` for more details)


# Official Challenge requirements below:

We provide our frontend engineering candidates a challenge to showcase their abilities by implementing a basic web application that requests information from a REST API. This is meant to demonstrate your knowledge of not only best practices for frontend development, but also your knowledge of javascript/typescript and the chosen framework.

## Rules

- Do not copy and paste solutions from the web if you encounter any, although using a search engine is perfectly fine.
- You should spend around 2 hours total on this challenge, however if it takes longer that's perfectly fine! We don't want you spending all of your free time on it however, so try and timebox yourself to less than 3 hours.
- Use any frontend framework you are familiar with. You're allowed to use tools such a create-react-app to bootstrap the project as well. Note: we use Typescript & React at Perpetua.
- Feel free to include any packages you feel help you with your solution. But you must be able to justify why you included them.

## Goal

Using SpaceX's [open API](https://docs.spacexdata.com/ ), we want you to build a simple web app that is able to list Rocket Launches, along with the ability to click into a Launch for additional information on the rocket. For reference, check out the included [video](solution.mov). Note that styles in the video may be slightly different from what is described below.

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

## Helpful Notes

We will be evaluating the code that you send back to us with you as well as executing it ourselves. 
Comments are not required, however you will be judged on your ability to write clean, well architected code. Keep that in mind while implementing your solution.

## When Completed...

Zip up the entire project and send it back to us. Please make sure it's simple for us to get the project running!