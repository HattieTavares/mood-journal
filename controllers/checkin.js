const moment = require('moment')
const Checkin = require('../models/Checkin')

module.exports = {

    //GET /checkin
    getCheckin: (req,res)=>{
        //Retrieving today's date for default date picker
        let today = moment.utc().format('YYYY-MM-DD')
        res.render('checkin.ejs', {today: today})
    },

    //POST /checkin
    addCheckin : async (req, res) => {
        try {
            const myCheckins = await Checkin.find({ createdById: req.user.id }).sort({ date: "desc" }).lean();     
            const today = moment.utc(myCheckins[0].date).format('YYYY-MM-DD')   
            console.log(myCheckins[0], today, req.body.date)
            if(today != req.body.date) {
                await Checkin.create({
                    scaleNumber: req.body.scaleNumber,
                    note: req.body.note,
                    date: req.body.date,
                    createdById:  req.user.id,
                }),
                console.log("Checkin has been added.");
                res.redirect("/dashboard")
            } else {
                const validationErrors = []
                validationErrors.push({ msg: 'You have already checked in today.' })
                if (validationErrors.length) {
                    req.flash('errors', validationErrors)
                    return res.redirect('../checkin')
                  }
            }
        } catch (err) {
            console.log(err);
        }
    },
}