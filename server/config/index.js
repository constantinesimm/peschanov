if (process.env.NODE_ENV !== 'production') require('dotenv').config();

module.exports = {
    secret_string: '',
    database: {
        uri: {
            local: `mongodb://127.0.0.1:32017/${ process.env.DB_NAME }`,
            prod: `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_SECRET }@${ process.env.DB_HOST }/${ process.env.DB_NAME }?retryWrites=true&w=majority`,
            connect() {
                return process.env.NODE_ENV !== 'production' ? this.local : this.prod
            }
        },
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    }
};