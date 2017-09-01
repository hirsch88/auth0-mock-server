# auth0-mock-server

> This server helps you to simulate auth0 server locally. So, you are able to use the `/tokeninfo` endpoint to verify your token.

## Getting Started
### Prerequisites
* Install [Node.js](http://nodejs.org)
    * on OSX use [homebrew](http://brew.sh) `brew install node`
    * on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`


## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app
After you have installed all dependencies you can now run the app.
Run `npm start` to start a local server.
The port will be displayed to you as `http://0.0.0.0:3333` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3333/`).


## API Documentation

### `GET` /token/:username
Returns a token with the given user(username). This token can the be used by your application.

### `POST` /tokeninfo
Returns the data of the token like the username.

**Body**
```
{
    "id_token": "your-token-kjasdf6ashasl..."
}
```


## Related Projects
* [express-typescript-boilerplate](https://github.com/w3tecch/express-typescript-boilerplate) - Boilerplate for an restful express-apllication written in TypeScript
* [express-graphql-typescript-boilerplate](https://github.com/w3tecch/express-graphql-typescript-boilerplate) - A starter kit for building amazing GraphQL API's with TypeScript and express by @w3tecch


## License
[MIT](/LICENSE)


---
Made with ♥ by Gery Hirschfeld ([@GeryHirschfeld1](https://twitter.com/GeryHirschfeld1))