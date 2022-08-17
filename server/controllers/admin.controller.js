const mongoose = require("mongoose");

const Admin = mongoose.model("Admin");

// module.exports.register = (req, res, next) => {
//   const admin = new Admin();
//   admin.name = req.body.name;
//   admin.address = req.body.address;
//   admin.email = req.body.email;
//   admin.password = req.body.password;
//   admin.contact_number = req.body.contact_number;
//   admin.save((err, data) => {
//     if (!err) {
//       res.send(data);
//     }
//   });
// };
