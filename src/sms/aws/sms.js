"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const base_sms_1 = require("../base_sms");
const invalid_opt_1 = require("./error/invalid_opt");
class Sms extends base_sms_1.Base_sms {
    constructor(opt) {
        super(opt);
        this.def = { apiVersion: '2010-03-31' };
        this.opt = Object.assign(Object.assign({}, this.def), opt);
        this.validate_opt();
    }
    send(ccode, phone, text, opt) {
        const def = {
            PhoneNumber: ccode + phone,
            Message: text,
        };
        opt = Object.assign(Object.assign({}, def), opt);
        console.log(this.opt, opt);
        const it = new aws_sdk_1.SNS(this.opt);
        return it.publish(opt).promise();
    }
    validate_opt() {
        const o = this.opt;
        if (!o.region || !o.accessKeyId || !o.secretAccessKey) {
            throw new invalid_opt_1.Invalid_opt('Required options: {region}, {accessKeyId}, {secretAccessKey}', 'Pass required opts when constructing class');
        }
        return true;
    }
}
exports.Sms = Sms;
//# sourceMappingURL=sms.js.map