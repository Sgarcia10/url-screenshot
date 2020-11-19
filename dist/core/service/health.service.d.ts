import { OnModuleInit } from '@nestjs/common';
import { HealthDto } from 'src/common/dtos/response/health.dto';
import { IHealthService } from 'src/domain/interfaces/health-service.interface';
export declare class HealthService implements IHealthService, OnModuleInit {
    private readonly logger;
    onModuleInit(): void;
    get(): HealthDto;
}
