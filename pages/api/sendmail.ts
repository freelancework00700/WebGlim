import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { TransportOptions } from 'nodemailer'
import fs from 'fs'
import path from 'path'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const param = req.body;
      let url;
      let html;
      if (param.business_type && param.message) {
        url = path.join(__dirname, '/../../../../pages/api/format.html')
        html = fs.readFileSync(url, 'utf8');

        html = html.replace(/{name}/g, param.name);
        html = html.replace(/{email}/g, param.email);
        html = html.replace(/{business_type}/g, param?.business_type);
        html = html.replace(/{message}/g, param.message);

      }
      else {
        url = path.join(__dirname, '/../../../../pages/api/formatSubscriber.html')
        html = fs.readFileSync(url, 'utf8');
        html = html.replace(/{name}/g, param.name);
        html = html.replace(/{email}/g, param.email);

      }

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
        to: 'urvashi.disolutions@gmail.com',
        subject: "Send mail.!",
        html,
      };

      const data = await transporter.sendMail(mailOptions)

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Something went wrong.' });
  }
}