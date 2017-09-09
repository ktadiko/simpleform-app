# Simple Form App

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2+](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment

## Other tools
Used [Angular Material](https://material.angular.io/) design components for front-end.
The client was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.0.

## Instructions
* If using Unix, please edit package.json to include `"start": "ng serve; node server.js"`
* Make sure you run `mongod.exe` or approriate daemon before starting the app.
* Install dependencies by running `npm install`
* Run `npm start`
* Navigate to `http://localhost:4200/` for the client. The app will automatically reload if you change any of the source files. 
* The server is run at `http://localhost:3000/` after running `npm start`
* See `package.json` for more details

## Build
Run `npm build` to build the project

## Running unit tests
Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`