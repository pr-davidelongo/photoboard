
const mysql = require('mysql');

const configDB = {
    "dbdriver": "mysql",
    "dbhost": "localhost",
    "dbusername": "root",
    "dbpassword": "root",
    "db": "davidelo_photoboard"
}
const dbTables=[
    {table:"users", fields:"(`id`, `sid`, `usr`, `psw`, `email`, `phone`)"},
    {table:"albums", fields:"(`id`, `usr_id`, `date`, `version`, `page`, `img`, `msg`, `mod`)"}
]

const connection = mysql.createConnection({
	host     : configDB.dbhost,
    user     : configDB.dbusername,
    password : configDB.dbpassword,
    database : configDB.db
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;

