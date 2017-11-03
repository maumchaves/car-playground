# Car Playground

Car Playground is a personal project aimed to explore and play with technologies such as Node.js, REST API, Google Maps API, Angular, TypeScript, Sass, Bootstrap, and others.

[Live application here](http://car-playground.s3-website-us-east-1.amazonaws.com), hosted on [AWS S3](https://aws.amazon.com/es/s3).

The server is running on [Heroku](https://www.heroku.com). The [API](#api) for this application is available at [this URL](https://car-playground.herokuapp.com).

### Features

- List different types of cars with data retrieved from the server.
- Select a car to see its location in the map.

## Setup

- Run `npm install` either in the `server` and the `client` folders.
- Run `npm start` in the `server` folder to start the server. You should see something like `Listening on Port: 3000`.
- Now, in a different command line tab, go to the `client` folder and run `ng serve`. This will serve the client side application and open it in your browser.

## API <a id="api"></a>

**`/api/car-type-one`**

 - `GET`: finds all cars of this type.

 **`/api/car-type-two`**

 - `GET`: finds all cars of this type.
