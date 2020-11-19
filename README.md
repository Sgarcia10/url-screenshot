# Url Screenshot

## Description
Takes a screenshot from an url, stores image and return the resulting image url

## Installation

```bash
$ npm install
```

## Environment Variables
Create an .env file with the next enviornment variables or export them

```bash
NODE_ENV=local
PORT=3000
S3_SECRET_KEY=
S3_ACCESS_KEY=
S3_BUCKET=
S3_REGION=
```

## Running the app

```bash
# development
$ npm run start:dev

# production mode
$ npm run build
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Make request local

```bash
curl --location --request POST 'localhost:3000/url-screenshot' \
--header 'Content-Type: application/json' \
--data-raw '{
  "url": "https://www.google.com/"
}'
```
## Make request in production

```bash
curl --location --request POST 'https://igsdn6bghd.execute-api.us-east-2.amazonaws.com/prod/url-screenshot' \
--header 'Content-Type: application/json' \
--data-raw '{
  "url": "https://www.google.com/"
}'
```