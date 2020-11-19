/* eslint-disable @typescript-eslint/no-empty-function */
import { stubPuppeteer } from './mock/puppeteer.mock';
import * as chromium from 'chrome-aws-lambda';
import { PuppeteerProvider } from '../provider/puppeteer.provider';
jest.mock(
  'chrome-aws-lambda',
  jest.fn(() => {
    return {
      puppeteer: { launch: jest.fn(stubPuppeteer.launch) }
    };
  })
);

describe('PuppeteerProvider', () => {
  let puppeteerProvider: PuppeteerProvider;

  beforeEach(() => {
    puppeteerProvider = new PuppeteerProvider();
  });

  describe('screenshot', () => {
    it('should return an array of cats', async () => {
      await puppeteerProvider.screenshot('', '', '');
      expect(chromium.puppeteer.launch).toHaveBeenCalled();
    });
  });
});
