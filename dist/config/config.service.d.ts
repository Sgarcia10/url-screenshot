export declare class ConfigService {
    private readonly envConfig;
    constructor();
    private getEnvVar;
    private validateInput;
    get s3SecretAccessKey(): string;
    get s3AccessKey(): string;
    get s3Bucket(): string;
    get s3Region(): string;
    get env(): string;
    get port(): number;
    get(key: string): string;
}
