import JsonApiError from './JsonApiError';
import AggregateJsonApiError from './AggregateJsonApiError';
export declare class BadRequestError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class UnauthorizedError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class ForbiddenError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class NotFoundError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class MethodNotAllowedError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class NotAcceptableError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class RequestTimeoutError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class UnsupportedMediaTypeError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class InternalError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class MalformedError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class NotImplementedError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class BadGatewayError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class ServiceUnavailableError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export declare class GatewayTimeoutError extends JsonApiError {
    static id: string;
    static status: string;
    static code: string;
    static title: string;
    static detail: string;
}
export { AggregateJsonApiError };
export default JsonApiError;
