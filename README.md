# What is it

This project is a little personal template that I'm using time to time.

This version of the boilerplate is still in beta. Contribution from the community, either through PRs is welcome.

# Usage

## How to run the server

During development, the project can be run in two different ways.

If you want to just run the application in development mode, use the following command:

```sh
$ npm run start:dev
```

To run the application in watch mode in a way that the app will reload on save, use:

```sh
$ npm run start:watch
```

## Tests

The boilerplate is prepared to run tests using Mocha and Testcafe. To run the tests use the following command:

*Mocha tests*
```sh
$ npm test
```

*Testcafe tests*
```sh
$ npm run test-e2e
```

## Logging

- [Morgan](https://www.npmjs.com/package/morgan) for effective and high performance logging.

## Going to production

- Build the application with `npm run build`
- Define any environment variable important for production
- Start the app with `npm start`
