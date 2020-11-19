import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Logger } from '../domain/logger/logger.service';
export declare class AppModule implements NestModule {
    private logger;
    constructor(logger: Logger);
    configure(consumer: MiddlewareConsumer): void;
}
