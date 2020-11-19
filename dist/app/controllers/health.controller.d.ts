import { HealthDto } from 'src/common/dtos/response/health.dto';
import { IHealthService } from 'src/domain/interfaces/health-service.interface';
import { IHealth } from 'src/api/health.interface copy';
export declare class HealthController implements IHealth {
    private service;
    private logger;
    constructor(service: IHealthService);
    get(): HealthDto;
}
