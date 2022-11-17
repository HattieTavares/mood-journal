const moment = require('moment')
const Checkin = require('../models/Checkin')

module.exports = {

    //GET /checkin
    getCheckin: (req,res)=>{
        res.render('checkin.ejs')
    },

    //POST /checkin
    addCheckin : async (req, res) => {
        try {
            await Checkin.create({
                scaleNumber: req.body.scaleNumber,
                note: req.body.note,
                date: req.body.date,
                createdById:  req.user.id,
            }),
            console.log("Checkin has been added.");
            res.redirect("/dashboard")
        } catch (err) {
            console.log(err);
        }
    },
}