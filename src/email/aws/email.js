"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_email_1 = require("../base_email");
const invalid_opt_1 = require("./error/invalid_opt");
const aws_sdk_1 = require("aws-sdk");
class Email extends base_email_1.Base_email {
    constructor(opt) {
        super(opt);
        this.def = {
            apiVersion: '2010-12-01',
        };
        this.opt = Object.assign(Object.assign({}, this.def), opt);
        this.validate_opt();
    }
    send(from, to, subject, content, opt) {
        if (typeof to === 'string') {
            to = [to];
        }
        const def = {
            Source: from,
            Destination: {
                ToAddresses: to,
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: content,
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: subject,
                },
            },
        };
        opt = Object.assign(Object.assign({}, def), opt);
        const ses = new aws_sdk_1.SES(this.opt);
        return ses.sendEmail(opt).promise();
    }
    validate_opt() {
        const o = this.opt;
        if (!o.accessKeyId || !o.secretAccessKey || !o.region) {
            throw new invalid_opt_1.Invalid_opt('Required options: {accessKeyId}, {secretAccessKey}, {region}', 'Pass required opts when constructing class');
        }
        return true;
    }
}
exports.Email = Email;
//# sourceMappingURL=email.js.map