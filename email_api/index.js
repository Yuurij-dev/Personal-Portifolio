const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Método não permitido');
  }

  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfólio" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send('Email enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).send('Erro ao enviar o email.');
  }
};