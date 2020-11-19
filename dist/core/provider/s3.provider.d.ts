import * as aws from 'aws-sdk';
import { ConfigService } from 'src/config/config.service';
export declare class S3Provider {
    private configService;
    private s3;
    constructor(configService: ConfigService);
    get S3(): aws.S3;
    uploadFile(pathInput: string, pathOutput: string, fileName: string): Promise<string>;
}
