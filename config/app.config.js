/* global module */

const AppConfig = {

  // Configure what gets generated
  // Each type can accept a Boolean or a string.
  //If a string is provided, that will be used as the output path.
  generate: {
    routeHandlers: true,
    swagger: true,
    tests: true,
    postman: true,
    requests: true,
    mocks: true
  }
};

module.exports = AppConfig;
