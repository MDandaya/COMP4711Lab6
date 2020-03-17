

exports.postLogin = (req, res, next) => {

    let hardcodeU = 'A01053707';
    let hardcodeP = 'password';
    
    let user = req.body.username;
    let pass = req.body.password;

    if (user === hardcodeU && pass === hardcodeP) {
        req.session.user = user;
        res.redirect(301, '/artists');
    } else {
        console.log('invalid');
        res.render('login');
    }
}

exports.getLogout = (req, res, next) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.render('login');
    });
}