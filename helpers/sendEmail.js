const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "petrov2708@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;












// sendGrid-----------------------------

// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const {SENDGRID_API_KEY} = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const email = {
//     to: "ririnow273@fkcod.com",
//     from: "petrov2708@gmail.com",
//     subject: "Test email",
//     html: "<p>Test email</p>"
// }

// sgMail.send(email)
// .then(() => console.log("Email send success"))
// .catch(error => console.log(error.message))




// nodemailer---------------------------

// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const {META_EMAIL, META_PASSWORD} = process.env;

// const nodmailerConfig = {
//     host: "smtp.meta.ua",
//     port: 465, //25, 465, 2525
//     secure: true,
//     auth: {
//         user: META_EMAIL,
//         pass: META_PASSWORD
//     }
// };

// const transport = nodemailer.createTransport(nodmailerConfig);

// const email = {
//     to: "ririnow273@fkcod.com",
//     from: META_EMAIL,
//     subject: "Test email",
//     html: "<p>Test email</p>"
// };

// transport.sendMail(email)
// .then(() => console.log("Email send success"))
// .catch(error => console.log(error.message))
