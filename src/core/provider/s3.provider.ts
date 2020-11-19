import * as aws from 'aws-sdk';
import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class S3Provider {
  private s3: aws.S3;

  constructor(private configService: ConfigService) {
    aws.config.update({
      secretAccessKey: configService.s3SecretAccessKey,
      accessKeyId: configService.s3AccessKey,
      region: configService.s3Region
    });

    this.s3 = new aws.S3();
  }

  get S3(): aws.S3 {
    return this.s3;
  }

  uploadFile(pathInput: string, pathOutput: string, fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileContent = fs.readFileSync(path.join(pathInput, fileName));
      const params: PutObjectRequest = {
        Bucket: this.configService.s3Bucket,
        Key: `${pathOutput}/${fileName}`,
        Body: fileContent,
        ContentType: 'image/png',
        ACL: 'public-read'
      };
      this.s3.upload(params, (s3Err, dataS3) => {
        if (s3Err) {
          return reject(s3Err);
        }

        return resolve(dataS3.Location);
      });
    });
  }
}
