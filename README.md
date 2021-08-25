## Deere Project 2 Starter Code

## Set Up

1. Fork and clone this repo
1. `cd` into the folder and run `npm install`
1. In the root of your app, `touch .env` and add:

   ```bash
   PORT=3000
   JWT_SECRET=pancakes
   ```

1. Check out your `config/config.json` file. You'll need to create a database called `project2_development`
1. Sequelize is included in the app. You have a `User` model. Run `db:migrate` to create the `Users` table in your database.
1. Run `nodemon` and go to the Homepage: `localhost:3000/`

![](https://i.imgur.com/uuhrOxQ.png)

<br>

## Routes

You have the following routes available.

#### controllers/authController.js

- GET and POST `localhost:3000/auth/signup`
- GET and POST `localhost:3000/auth/login`
- GET `localhost:3000/auth/logout`

#### controllers/usersController.js

- GET `localhost:3000/profile/:id`

<br>

## Additional Resources

- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)

This List application uses Node.js, Postgres, Express and EJS.  It also uses HTML, CSS and javascript.  This list application was based on the fruit app which was developed in class earler.  It uses MVC archecture as well as 7 restful routes and full CRUD.  Enjoy setting up an account and lets get shopping!

App link:
https://todd-smiths-list-app.herokuapp.com/

User Stories:

As a dbt create home page so users can access the site
AC: home page created

As a dbt create login page so users can access the site
AC: login page created and is linked from the home page

As a dbt create signup page so users can create shopping lists and login to the site
AC: signup page created so new users can access the site from home page

As a dbt create add something to your list page so user can add to a list
AC: add to list page is created so users can create list items

As a dbt create a show list page so users can view items on their list
AC: show list page is created so users can view their list items

As a dbt create delete functionality so users can delete items on their list.
AC:  Users have delete an item function.

As a dbt create update functionality so users can edit list items.
AC:  Users have update an item function.

As a dbt create navigation such that users and move around the site and use its functionality.
AC: Add navigation so users can move around the site.

As a dbt add styling to the site to make it more appealing to the users.
AC  Add styling such that user would enjoy something more than not having styling.

As a dbt create a db structure such that storename and list of items can be stored.
AC:  Table created being able to hold storename and a list of items.