# currency-transactions-app
Appliaction bootstrapped with [Create React App](https://github.com/facebook/create-react-app), simulating carrying out currency transactions. 


## Table of contents
* [About the app](#about-the-app)
* [Technologies](#technologies)
* [Getting Started](#getting-started)
* [Road to next versions](#road-to-version-2)


## About the app
The project was created as a recruitment task based on React technology. For management of application's state React-Redux was used. As a result, the following functionalities below are enabled:
* displaying and defining currency converter - when updating currency converter, all transactions are automatically converted,
* listing transactions,
* adding transactions,
* removing transactions,
* displaying the sum of all transactions,
* displaying maximum transaction (or transactions) with the largest amount - it is acceptable to be more then one transaction with the same max amount.


## Technologies
Project created with:
* React,
* Redux,
* Bootstrap - version 4.


## Getting Started
To run this project, install it locally using npm:

```
 $ cd currency-transactions-app
 $ npm install
```
and then start the app in development mode:

```
 $ npm start
```
The application should open automatically in the browser on http://localhost:3000/.


## Road to next versions
TODOs for future development:
- v1.1.0 -> write unit tests for components,
- v1.1.1 -> add RWD for smaller devices.