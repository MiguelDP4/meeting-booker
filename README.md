# Conference Room Booking Application
This project simulates a conference room booking application from a ficticious company who owns a building. The employees have accounts which can book a conference room at certain hour and day, and their bookings are saved in the system. Each user can create as many bookings as they like, but only the owner of the booking can delete the booking. This projects makes use of an external API created by me, you can find it's repositofy [here](https://github.com/MiguelDP4/meeting-booker-api).

Important note:
There's 20 default users saved in the API. To log in and test the application, simply use one of the 20 default usernames. The default usernames are called tester, plus their user id. For example:

- 'tester1'
- 'tester2'
- 'tester3'
- 'tester4'

The password for all of them is 'asdfasdf'

## Built With:

- Javascript
- React
- Redux

## Author

👤 **Miguel Dubois**

- Github: [@MiguelDP4](https://github.com/MiguelDP4)
- Twitter: [@Mike_DP4](https://twitter.com/Mike_DP4)
- LinkedIn [Miguel Dubois](https://www.linkedin.com/in/miguel-angel-dubois)

## Features

- The user can log-in using their username and password.
- The user can create a booking to book a meeting room at their preferred time and date.
- The user can check existing bookings.
- The user can search existing bookings by date and room number.
- The user can delete only their own bookings.

## Planned future features

- Secure log-in.
- Use cookies to keep user logged-in.
- Make an admin account to be able to delete anyone's booking.
- Prevent meeting overlap.

## Live Demo

You can check a demo version of the project in [this link](https://meeting-booker.herokuapp.com/).

![screenshot1](./screenshot.png)

# 🤝 Contributing

This project is for learning purposes only, I wont accept contributions, though suggestions are welcome.

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- I'm thankful to Microverse for the opportunity to learn.
- Thank you to Murat Korkmaz, the author of the user interface, you can check it in [this link](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign)

## Running the program
To run the application, you need to run the command 

### `npm run dev`

This runs the application in development mode. In this mode, you can open [http://localhost:3000](http://localhost:3000) to view it in the browser and the page will reload automatically if you make changes to the code.

To run the tests of the application you can run

### `npm test`

Which will launch the test runner in the interactive watch mode. 

### `npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.