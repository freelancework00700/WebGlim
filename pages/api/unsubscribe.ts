import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs'
import path from 'path'
import { sendmail } from './utils/common';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const param: any = req.query;

            let html = '';
            let subject = '';
            let to;

            let url = path.join(__dirname, '/../../../../pages/api/htmlFormat/unSubscribe.html');
            html = fs.readFileSync(url, 'utf8');

            html = html.replace(/{name}/g, param.name);
            html = html.replace(/{email}/g, param.email);

            subject = 'User Unsubscription Notification'
            to = process.env.RECEIVER_EMAIL_SUBCRIPTION

            sendmail(to, subject, html);

            res.send('Now you are unsubscribe !');

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error sending email.'
            });
        }
    } else {
        res.status(405).json({
            success: false,
            message: 'Something went wrong.'
        });
    }
}
