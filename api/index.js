const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfólio" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: message,
    });
    res.status(200).send("Email enviado com sucesso!");
    console.log(message)
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao enviar o email.");
  }
};