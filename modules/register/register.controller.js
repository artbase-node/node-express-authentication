module.exports = {
    register: register
};

function register(req, res) {
    var username = req.body.user.name;
    var password = req.body.user.password;

    console.log('username:', username);
    console.log('password:', password);

    res.send(username + (+ new Date()));
}