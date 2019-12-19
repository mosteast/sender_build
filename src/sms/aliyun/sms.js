"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invalid_opt_1 = require("../../email/aliyun/error/invalid_opt");
const base_sms_1 = require("../base_sms");
const Core = require("@alicloud/pop-core");
class Sms extends base_sms_1.Base_sms {
    constructor(opt) {
        super(opt);
        this.def = {
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25',
        };
        this.opt = Object.assign(Object.assign({}, this.def), opt);
        this.validate_opt();
    }
    send(ccode, phone, content, opt) {
        const client = new Core(this.opt);
        const params = {
            PhoneNumbers: phone,
            SignName: content.sign,
            TemplateCode: content.template_id,
            TemplateParam: JSON.stringify(content.template_arg),
        };
        const requestOption = {
            method: 'POST',
        };
        return client.request('SendSms', params, requestOption);
    }
    validate_opt() {
        const o = this.opt;
        if (!o.accessKeyId || !o.accessKeySecret) {
            throw new invalid_opt_1.Invalid_opt('Required options: {accessKeyId}, {accessKeySecret}', 'Pass required opts when constructing class');
        }
        return true;
    }
}
exports.Sms = Sms;
//# sourceMappingURL=sms.js.map