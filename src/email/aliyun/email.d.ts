import { Config } from '@alicloud/pop-core';
import { Base_email } from '../base_email';
export interface T_opt_send {
    AccountName?: string;
    AddressType?: number;
    ReplyToAddress?: boolean;
    ToAddress?: string;
    Subject?: string;
    HtmlBody?: string;
}
export interface T_opt extends Partial<Config> {
}
export declare class Email extends Base_email<T_opt> {
    def: T_opt;
    constructor(opt: T_opt);
    send(from: string, to: string, subject: string, content?: string, opt?: T_opt_send): Promise<any> | any;
    validate_opt(): true;
}
