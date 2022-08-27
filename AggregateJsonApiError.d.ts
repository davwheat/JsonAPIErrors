import AggregateError from 'aggregate-error';
declare class AggregateJsonApiError extends AggregateError {
    status: any;
    errors: any;
    constructor(errors: any, status: any);
}
export default AggregateJsonApiError;
