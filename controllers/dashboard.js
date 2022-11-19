const Checkin = require('../models/Checkin');
const moment = require('moment');

module.exports = {
  getIndex: (req, res) => {
    res.render('index.ejs');
  },
  getDashboard: async (req, res) => {
    try {
      const myCheckins = await Checkin.find({ userId: req.user.id }).sort({ date: "desc" }).lean();
      res.render('dashboard.ejs', { checkin: myCheckins, user: req.user, moment:moment });
      console.log(myCheckins)
    } catch (err) {
      if (err) return res.status(500).send(err.toString());
    }
  },
};
