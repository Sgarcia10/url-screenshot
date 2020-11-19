import { ScreenshotCreateResponseDto } from 'src/common/dtos/response/screenshot-response-create.dto';

export interface IUrlScreenshotService {
  create: (url: string) => Promise<ScreenshotCreateResponseDto>;
}
