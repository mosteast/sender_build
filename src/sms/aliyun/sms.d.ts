import { Base_sms } from '../base_sms';
import { Config } from '@alicloud/pop-core';
export declare type T_opt = Partial<Config> | Config;
export declare class Sms extends Base_sms<T_opt> {
    def: T_opt;
    constructor(opt: T_opt);
    send(ccode: string, phone: string, content: {
        sign: string;
        template_id: string;
        template_arg: any;
    }, opt?: Config | any): Promise<any>;
    validate_opt(): true;
}
