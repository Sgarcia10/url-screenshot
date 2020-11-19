import { HttpService, Injectable } from '@nestjs/common';
import * as chromium from 'chrome-aws-lambda';
import * as fs from 'fs';
import * as path from 'path';
import { S3Provider } from '../provider/s3.provider';
import { IUrlScreenshotService } from 'src/domain/interfaces/url-screenshot-service.interface';
import { ScreenshotCreateResponseDto } from 'src/common/dtos/response/screenshot-response-create.dto';

@Injectable()
export class UrlScreenshotService implements IUrlScreenshotService {
  constructor(private s3Provider: S3Provider, private httpService: HttpService) {}

  async create(url: string): Promise<ScreenshotCreateResponseDto> {
    const pathTmp = '/tmp';
    const fileName = Date.now().toString() + '.png';
    const pathS3 = 'url-screenshot';

    if (!fs.existsSync(pathTmp)) {
      fs.mkdirSync(pathTmp);
    }

    const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: path.join(pathTmp, fileName) });
    const urlImage = await this.s3Provider.uploadFile(pathTmp, pathS3, fileName);
    fs.unlinkSync(path.join(pathTmp, fileName));

    await browser.close();

    return {
      urlImage
    };
  }
}
