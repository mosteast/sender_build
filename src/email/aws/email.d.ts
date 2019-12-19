import { Base_email } from '../base_email';
import { SES } from 'aws-sdk';
declare type Config = SES.Types.ClientConfiguration;
export interface T_opt_send extends SES.Types.SendEmailRequest {
}
export interface T_opt extends Partial<Config> {
}
export declare class Email extends Base_email<T_opt> {
    def: T_opt;
    constructor(opt: T_opt);
    send(from: string, to: string | string[], subject: string, content: string, opt?: T_opt_send): Promise<any> | any;
    validate_opt(): true;
}
export {};
