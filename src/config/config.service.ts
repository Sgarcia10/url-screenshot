import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';
dotenv.config();

const ENV_VARIABLES = {
  NODE_ENV: '',
  PORT: '',
  S3_SECRET_KEY: '',
  S3_ACCESS_KEY: '',
  S3_BUCKET: '',
  S3_REGION: ''
};
type EnvVariablesType = typeof ENV_VARIABLES;

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvVariablesType;

  constructor() {
    const envVars = ENV_VARIABLES;
    Object.keys(ENV_VARIABLES).forEach((name) => (envVars[name] = this.getEnvVar(name)));
    this.envConfig = this.validateInput(envVars);
  }

  private getEnvVar(name: string): string {
    return process.env[name];
  }

  private validateInput(envConfig: EnvVariablesType): EnvVariablesType {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string().default('local').valid('local', 'development', 'production', 'test'),
      PORT: Joi.number().default(3000),
      S3_SECRET_KEY: Joi.string().required(),
      S3_ACCESS_KEY: Joi.string().required(3000),
      S3_BUCKET: Joi.string().required(3000),
      S3_REGION: Joi.string().required(3000)
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
    if (error) {
      throw new Error(error);
    }

    return validatedEnvConfig;
  }

  get s3SecretAccessKey(): string {
    return String(this.envConfig.S3_SECRET_KEY);
  }

  get s3AccessKey(): string {
    return String(this.envConfig.S3_ACCESS_KEY);
  }

  get s3Bucket(): string {
    return String(this.envConfig.S3_BUCKET);
  }

  get s3Region(): string {
    return String(this.envConfig.S3_REGION);
  }

  get env(): string {
    return String(this.envConfig.NODE_ENV);
  }

  get port(): number {
    return Number(this.envConfig.PORT);
  }

  get(key: string): string {
    const variable = this.getEnvVar(key);
    if (!variable) {
      throw new Error('Config variable does not exist: ' + key);
    }

    return variable;
  }
}
