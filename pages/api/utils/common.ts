import nodemailer, { TransportOptions } from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/json-transport';

 export function sendmail(to: any, subject: String, html: String)  {

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  } as TransportOptions);

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to,
    subject,
    html,
  } as MailOptions;
  
  return transporter.sendMail(mailOptions)
}
