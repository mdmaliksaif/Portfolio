const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phoneNumber, chosenTopic, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'saifmalik10786@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Chosen Topic: ${chosenTopic}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
