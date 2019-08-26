# Memory Book Frontend

The frontend of the Memory Book application by the synergetic blockchain solutions
team. For IT Project at the university of Melbourne

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Make sure node and npm are installed globally on your machine
cd into project direcorty

```
npm install
```

to install the node modules

```
npm start
```

to run the project locally in development mode

## Tests

### Running Tests:

In order to run all tests:

```
npm test
```

This will run the the linters, unit and integration tests

To run the unit tests:

```
npm run test:unit
```

To run the javacript linters:

```
npm run test:lint:js
```

To run the style linters 

```
npm run test:lint:css
```

### Notes On Testing: 

I left a file called testBoiler.txt in the root directory. This is to serve as a boiler plate for testing.
Simply copy and paste the code to get an intial setup for making a test, then import the file you are wanting 
to test and write the tests. 

The TestRoot is needed in order to provide the theme, global styles, get rid of the CacheBuster and set things 
up such that they will work in the testing environment. 

## Front-end Framework

The project is made with React check the docs at https://reactjs.org/docs/getting-started.html

## Styling 

The styling is done with styled-components check docs at https://www.styled-components.com/docs

## State Managment 

The state managment is done with redux check docs at https://redux.js.org/introduction/getting-started

## Deployment

Not Applicable at the moment 

## Authors

- **Joseph Arnaud**
- **My Tien Hinh**
- **Nick Spain**
- **Viraj**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
