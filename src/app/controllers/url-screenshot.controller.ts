import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Logger } from '../../domain/logger/logger.service';
import { IUrlScreenshot } from 'src/api/url-screenshot.interface';
import { UrlScreenshotRoutes } from 'src/common/routes/url-screenshot.route';
import { UrlScreenshotService } from 'src/core/service/url-screenshot.service';
import { IUrlScreenshotService } from 'src/domain/interfaces/url-screenshot-service.interface';
import { ScreenshotCreateResponseDto } from 'src/common/dtos/response/screenshot-response-create.dto';
import { ScreenshotCreateRequestDto } from 'src/common/dtos/request/screeshot-create-request.dto';

@Controller(UrlScreenshotRoutes.base)
export class UrlScreenshotController implements IUrlScreenshot {
  @Inject()
  private logger: Logger;
  constructor(@Inject(UrlScreenshotService) private service: IUrlScreenshotService) {}

  @Post()
  create(@Body() body: ScreenshotCreateRequestDto): Promise<ScreenshotCreateResponseDto> {
    return this.service.create(body.url);
  }
}
