/* eslint-disable @typescript-eslint/no-unused-vars */
import { Browser, Page, ElementHandle, BinaryScreenShotOptions } from 'puppeteer';

export const stubPuppeteer = {
  launch() {
    return Promise.resolve(stubBrowser);
  }
};

export const stubBrowser = ({
  newPage() {
    return Promise.resolve(stubPage);
  },
  close() {
    return Promise.resolve();
  }
} as unknown) as Browser;

export const stubPage = ({
  goto(url: string) {
    return Promise.resolve();
  },
  screenshot(options: BinaryScreenShotOptions): Promise<Buffer> {
    return Promise.resolve(Buffer.from(''));
  }
} as unknown) as Page;
