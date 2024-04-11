### Fullstack Web Application for Link Shortening

The frontend (/frontend) is written in React.js, while the backend (/backend) is implemented in Express.js.

### Quick Start

To get started, simply execute the following commands:
```npm run install```
and
```npm run start```

The URL shortening app will then be accessible at [localhost:3001](http://localhost:3001/).

### 1. Installation

As this is a fullstack app with two separate frontend and backend applications, I've included a few package scripts to simplify management. First, run:
```npm run install```
This command will install all dependencies for both applications.

### 2. Development Phase

During development, we need to serve two separate apps. Start the frontend development server by running:
```npm run start:frontend```
and then start the backend server with:
```npm run start:backend```

Default development links are as follows:
Frontend: [localhost:3000](http://localhost:3000/)
Backend: [localhost:3001](http://localhost:3001/)

### 3. Deployment

For deployment, simply execute:

```npm run start```
This will start the Express server with the built frontend from '/frontend/build/index.html'.
