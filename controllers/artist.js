const isImageUrl = require('is-image-url');
let artistModel = require('../models/artistData');
//
exports.getAllArtist = (req, res, next) => {
    let Artists = artistModel.getall();
    Artists.then(([rows, fieldData]) => {
        res.render('artists', { artist: rows, artistsCSS: true, artistsJS: true });
    });

};

exports.getAddArtist = (req, res, next) => {
    res.render('artistadd', { formsCSS: true });
};

exports.getArtist = (req, res, next) => {
    let search = req.params.search;
    let Artists = artistModel.getartist(search);
    Artists.then(([rows, fieldData]) => {
        res.render('artists', { artist: rows, artistsCSS: true, artistsJS: true });
    });
    // Artist.then( ([data,metadata]) => {
    //     res.render('artist', {artist: data[0], artistCSS: true});
    // });
}

exports.postAddArtist = (req, res, next) => {
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

    artistModel.add(pOject);
    res.redirect(301, '/artists');
}

exports.postDeleteArtist = (req, res, next) => {
    let p_name = req.body.name;
    let p_about = req.body.about;
    let p_imageURL = req.body.imageURL;

    artistModel.deleteartist(p_name, p_about, p_imageURL);
    res.redirect(301, '/artists');
}