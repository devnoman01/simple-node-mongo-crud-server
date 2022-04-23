/**
 * 1. create a node server with 5 steps
 * 1.1  create folder
 * 1.2  >> npm init -y
 * 1.3  >> npm i express cors mongodb
 * 1.4  set script "start-dev": "nodemon index.js"
 * 1.5  creat index.js
 * 1.6  use 5 steps to create a node server
 *
 *
 * ----- create mongo atlas account -----
 * 1. sign up/login
 * 2. create cluster
 * 3. create user dbUser and password
 * 4. network access ==> ip address: allow all
 * 5. database > connect > code copy paste in index.js
 *
 *
 * ----- CRUD operation -----
 * 1. node mongodb CRUD > Fundamental
 * 2. create async run function
 *
 * ----------
 * Integrate sending data from client to server
 * ----------
 * 1. client side: create form
 * 2. on submit get form data and create user object
 * 3. on server: create user POST method to receive data on backend
 * 4. on client side: set fetch with POST, headers, body
 * 5. make sure you return json from the POST API
 *
 */
