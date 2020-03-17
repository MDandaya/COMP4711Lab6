const isImageUrl = require('is-image-url');
let artistModel = require('../models/artistModel');
//
exports.getAllArtist = (req, res, next) => {

    let user = req.session.user;
    console.log('ac' + user);
    if (!user) {
        return res.redirect('/');
    }

    let Artists = artistModel.getall();
    Artists.then(([rows, fieldData]) => {
        res.render('artists', { artist: rows, artistsCSS: true, artistsJS: true });
    });

};

exports.getArtist = (req, res, next) => {
    
    let user = req.session.user;
    console.log(user);
    if (!user) {
        return res.redirect('/');
    }

    let search = req.params.search;
    let Artists = artistModel.getartist(search);
    Artists.then(([rows, fieldData]) => {
        res.render('artists', { artist: rows, artistsCSS: true, artistsJS: true });
    });
}

exports.postAddArtist = async (req, res, next) => {
    let p_name = req.body.name;
    let p_about = req.body.about;
    let p_imageURL = req.body.imageURL;

    if (!isImageUrl(p_imageURL)) {
        p_imageURL = '/images/silhouette.jpg';
    }

    let pOject = {
        name: p_name,
        about: p_about,
        imageURL: p_imageURL
    }

    await artistModel.add(pOject);
    res.redirect(301, '/artists');
}

exports.postDeleteArtist = async (req, res, next) => {
    let p_name = req.body.name;
    let p_about = req.body.about;
    let p_imageURL = req.body.imageURL;

    await artistModel.deleteartist(p_name, p_about, p_imageURL);
    res.redirect(301, 'back');
}