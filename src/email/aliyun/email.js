"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Core = require("@alicloud/pop-core");
const base_email_1 = require("../base_email");
const invalid_opt_1 = require("./error/invalid_opt");
class Email extends base_email_1.Base_email {
    constructor(opt) {
        super(opt);
        this.def = {
            apiVersion: '2015-11-23',
            endpoint: 'https://dm.aliyuncs.com',
        };
        this.opt = Object.assign(Object.assign({}, this.def), opt);
        this.validate_opt();
    }
    send(from, to, subject, content = '', opt) {
        const client = new Core(this.opt);
        const def = {
            AccountName: from,
            AddressType: 1,
            ReplyToAddress: false,
            ToAddress: to,
            Subject: subject,
            HtmlBody: content,
        };
        opt = Object.assign(Object.assign({}, def), opt);
        const requestOption = {
            method: 'POST',
        };
        return client.request('SingleSendMail', opt, requestOption);
    }
    validate_opt() {
        const o = this.opt;
        if (!o.accessKeyId || !o.accessKeySecret) {
            throw new invalid_opt_1.Invalid_opt('Required options: {accessKeyId}, {accessKeySecret}', 'Pass required opts when constructing class');
        }
        return true;
    }
}
exports.Email = Email;
//# sourceMappingURL=email.js.map