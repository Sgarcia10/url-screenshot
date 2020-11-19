import { HttpModule, Module } from '@nestjs/common';
import { UrlScreenshotService } from 'src/core/service/url-screenshot.service';
import { S3Provider } from 'src/core/provider/s3.provider';
import { UrlScreenshotController } from '../controllers/url-screenshot.controller';
import { PuppeteerProvider } from 'src/core/provider/puppeteer.provider';

@Module({
  imports: [HttpModule],
  controllers: [UrlScreenshotController],
  providers: [UrlScreenshotService, S3Provider, PuppeteerProvider]
})
export class UrlScreenshotModule {}
