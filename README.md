# `fetch`ing REST

This repository contains a script to study from your browser's devtools.  You'll see how to make calls to a RESTful API, and when to use async/await.

## Learning Objectives

* Stepping through API calls in the debugger
* `fetch`ing the main RESTful verbs
  * GET, POST, PUT, PATCH, DELETE
* Understanding when to use _await_

## Install

To install and run the application:

* `npm install`
* `npm run start`
* open `localhost:3000` in the browser

That's it!  You're now ready to study `public/example-fetches.js`.

## How to Study This

When you start this project, a server will open up on `localhost:3000`.  Navigate to this URL in your browser, open your devtools and refresh.  You will find yourself at the top of a script full of API calls.  Step through these calls one at a time paying extra attention to:

* When is _await_ used, and when are normal promises used?
* When do responses come back? How does this change because of _await_?
* What happens in your Node.js terminal each time you send a request?
* What happens in `db.json` each time you send a request?

This project's backend is generated automatically using the [json-server](https://github.com/typicode/json-server) module, the same module that is used to run the [jsonplaceholder API](https://jsonplaceholder.typicode.com).  Studying the [jsonplaceholder guide](https://jsonplaceholder.typicode.com/guide.html) will be helpful.

> Heads Up!  Running the example script without pausing in the debugger will sometimes cause errors (and sometimes won't, it's a bit random).  This is because running `json-server` locally does not create a high-performance server.  It needs to restart every once in a while after `db.json` has been changed.  As long as you step through the example fetches in your debugger you will have no troubles.

## Helpful Links

[The routes available in this app](https://jsonplaceholder.typicode.com/guide.html)

### RESTful APIs

* [Traversy](https://www.youtube.com/watch?v=Q-BpqyOT3a8)
* [WebConcepts](https://www.youtube.com/watch?v=7YcW25PHnAA)

### Using Fetch

* [POSTing with `fetch`](https://stackoverflow.com/questions/29775797/fetch-post-json-data)



