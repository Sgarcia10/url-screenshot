import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { HttpDomainException } from './http.exception';
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpDomainException, host: ArgumentsHost): void;
}
