"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateJsonApiError = exports.GatewayTimeoutError = exports.ServiceUnavailableError = exports.BadGatewayError = exports.NotImplementedError = exports.MalformedError = exports.InternalError = exports.UnsupportedMediaTypeError = exports.RequestTimeoutError = exports.NotAcceptableError = exports.MethodNotAllowedError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = void 0;
const JsonApiError_1 = __importDefault(require("./JsonApiError"));
const AggregateJsonApiError_1 = __importDefault(require("./AggregateJsonApiError"));
exports.AggregateJsonApiError = AggregateJsonApiError_1.default;
class BadRequestError extends JsonApiError_1.default {
}
exports.BadRequestError = BadRequestError;
BadRequestError.id = 'BadRequestError';
BadRequestError.status = '400';
BadRequestError.code = 'BadRequestError';
BadRequestError.title = 'BadRequestError';
BadRequestError.detail = '[BadRequestError] - BadRequestError';
class UnauthorizedError extends JsonApiError_1.default {
}
exports.UnauthorizedError = UnauthorizedError;
UnauthorizedError.id = 'UnauthorizedError';
UnauthorizedError.status = '401';
UnauthorizedError.code = 'UnauthorizedError';
UnauthorizedError.title = 'UnauthorizedError';
UnauthorizedError.detail = '[UnauthorizedError] - UnauthorizedError';
class ForbiddenError extends JsonApiError_1.default {
}
exports.ForbiddenError = ForbiddenError;
ForbiddenError.id = 'ForbiddenError';
ForbiddenError.status = '403';
ForbiddenError.code = 'ForbiddenError';
ForbiddenError.title = 'ForbiddenError';
ForbiddenError.detail = '[ForbiddenError] - ForbiddenError';
class NotFoundError extends JsonApiError_1.default {
}
exports.NotFoundError = NotFoundError;
NotFoundError.id = 'NotFoundError';
NotFoundError.status = '404';
NotFoundError.code = 'NotFoundError';
NotFoundError.title = 'NotFoundError';
NotFoundError.detail = '[NotFoundError] - NotFoundError';
class MethodNotAllowedError extends JsonApiError_1.default {
}
exports.MethodNotAllowedError = MethodNotAllowedError;
MethodNotAllowedError.id = 'MethodNotAllowedError';
MethodNotAllowedError.status = '405';
MethodNotAllowedError.code = 'MethodNotAllowedError';
MethodNotAllowedError.title = 'MethodNotAllowedError';
MethodNotAllowedError.detail = '[MethodNotAllowedError] - MethodNotAllowedError';
class NotAcceptableError extends JsonApiError_1.default {
}
exports.NotAcceptableError = NotAcceptableError;
NotAcceptableError.id = 'NotAcceptableError';
NotAcceptableError.status = '406';
NotAcceptableError.code = 'NotAcceptableError';
NotAcceptableError.title = 'NotAcceptableError';
NotAcceptableError.detail = '[NotAcceptableError] - NotAcceptableError';
class RequestTimeoutError extends JsonApiError_1.default {
}
exports.RequestTimeoutError = RequestTimeoutError;
RequestTimeoutError.id = 'RequestTimeoutError';
RequestTimeoutError.status = '408';
RequestTimeoutError.code = 'RequestTimeoutError';
RequestTimeoutError.title = 'RequestTimeoutError';
RequestTimeoutError.detail = '[RequestTimeoutError] - RequestTimeoutError';
class UnsupportedMediaTypeError extends JsonApiError_1.default {
}
exports.UnsupportedMediaTypeError = UnsupportedMediaTypeError;
UnsupportedMediaTypeError.id = 'UnsupportedMediaTypeError';
UnsupportedMediaTypeError.status = '415';
UnsupportedMediaTypeError.code = 'UnsupportedMediaTypeError';
UnsupportedMediaTypeError.title = 'UnsupportedMediaTypeError';
UnsupportedMediaTypeError.detail = '[UnsupportedMediaTypeError] - UnsupportedMediaTypeError';
class InternalError extends JsonApiError_1.default {
}
exports.InternalError = InternalError;
InternalError.id = 'InternalError';
InternalError.status = '500';
InternalError.code = 'InternalError';
InternalError.title = 'InternalError';
InternalError.detail = '[InternalError] - InternalError';
class MalformedError extends JsonApiError_1.default {
}
exports.MalformedError = MalformedError;
MalformedError.id = 'MalformedError';
MalformedError.status = '400';
MalformedError.code = 'MalformedError';
MalformedError.title = 'MalformedError';
MalformedError.detail = '[MalformedError] - Error in reading malformed JSON';
class NotImplementedError extends JsonApiError_1.default {
}
exports.NotImplementedError = NotImplementedError;
NotImplementedError.id = 'NotImplementedError';
NotImplementedError.status = '501';
NotImplementedError.code = 'NotImplementedError';
NotImplementedError.title = 'NotImplementedError';
NotImplementedError.detail = '[NotImplementedError] - NotImplementedError';
class BadGatewayError extends JsonApiError_1.default {
}
exports.BadGatewayError = BadGatewayError;
BadGatewayError.id = 'BadGatewayError';
BadGatewayError.status = '502';
BadGatewayError.code = 'BadGatewayError';
BadGatewayError.title = 'BadGatewayError';
BadGatewayError.detail = '[BadGatewayError] - BadGatewayError';
class ServiceUnavailableError extends JsonApiError_1.default {
}
exports.ServiceUnavailableError = ServiceUnavailableError;
ServiceUnavailableError.id = 'ServiceUnavailableError';
ServiceUnavailableError.status = '503';
ServiceUnavailableError.code = 'ServiceUnavailableError';
ServiceUnavailableError.title = 'ServiceUnavailableError';
ServiceUnavailableError.detail = '[ServiceUnavailableError] - ServiceUnavailableError';
class GatewayTimeoutError extends JsonApiError_1.default {
}
exports.GatewayTimeoutError = GatewayTimeoutError;
GatewayTimeoutError.id = 'GatewayTimeoutError';
GatewayTimeoutError.status = '504';
GatewayTimeoutError.code = 'GatewayTimeoutError';
GatewayTimeoutError.title = 'GatewayTimeoutError';
GatewayTimeoutError.detail = '[GatewayTimeoutError] - GatewayTimeoutError';
exports.default = JsonApiError_1.default;
