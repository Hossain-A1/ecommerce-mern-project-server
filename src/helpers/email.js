const nodemailer = require("nodemailer");
const { smtpUserName, smtpPassword } = require("../secret");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: smtpUserName,
    pass: smtpPassword,
  },
});

const emailWithNodeMail = async (emailData) => {
  try {
    const mailOptions = {
      from: smtpUserName,
      to: emailData.email, // list of receivers
      subject: emailData.subject, // Subject line
      html: emailData.html, // html body
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("message sent: %s", info.response);
  } catch (error) {
    console.error("Error occured while sending email:", error);
    throw error;
  }
};

module.exports = emailWithNodeMail;
