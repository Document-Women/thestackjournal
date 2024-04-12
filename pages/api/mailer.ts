// pages/api/send-email.js
import nodemailer from 'nodemailer';

const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export default async function handler(req, res) {
  const { subject, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thestackjournal@gmail.com',
      pass: 'nmjmnuszeypteihm',
    },
  });

  // Define the email options
  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: subject,
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}