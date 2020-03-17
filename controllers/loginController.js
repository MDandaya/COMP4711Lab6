exports.postLogin = (req, res, next) => {

    let hardcodeU = 'A01053707';
    let hardcodeP = 'password';
    
    let user = req.body.username;
    let pass = req.body.password;
    if (user === hardcodeU && pass === hardcodeP) {
        res.redirect(301, '/artists');
    } else {
        console.log('invalid');
        res.redirect(301, '/')
    }
}