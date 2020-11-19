import { IUrlScreenshot } from 'src/api/url-screenshot.interface';
import { IUrlScreenshotService } from 'src/domain/interfaces/url-screenshot-service.interface';
import { ScreenshotCreateResponseDto } from 'src/common/dtos/response/screenshot-response-create.dto';
import { ScreenshotCreateRequestDto } from 'src/common/dtos/request/screeshot-create-request.dto';
export declare class UrlScreenshotController implements IUrlScreenshot {
    private service;
    private logger;
    constructor(service: IUrlScreenshotService);
    create(body: ScreenshotCreateRequestDto): Promise<ScreenshotCreateResponseDto>;
}
