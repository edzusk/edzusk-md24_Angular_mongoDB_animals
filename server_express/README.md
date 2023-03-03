
To start developing run `npm install`
set up mongoDB in Docker
`docker build -t my-mongo .`

`docker run -p 27017:27017 --name mongo-animals -d my-mongo`

 and then `npm run start:nodemon`
