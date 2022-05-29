const template = {
    head: `<!DOCTYPE html><html><head> <meta name="viewport" content="width=device-width"/> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <title>SmartDesk Web Application</title> <style>@media only screen and (max-width: 620px){table[class=body] h1{font-size: 28px !important; margin-bottom: 10px !important}table[class=body] a, table[class=body] ol, table[class=body] p, table[class=body] span, table[class=body] td, table[class=body] ul{font-size: 16px !important}table[class=body] .article, table[class=body] .wrapper{padding: 10px !important}table[class=body] .content{padding: 0 !important}table[class=body] .container{padding: 0 !important; width: 100% !important}table[class=body] .main{border-left-width: 0 !important; border-radius: 0 !important; border-right-width: 0 !important}table[class=body] .btn table{width: 100% !important}table[class=body] .btn a{width: 100% !important}table[class=body] .img-responsive{height: auto !important; max-width: 100% !important; width: auto !important}}@media all{.ExternalClass{width: 100%}.ExternalClass, .ExternalClass div, .ExternalClass font, .ExternalClass p, .ExternalClass span, .ExternalClass td{line-height: 100%}.apple-link a{color: inherit !important; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; text-decoration: none !important}#MessageViewBody a{color: inherit; text-decoration: none; font-size: inherit; font-family: inherit; font-weight: inherit; line-height: inherit}.btn-primary table td:hover{background-color: transparent !important}.btn-primary a.btn-confirm{}.btn-primary a.btn-confirm:hover{background-color: transparent !important; border-color: #17c671 !important; color: #17c671 !important; opacity: 0.8; box-shadow: 0 -5px 25px 0 rgba(23, 198, 113, 0.35), 0 5px 25px 0 rgba(23, 198, 113, 0.35);}.btn-primary a.btn-confirm span img.show_onhover{display: none;}.btn-primary a.btn-confirm:hover span img.show_onhover{display: inline-block;}.btn-primary a.btn-confirm:hover span img.hide_onhover{display: none;}.btn-primary a.btn-confirm span img.hide_onhover{display: inline-block;}a.social-link__icon{color: #007bff !important;}a.social-link__icon:hover{color: #007bff !important; opacity: .7;}}</style></head>`,
    bodyStart: `<body style="background-color: #f6f6f6; font-family: 'Ubuntu', sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;"> <tbody> <tr> <td class="container" style="font-family: 'Ubuntu', sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;"> <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">`,
    bodyEnd: `<div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"> <tbody> <tr> <td class="content-block" style="font-family: 'Ubuntu', sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;"> <span> Copyright © ${new Date().getFullYear()} SmartDesk. All rights Reserved!</span></td></tr><tr> <td class="content-block powered-by" style="font-family: 'Ubuntu', sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;"> Powered by <a href="http://smartdesk.com" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">SmartDesk</a>. </td></tr></tbody> </table> </div></div></td></tr></tbody></table></body></html>`,
    header: title => `<table class="header" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;background: #ffffff;box-shadow: inset 0 4px 0 0 #007bff;border-radius: 0.625rem 0.625rem 0 0;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;box-sizing: border-box;padding: 10px 0 0;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif; font-size: 14px; vertical-align: top;"> <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;"> <tbody> <tr> <td align="left" style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: auto;margin: 0 auto;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;border-radius: 5px;text-align: center;"> <a href="localhost:8080" target="_blank" style="display: inline-block;color: #ffffff;cursor: pointer;text-decoration: none;font-size: 14px;font-weight: bold;max-height: 50px;"><img src="https://csplatform.herokuapp.com/images/smartdesk/logotype_w250h75.png" style="max-height: 50px;"></a></td></tr></tbody> </table> </td></tr><tr> <td align="left" style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: auto;margin: 0 auto;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;border-radius: 5px;text-align: center;"> <h1 style=" margin: 0 auto; font-size: 1.5rem;">${title}</h1></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table>`,
    footer: `<table class="footer" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;background: #ffffff;border-radius: 0 0 0.625rem 0.625rem;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;box-sizing: border-box;padding: 10px 20px 0 20px;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 350px;margin: 0 auto;border-top: 1px solid #0000003b;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif; font-size: 14px; vertical-align: top;padding: 0 20px;"> <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;box-sizing: border-box;padding: 10px 0;"> <tbody> <tr> <td align="left" style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;max-width: 300px;width: 300px;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;/* width: auto; */margin: 0 auto;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;border-radius: 5px;text-align: center;"> <a class="social-link__icon" href="mailto:c_simm@icloud.com" target="_blank" style="display: inline-block;color: #007bff;cursor: pointer;text-decoration: none;font-weight: bold;max-height: 50px;margin: 0 10px;"> <img src="https://csplatform.herokuapp.com/images/smartdesk/email_icon.png" height="35" alt="mailto icon"/> </a> </td><td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;border-radius: 5px;text-align: center;margin: 0 5px;"> <a class="social-link__icon" href="tel:0672230967" target="_blank" style="display: inline-block;color: #007bff;cursor: pointer;text-decoration: none;font-weight: bold;max-height: 50px;margin: 0 10px;"> <img src="https://csplatform.herokuapp.com/images/smartdesk/phone_icon.png" height="35" alt="callto link icon"/> </a> </td><td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;border-radius: 5px;text-align: center;"> <a class="social-link__icon" href="https://github.com/constantinesimm?tab=repositories" target="_blank" style="display: inline-block;color: #007bff;cursor: pointer;text-decoration: none;font-weight: bold;max-height: 50px;margin: 0 10px;"> <img src="https://csplatform.herokuapp.com/images/smartdesk/github.png" height="35" alt="github link icon"/> </a> </td><td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;border-radius: 5px;text-align: center;margin: 0 5px;"> <a class="social-link__icon" href="https://www.facebook.com/mister.simm" target="_blank" style="display: inline-block;color: #007bff;cursor: pointer;text-decoration: none;/* font-size: 14px; */font-weight: bold;max-height: 50px;margin: 0 10px;"> <img src="https://csplatform.herokuapp.com/images/smartdesk/facebook.png" height="35" alt="facebook link icon"/> </a> </td><td style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;border-radius: 5px;text-align: center;"> <a class="social-link__icon" href="https://linkedin.com/in/konstantin-peschanov-273812100" target="_blank" style="display: inline-block;color: #007bff;cursor: pointer;text-decoration: none;/* font-size: 14px; */font-weight: bold;max-height: 50px;margin: 0 10px;"> <img src="https://csplatform.herokuapp.com/images/smartdesk/linkedin.png" height="35" alt="linkedin link icon"/> </a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table>`,
};

module.exports = {
    registerVerify(data) {
        let preheader = mail => `<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"> Please confirm that <span style="font-weight: bold;text-decoration: underline;">${ mail }</span> is your email address by clicking on the button below </span>`;
        let contentMain = (mail, id, token) => `<table class="main" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;background: #ffffff;"> <tbody> <tr> <td class="wrapper" style="font-family: 'Ubuntu', sans-serif;font-size: 14px;vertical-align: top;box-sizing: border-box;padding: 0 20px 0 20px;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;border-top: 1px solid #0000003b;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif; font-size: 14px; vertical-align: top;"> <h3 style="font-family: 'Ubuntu', sans-serif;font-weight: bold;margin: 10px 15px;font-size: 1rem;text-align: center;"> Thank you for choosing SmartDesk! </h3> <p style="font-family: 'Ubuntu', sans-serif; font-size: 14px; font-weight: normal; margin: 15px 0;text-align: center;"> You've got an access on email <span style="font-weight: bold;text-decoration: underline;">${ mail }</span>. </p><p style="font-family: 'Ubuntu', sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;text-align: center;"> Please confirm that current email address is yours by clicking on the button below. </p><table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;"> <tbody> <tr> <td align="left" style="font-family: 'Ubuntu', sans-serif; font-size: 14px; vertical-align: top; padding: 10px 0;"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: auto;margin: 0 auto;"> <tbody> <tr> <td style="font-family: 'Ubuntu', sans-serif; font-size: 14px; vertical-align: top; background-color: transparent; border-radius: 50px; text-align: center;"> <a class="btn-confirm" href="http://localhost:8080/users/register/${ id }/complete/${ token }" target="_blank" style="display: inline-block;color: #ffffff;background-color: #17c671;border: solid 1px #17c671;border-radius: 50px;box-sizing: border-box;cursor: pointer;text-decoration: none;font-size: 14px;font-weight: bold;margin: 0;padding: 5px 20px 3px;text-transform: capitalize;"> <span> <img class="show_onhover" src="https://csplatform.herokuapp.com/images/smartdesk/email_confirm_no_borders_green.png" width="25"> <img class="hide_onhover" src="https://csplatform.herokuapp.com/images/smartdesk/email_confirm_no_borders_white.png" width="25"> </span> <span style="vertical-align: .3rem;margin-left: 10px;font-size: 1rem;"> Verify </span> </a> </td></tr></tbody> </table> </td></tr></tbody> </table> <p style="font-family: 'Ubuntu', sans-serif;width: auto;text-align: center;"> Invite link is available <span style=" font-size: large; color: #ff0035; font-weight: bold;">24 hours!</span> </p><p style="font-family: 'Ubuntu', sans-serif;font-weight: normal;text-align: center;margin: 0 auto;"> Good luck and see you soon at SmartDesk! </p></td></tr></tbody> </table> </td></tr></tbody> </table>`

        return template['head'] + template['bodyStart'] + preheader(data['recipient']) + template['header']('Confirm your email') + contentMain(data['recipient'], data['id'], data['token']) + template['footer'] + template['bodyEnd'];
    }
};