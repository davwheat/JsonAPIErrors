"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aggregate_error_1 = __importDefault(require("aggregate-error"));
const JsonApiError_1 = __importDefault(require("./JsonApiError"));
class AggregateJsonApiError extends aggregate_error_1.default {
    constructor(errors, status) {
        if (!Number.isInteger(status)) {
            throw new TypeError(`Expected status to be an Int, got ${typeof status}`);
        }
        // filter to get errors which is instance of JsonApiError
        const validErrors = errors.filter(error => error instanceof JsonApiError_1.default);
        super(validErrors);
        this.errors = validErrors;
        this.status = status;
    }
}
exports.default = AggregateJsonApiError;
