const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

async function migrationsRun() {
    // creating an object that contains the tables the database will have
    // a vector "[]" is used to call the migration to create the users table because in the future there could be more than one table, so we separe then with colon (,)
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error));
}

module.exports = migrationsRun;