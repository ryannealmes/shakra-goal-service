# Goal service

Goal service handles goal management.

## Installation

The goal service is made up of 2 major components. 
1. Prisma server that connects to the goal database. This acts as an orm that feeds into the Goal API server
2. Goal API server that handles goal functionality - signup, login, profiles, etc. It also exposes mutations, queries and subscriptions via a Graphql API. 

### Prisma server setup
- Ensure you have the [docker toolbox](https://www.docker.com/products/docker-toolbox) installed
- Ensure you have mysql installed with a user:password - root:root 
- `cd [application_directory]`
- `docker-compose up`
- `prisma deploy`

### Goal API setup
- `cd [application_directory]`
- `npm install -g pm2 npm-run-all` 
- `npm install`
- `npm start`

Note that the server is run with pm2, a lightweight process manager that ensures that the server stays up and running. The `processes.json` holds all of the configuration information used when running the server. 

### pm2 info

*pm2* is a process manager. It allows you to run and manage processes. In the event that there is a failure the process will be restarted. 

- `pm2 list`
- `pm2 logs`
- `pm2 dash`
- `pm2 monit`

More can be found in there [documentation](http://pm2.keymetrics.io/docs/usage/quick-start/#cheatsheet)

## Usage

Once your server is running you will be able to access the GraphiQL interfaces. 

Prisma - `http://localhost:4466/goal-service/development`
Goal API - `http://localhost:4001`

## TODO
Right now setup is a bit of a mission and I want to stream line it, but I can only do one things at a time! Hopefully I can get everything working on Kubernetes!!! 
