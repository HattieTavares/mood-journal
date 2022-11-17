const moment = require('moment')

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getProfile : async (req, res) => {
        try {
            res.render("profile.ejs")
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },
}