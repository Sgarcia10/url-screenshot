import { Module } from '@nestjs/common';
import { HealthController } from '../controllers/health.controller';
import { HealthService } from 'src/core/service/health.service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [HealthService]
})
export class HealthModule {}
