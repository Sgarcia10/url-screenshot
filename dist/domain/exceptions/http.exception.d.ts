import { HttpException } from '@nestjs/common';
interface HttpDomainExceptionOptions {
    message: string;
    status?: number;
    code?: number;
    error?: any;
}
export declare class HttpDomainException extends HttpException {
    code: number;
    error: any;
    constructor({ status, ...options }: HttpDomainExceptionOptions);
    getCode(): number;
    getError(): any;
    getBody(): Record<string, any>;
    toString(): string;
}
export {};
