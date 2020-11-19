import { ValidationError } from 'class-validator';
import { HttpDomainException } from './http.exception';
export declare class ClassValidationException extends HttpDomainException {
    constructor(errors: ValidationError[]);
}
