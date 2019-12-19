import { SNS } from 'aws-sdk';
import { Base_sms } from '../base_sms';
declare type T_opt = SNS.Types.ClientConfiguration;
declare type T_opt_send = SNS.Types.PublishInput;
export declare class Sms extends Base_sms<T_opt> {
    def: {
        apiVersion: string;
    };
    constructor(opt: T_opt);
    send(ccode: string, phone: string, text: string, opt?: T_opt_send): Promise<any>;
    validate_opt(): true;
}
export {};
