import { HttpService } from '@nestjs/common';
import { S3Provider } from '../provider/s3.provider';
import { IUrlScreenshotService } from 'src/domain/interfaces/url-screenshot-service.interface';
import { ScreenshotCreateResponseDto } from 'src/common/dtos/response/screenshot-response-create.dto';
export declare class UrlScreenshotService implements IUrlScreenshotService {
    private s3Provider;
    private httpService;
    constructor(s3Provider: S3Provider, httpService: HttpService);
    create(url: string): Promise<ScreenshotCreateResponseDto>;
}
