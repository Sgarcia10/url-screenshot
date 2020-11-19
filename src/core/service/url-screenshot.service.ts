import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { S3Provider } from '../provider/s3.provider';
import { PuppeteerProvider } from '../provider/puppeteer.provider';
import { IUrlScreenshotService } from 'src/domain/interfaces/url-screenshot-service.interface';
import { ScreenshotCreateResponseDto } from 'src/common/dtos/response/screenshot-response-create.dto';
import { ConfigService } from 'src/config/config.service';
import { HttpDomainException } from 'src/domain/exceptions/http.exception';

@Injectable()
export class UrlScreenshotService implements IUrlScreenshotService {
  constructor(
    private s3Provider: S3Provider,
    private puppeteerProvider: PuppeteerProvider,
    private configService: ConfigService
  ) {}

  async create(url: string): Promise<ScreenshotCreateResponseDto> {
    let pathTmp = '/tmp';
    if (this.configService.env === 'local') pathTmp = path.resolve('tmp');
    const fileName = Date.now().toString() + '.png';
    const pathS3 = 'url-screenshot';

    if (!fs.existsSync(pathTmp)) {
      fs.mkdirSync(pathTmp);
    }

    try {
      await this.puppeteerProvider.screenshot(url, pathTmp, fileName);
      const urlImage = await this.s3Provider.uploadFile(pathTmp, pathS3, fileName);
      fs.unlinkSync(path.join(pathTmp, fileName));

      return {
        urlImage
      };
    } catch (error) {
      throw new HttpDomainException({ message: 'Failed to create image' });
    }
  }
}
