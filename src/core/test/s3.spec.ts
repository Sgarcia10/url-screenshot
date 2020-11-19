/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-empty-function */
import { S3Provider } from '../provider/s3.provider';
import * as mock_fs from 'mock-fs';
import * as path from 'path';
import { ConfigService } from 'src/config/config.service';

mock_fs({
  '/tmp/1605767884811.png': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
  node_modules: mock_fs.load(path.resolve('node_modules'))
});

const mS3Instance = {
  upload: jest.fn().mockReturnThis(),
  promise: jest.fn()
};

jest.mock('aws-sdk', () => {
  return { S3: jest.fn(() => mS3Instance) };
});

describe('PuppeteerProvider', () => {
  let s3Provider: S3Provider;

  beforeEach(() => {
    const configService = new ConfigService();
    s3Provider = new S3Provider(configService);
  });

  describe('screenshot', () => {
    it('should return an array of cats', async () => {
      const urlExpected = 'https://test-geldzero.s3.us-east-2.amazonaws.com/url-screenshot/1605767884811.png';
      mS3Instance.promise.mockResolvedValueOnce({
        Location: 'https://test-geldzero.s3.us-east-2.amazonaws.com/url-screenshot/1605767884811.png'
      });
      const url = await s3Provider.uploadFile('/tmp', '/output', '1605767884811.png');
      expect(url).toBe(urlExpected);
    }, 10000);
  });

  afterEach(() => {
    mock_fs.restore();
  });
});
