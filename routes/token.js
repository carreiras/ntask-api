const bcrypt = require('bcrypt');
const jwt = require('jwt');
const config = require('../config');

module.exports = (app) => {
    const bcrypt = require('bcrypt');
    const jwt = require('jwt');

    app.post('/token', async (req, res) => {
        try {
            const {email, password} = req.body;
            if (email && password) {
                const where = {email};
                const user = await Users.findOne({where});
                if (bcrypt.compareSync(password, user.password)) {
                    const payload = {id: user.id};
                    const token = jwt.encode(payload, secret);
                    return res.json({token});
                }
            }
            return res.sendStatus(401);
        } catch (err) {
            return res.sendStatus(401);
        }
    });
}