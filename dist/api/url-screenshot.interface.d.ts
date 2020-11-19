import { ScreenshotCreateRequestDto } from 'src/common/dtos/request/screeshot-create-request.dto';
import { ScreenshotCreateResponseDto } from 'src/common/dtos/response/screenshot-response-create.dto';
export interface IUrlScreenshot {
    create(body: ScreenshotCreateRequestDto): Promise<ScreenshotCreateResponseDto>;
}
