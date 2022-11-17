const moment = require('moment')

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getDashboard : async (req, res) => {
        try {
            res.render("dashboard.ejs")
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },
}