This branch is already adapted to another new application without own repository. This will be created later where I will also update the README! Currently this is work in progress.

The original description about starting etc. is still valid.


# Running Server and Client locally
## Prerequisites

First, ensure you have the following installed:

1. NodeJS - Download and Install latest version of Node: [NodeJS](http://http://nodejs.org)
2. Git - Download and Install [Git](http://git-scm.com)
3. Angular CLI - Install Command Line Interface for Angular [https://cli.angular.io/](https://cli.angular.io/)
4. Mongo-DB

After that, use `Git bash` to run all commands if you are on Windows platform.

## Clone repository

In order to start the project use:

```bash
$ git clone https://github.com/luixaviles/socket-io-typescript-chat.git
$ cd socket-io-typescript-chat
```

## Run Server

You have to start Mongo-DB first:
sudo service mongod start

To run server locally, just install dependencies and run `gulp` task to create a build:

```bash
$ cd server
??$ npm install -g gulp-cli
$ yarn 
$ gulp build
$ yarn start
```


The `socket.io` server will be running on port `8080`

## Run Angular Client

Open other command line window and run following commands:

```bash
$ cd client
$ npm install
$ ng serve
```

Now open your browser in following URL: [http://localhost:4200](http://localhost:4200/)

## License

MIT
