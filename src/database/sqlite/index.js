const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const path = require('path')


async function sqliteConnection() {
    const database = await sqlite.open({

        // to make default the creation of the path to the main file of the database, we use a library called 'path' that makes it default the creation of files. this helps a lot because windows works a bit different in the directory structure and moving across it
        filename: path.resolve(__dirname, "..", "database.db"),

        driver: sqlite3.Database
    });

    return database;
}

module.exports = sqliteConnection;