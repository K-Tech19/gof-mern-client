# Game Overflow


## Descrpition:

Game Overflow is a full stack app that can be used to get help gamers that are stuck on a specific part of a game with a blogs that other users create which contain walkthroughs, guides and secret achievement of the specific game the users looks up.

### Features / Techonolgies:

In this application we are using local authorization (passport-local) to authenticate a user. passport-local uses BCrypt to apply salt rounds then hash the user password in order to add more secruity for your user. The Sessions middleware is used to keep a user logged in. IsLoggedIn is used to make that any type edits or deletes are done by the user that is currently logged in and not a unknown user. Flash messages are added to notify the user of successes and error when the user logs in. Sequelize is used to create, modify and migrate models. EJS and EJS-layouts are going to be used to connect the backend to the HTML frontend by being able to add embedded javascript to the frontend. 

This is a MERN app that uses:

* Mongodb
* Express
* React
* Node.js
* Mongoose
* JavaScript
* CSS 
* etc...

### Accessing the applicaton here:

Link: [placeholder.com]

### Installation 

1. Fork the repository
    * click Code and copy HTTPS link
    * Open terminal and run  `git clone [insert HTTPS link here]` 
    * Last change your directory to gof-mern-client `cd gof-mern-client`

2. Install all dependencies by running `npm install`

3. Create a local database to store app models by entering `createdb db_black star`

4. Update the config.json file by including the database of black_star (from step 3) and the current dialect you are using. 

5. Run migration by entering sequelize db:migrate

6. Create a .env file to store all information that needs to be hidden listed below:

    * PORT=3000
    * SESSION_SECRET='supersecretpassword'

7. Lastly run the server by running `nodemon` in your terminal then open your browers and go to http://localhost:3000.

## Approach:

We used Notion, Miro and Lucid charts to keep track of our team progress and tasks to complete.

* First, we created wireframes to have a visual representation of how we want our webpages for our application to look like. Lucid charts was used to keep create our ERD models .

* Next, auth-boilerplate or barebones (containing passport-local auth and flash message) was forked, cloned, and modified to suit the models and interface of Black Star. 

* Routes were created and stubbed out to later get filled with the appropirate HTML, ejs, and ejs-layouts. 

* After the basic functionality was completed and tested, more routes were created inorder to interact with the models that were migrated.

* By Building out one functionality of CRUD at a time until one route was completed and functioning properly before proceeding to the next route.

* The readme.me file was added at the end of the process summarizing the app.

## More time:

If had more time:

* Add more CSS and Bootstrap elements
* Rating system (avg score, stars representing rating)
* Users profile editing
* Logo added to navbar
* Additon profile editing
* Schdeuling times of shows and movies.
