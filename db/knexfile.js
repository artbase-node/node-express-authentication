module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: 'db4free.net',
            user: 'artbase',
            password: 'testtest',
            database: 'mysqlnodejs'
        },
        pool: {
            min: 0,
            max: 7
        },
        acquireConnectionTimeout: 10000,
        migrations: {
            directory: 'db/migrations',
            tableName: 'migrations'
        }
    }
}