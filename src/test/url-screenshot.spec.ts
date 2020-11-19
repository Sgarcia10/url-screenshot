/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { HttpModule, INestApplication } from '@nestjs/common';

import { UrlScreenshotController } from 'src/app/controllers/url-screenshot.controller';
import { UrlScreenshotService } from 'src/core/service/url-screenshot.service';
import { S3Provider } from 'src/core/provider/s3.provider';
import { ConfigModule } from 'src/config/config.module';
import { LoggerModule } from 'src/domain/logger/logger.module';
import * as mock_fs from 'mock-fs';
import * as path from 'path';
import { PuppeteerProvider } from 'src/core/provider/puppeteer.provider';
import { ScreenshotCreateResponseDto } from 'src/common/dtos/response/screenshot-response-create.dto';

mock_fs({
  '/tmp/1605767884811.png': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
  node_modules: mock_fs.load(path.resolve('node_modules'))
});

describe('UrlScreenshot (e2e)', () => {
  let app: INestApplication;
  const puppeteerProvider = { screenshot: (url: string, pathTmp: string, fileName: string) => null };
  const s3Provider = {
    uploadFile: (pathInput: string, pathOutput: string, fileName: string) =>
      'https://test-geldzero.s3.us-east-2.amazonaws.com/url-screenshot/1605767884811.png'
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule, LoggerModule],
      controllers: [UrlScreenshotController],
      providers: [UrlScreenshotService, S3Provider, PuppeteerProvider]
    })
      .overrideProvider(PuppeteerProvider)
      .useValue(puppeteerProvider)
      .overrideProvider(S3Provider)
      .useValue(s3Provider)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('get', () => {
    jest.mock('fs');
    it('should return image url', () => {
      const urlExpected: ScreenshotCreateResponseDto = {
        urlImage: 'https://test-geldzero.s3.us-east-2.amazonaws.com/url-screenshot/1605767884811.png'
      };

      jest.spyOn(Date, 'now').mockReturnValue(1605767884811);

      return request(app.getHttpServer()).post('/url-screenshot').expect(201).expect(urlExpected);
    });
  });

  afterEach(() => {
    mock_fs.restore();
  });

  afterAll(async () => {
    await app.close();
  });
});
