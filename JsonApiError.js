"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_custom_error_1 = require("ts-custom-error");
class JsonApiError extends ts_custom_error_1.CustomError {
    constructor(input) {
        let opts = {};
        const inputType = typeof input;
        switch (inputType) {
            case 'string':
                opts.detail = input;
                break;
            case 'object':
                opts = Object.keys(input).reduce((acc, k) => {
                    if (k && input[k] && JsonApiError.allowedProps.includes(k)) {
                        acc[k] = input[k];
                    }
                    return acc;
                }, {});
                break;
            default:
                throw new TypeError(`Could not parse ${input} as JsonApiError options`);
        }
        super(opts.detail);
        this._error = JsonApiError.allowedProps.reduce((error, propName) => {
            if (opts[propName]) {
                error[propName] = opts[propName];
            }
            else if (this.constructor[propName]) {
                error[propName] = this.constructor[propName];
            }
            return error;
        }, {});
    }
    toJSON() {
        return this._error;
    }
}
JsonApiError.allowedProps = [
    'id',
    'link',
    'status',
    'code',
    'title',
    'detail',
    'source',
    'meta'
];
exports.default = JsonApiError;
