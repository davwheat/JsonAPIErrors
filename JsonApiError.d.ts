import { CustomError } from 'ts-custom-error';
interface ILink {
    about: string;
}
interface ISource {
    pointer: string;
    parameter: string;
}
interface IMeta {
    [key: string]: any;
}
interface IJsonApiErrorOptionalField {
    id?: string;
    link?: ILink;
    code?: string;
    title?: string;
    detail?: string;
    source?: ISource;
    meta?: IMeta;
}
declare class JsonApiError extends CustomError {
    static id: string;
    static link: ILink;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
    static source: ISource;
    static meta: IMeta;
    private _error;
    static readonly allowedProps: string[];
    constructor(input: any);
    constructor(input: IJsonApiErrorOptionalField);
    toJSON(): any;
}
export default JsonApiError;
