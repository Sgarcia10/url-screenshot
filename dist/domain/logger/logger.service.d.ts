import { LoggerService, Logger as NestLogger } from '@nestjs/common';
export declare class Logger extends NestLogger implements LoggerService {
    private readonly logger;
    constructor(context?: string);
    log(message: string): void;
    error(message: any, meta?: any): void;
    warn(message: string): void;
    debug(message: string): void;
    verbose(message: string): void;
    private printFormat;
    private logs;
    get stream(): {
        write: (message: any) => void;
    };
}
