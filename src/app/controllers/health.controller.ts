import { Controller, Get, Inject } from '@nestjs/common';
import { HealthService } from '../../core/service/health.service';
import { Logger } from '../../domain/logger/logger.service';
import { HealthRoutes } from '../../common/routes/health.route';
import { HealthDto } from 'src/common/dtos/response/health.dto';
import { IHealthService } from 'src/domain/interfaces/health-service.interface';
import { IHealth } from 'src/api/health.interface copy';

@Controller(HealthRoutes.health)
export class HealthController implements IHealth {
  @Inject()
  private logger: Logger;
  constructor(@Inject(HealthService) private service: IHealthService) {}

  @Get()
  get(): HealthDto {
    return this.service.get();
  }
}
