let db = require('../util/database');

// Add a single individual to the database
function addArtist(data) {
    let sql = "Insert into artist (name, about, imageURL) values ('" + data.name+ "','"+ data.about+ "','" + data.imageURL + "')";
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllArtist() {
    return db.execute('Select * from artist');
}

// Gets a specific individual from the database
function getArtist(id) {
    return db.execute("Select * from artist where id = " + id);
}

module.exports = {
    add : addArtist,
    getall : getAllArtist,
    getartist: getArtist 
}