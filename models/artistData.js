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

// Gets individuals from the database with like names
function getArtist(search) {
    return db.execute("Select * from artist where name like '%" + search + "%'");
}

function deleteArtist(name, about, imageURL) {
    return db.execute("delete from artist where name = '" + name + "' and about = '" + about + "' and imageURL = '" + imageURL + "'");
}

module.exports = {
    add : addArtist,
    getall : getAllArtist,
    getartist: getArtist,
    deleteartist: deleteArtist
}