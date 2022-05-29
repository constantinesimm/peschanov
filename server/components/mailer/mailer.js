const nodemailer = require('nodemailer');
const { smtp } = require('../../config');
const template = require('./templates');

const transporter = nodemailer.createTransport(smtp);

module.exports = (tmpl, data) => {
    const message = {
        from: data['sender'],
        to: data['recipient'],
        subject: data['subject'],
        text: template.preText,
        html: template,
        attachments: [
            {
                filename: 'konstantin_peschanov_cv.pdf',
                path: 'public/generated-files/',
                contentType: "application/pdf"
            }
        ],
    };
}