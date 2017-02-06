# Trivia

> Nuxt.js project

A simple app powered by [Nuxt.js](https://github.com/nuxt/nuxt.js) that shows a quote from http://numbersapi.com

## Tools
- [Nuxt.js](https://github.com/nuxt/nuxt.js)
- [Axios library](https://github.com/mzabriskie/axios)
- [Google fonts](https://fonts.google.com)

## Getting started
### Demo
Clone the repository:
```bash
$ git clone https://github.com/eloquentbit/trivia.git
```

Install the dependencies:
```bash
$ npm install
$ npm run dev
```
Go to [http://localhost:3000](http://localhost:3000)

### Build a docker image
In the cloned directory you can find a Dockerfile:
```bash
$ docker build -t <tag> .
```
eg:
```bash
$ docker build -t lp76/trivia
```
In order to run the image run the following command:
```bash
$ docker run -d -p 3000:3000 -e HOST=0.0.0.0 \
--rm --name trivia <image name>
```
eg:
```bash
$ docker run -d -p 3000:3000 -e HOST=0.0.0.0 \
--rm --name trivia lp76/trivia
```

Go to [http://localhost:3000](http://localhost:3000)

### Production
To run the app in production mode:
```bash
$ npm run build
$ npm start
```
Go to [http://localhost:3000](http://localhost:3000)