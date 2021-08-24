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