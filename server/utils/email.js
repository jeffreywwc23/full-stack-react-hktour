const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `${process.env.EMAIL_FROM}`;
    this.html = `<h1>Welcome to react-hktour.com !</h1>
    <p>Please Click to link to activate</p>
    <a href="/">${this.url}</a>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Sendgrid for production email
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      service: 'gmail',
      host: 'localhost',
      port: 3000,
      secure: false,
      auth: {
        user: 'testreacthktour@gmail.com',
        pass: 'test2323',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendMail() {
    const mailOptions = {
      to: this.to,
      firstName: this.firstName,
      from: this.from,
      subject: 'React-hktour - Your are successfully signed up!',
      html: `<h1>Welcome to React-hktour !</h1>
                <p>Please click the link to activate your account !</p>
                <a href="/">${this.url}</a>
          `,
    };

    // send
    await this.newTransport().sendMail(mailOptions);
  }

  async sendPasswordReset() {
    const mailOptions = {
      to: this.to,
      from: this.from,
      firstName: this.firstName,
      url: this.url,
      html: `<h1>Hi ${this.firstName},</h1>
      <h1>Forgot your password?</h1>
      <p>Please click the link to reset your password !</p>
      <a href="${this.url}">${this.url}</a>
      `,
    };

    // send
    await this.newTransport().sendMail(mailOptions);
  }
};
