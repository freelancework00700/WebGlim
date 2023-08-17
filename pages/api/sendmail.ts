import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs'
import path from 'path'
import { sendmail } from './utils/common';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const param = req.body;

      let url;
      let html;
      let subject = '';
      let to;

      if (param.business_type && param.message) {
        url = path.join(__dirname, '/../../../../pages/api/htmlFormat/formatGetInTouch.html')
        html = fs.readFileSync(url, 'utf8');

        html = html.replace(/{name}/g, param.name);
        html = html.replace(/{email}/g, param.email);
        html = html.replace(/{business_type}/g, param?.business_type);
        html = html.replace(/{message}/g, param.message);

        subject = 'General Inquiry'
        to = process.env.RECEIVER_EMAIL
      }
      else {
        url = path.join(__dirname, '/../../../../pages/api/htmlFormat/formatSubscriber.html')
        html = fs.readFileSync(url, 'utf8');
        html = html.replace(/{name}/g, param.name);
        html = html.replace(/{email}/g, param.email);
        subject = 'A new subscription request'
        to = process.env.RECEIVER_EMAIL_SUBCRIPTION

        let userUrl = path.join(__dirname, '/../../../../pages/api/htmlFormat/formatUser.html')
        let userHtml = fs.readFileSync(userUrl, 'utf8');
        userHtml = userHtml.replace(/{name}/g, param.name);
        userHtml = userHtml.replace(/{email}/g, param.email);
        userHtml = userHtml.replace(/{URL}/g, `http://192.168.1.145:3000/api/unsubscribe?name=${param.name}&email=${param.email}`)
        let userTo = req.body.email
        let userSubject = 'Stay Connected with Webglim!'

      sendmail(userTo, userSubject, userHtml);
      }
      sendmail(to, subject, html);

      res.status(200).json({
        success: true,
        message: 'Email sent successfully!'
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error sending email.',
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Something went wrong.'
    });
  }
}
