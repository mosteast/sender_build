"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Core = require("@alicloud/pop-core");
function aliyun_send(phone, sign, template_id, template_param, config) {
    const default_config = {
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25',
    };
    const client = new Core(Object.assign(Object.assign({}, default_config), config));
    const params = {
        PhoneNumbers: phone,
        SignName: sign,
        TemplateCode: template_id,
        TemplateParam: JSON.stringify(template_param),
    };
    const requestOption = {
        method: 'POST',
    };
    return client.request('SendSms', params, requestOption);
}
exports.aliyun_send = aliyun_send;
//# sourceMappingURL=aliyun_send.js.map