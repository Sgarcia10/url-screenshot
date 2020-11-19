(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 664:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(578);
const logger_module_1 = __webpack_require__(385);
const morgan = __webpack_require__(150);
const logger_service_1 = __webpack_require__(734);
const health_module_1 = __webpack_require__(994);
const config_module_1 = __webpack_require__(125);
const url_screenshot_module_1 = __webpack_require__(579);
let AppModule = class AppModule {
    constructor(logger) {
        this.logger = logger;
    }
    configure(consumer) {
        consumer
            .apply(morgan('tiny', { stream: this.logger.stream }))
            .exclude({ path: 'health', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [logger_module_1.LoggerModule, config_module_1.ConfigModule, health_module_1.HealthModule, url_screenshot_module_1.UrlScreenshotModule]
    }),
    __metadata("design:paramtypes", [logger_service_1.Logger])
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 621:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthController = void 0;
const common_1 = __webpack_require__(578);
const health_service_1 = __webpack_require__(635);
const logger_service_1 = __webpack_require__(734);
const health_route_1 = __webpack_require__(882);
const health_dto_1 = __webpack_require__(287);
let HealthController = class HealthController {
    constructor(service) {
        this.service = service;
    }
    get() {
        return this.service.get();
    }
};
__decorate([
    common_1.Inject(),
    __metadata("design:type", logger_service_1.Logger)
], HealthController.prototype, "logger", void 0);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", health_dto_1.HealthDto)
], HealthController.prototype, "get", null);
HealthController = __decorate([
    common_1.Controller(health_route_1.HealthRoutes.health),
    __param(0, common_1.Inject(health_service_1.HealthService)),
    __metadata("design:paramtypes", [Object])
], HealthController);
exports.HealthController = HealthController;


/***/ }),

/***/ 353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlScreenshotController = void 0;
const common_1 = __webpack_require__(578);
const logger_service_1 = __webpack_require__(734);
const url_screenshot_route_1 = __webpack_require__(268);
const url_screenshot_service_1 = __webpack_require__(368);
const screeshot_create_request_dto_1 = __webpack_require__(185);
let UrlScreenshotController = class UrlScreenshotController {
    constructor(service) {
        this.service = service;
    }
    create(body) {
        return this.service.create(body.url);
    }
};
__decorate([
    common_1.Inject(),
    __metadata("design:type", logger_service_1.Logger)
], UrlScreenshotController.prototype, "logger", void 0);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [screeshot_create_request_dto_1.ScreenshotCreateRequestDto]),
    __metadata("design:returntype", Promise)
], UrlScreenshotController.prototype, "create", null);
UrlScreenshotController = __decorate([
    common_1.Controller(url_screenshot_route_1.UrlScreenshotRoutes.base),
    __param(0, common_1.Inject(url_screenshot_service_1.UrlScreenshotService)),
    __metadata("design:paramtypes", [Object])
], UrlScreenshotController);
exports.UrlScreenshotController = UrlScreenshotController;


/***/ }),

/***/ 812:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
const core_1 = __webpack_require__(84);
const express = __webpack_require__(127);
const app_module_1 = __webpack_require__(664);
const config_service_1 = __webpack_require__(846);
const common_1 = __webpack_require__(578);
const logger_service_1 = __webpack_require__(734);
const class_validation_exception_1 = __webpack_require__(148);
const http_exception_filter_1 = __webpack_require__(932);
const platform_express_1 = __webpack_require__(804);
const aws_serverless_express_1 = __webpack_require__(425);
let cachedServer;
let bootstrap;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'local') {
    bootstrap = async () => {
        const logger = new logger_service_1.Logger();
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            logger
        });
        const configService = app.get(config_service_1.ConfigService);
        app.useLogger(logger);
        app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
        app.useGlobalPipes(new common_1.ValidationPipe({
            exceptionFactory: (errors) => {
                const exception = new class_validation_exception_1.ClassValidationException(errors);
                logger.error(exception.toString());
                return exception;
            }
        }));
        await app.listen(configService.port);
    };
    bootstrap();
}
else {
    bootstrap = async () => {
        const expressApp = express();
        const logger = new logger_service_1.Logger();
        const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp), {
            logger
        });
        app.useLogger(logger);
        app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
        app.useGlobalPipes(new common_1.ValidationPipe({
            exceptionFactory: (errors) => {
                const exception = new class_validation_exception_1.ClassValidationException(errors);
                logger.error(exception.toString());
                return exception;
            }
        }));
        await app.init();
        return aws_serverless_express_1.createServer(expressApp);
    };
}
async function handler(event, context) {
    if (!cachedServer) {
        const server = await bootstrap();
        cachedServer = server;
    }
    return aws_serverless_express_1.proxy(cachedServer, event, context, 'PROMISE').promise;
}
exports.handler = handler;


/***/ }),

/***/ 994:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthModule = void 0;
const common_1 = __webpack_require__(578);
const health_controller_1 = __webpack_require__(621);
const health_service_1 = __webpack_require__(635);
let HealthModule = class HealthModule {
};
HealthModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [health_controller_1.HealthController],
        providers: [health_service_1.HealthService]
    })
], HealthModule);
exports.HealthModule = HealthModule;


/***/ }),

/***/ 579:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlScreenshotModule = void 0;
const common_1 = __webpack_require__(578);
const url_screenshot_service_1 = __webpack_require__(368);
const s3_provider_1 = __webpack_require__(993);
const url_screenshot_controller_1 = __webpack_require__(353);
let UrlScreenshotModule = class UrlScreenshotModule {
};
UrlScreenshotModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule],
        controllers: [url_screenshot_controller_1.UrlScreenshotController],
        providers: [url_screenshot_service_1.UrlScreenshotService, s3_provider_1.S3Provider]
    })
], UrlScreenshotModule);
exports.UrlScreenshotModule = UrlScreenshotModule;


/***/ }),

/***/ 185:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenshotCreateRequestDto = void 0;
const class_validator_1 = __webpack_require__(516);
class ScreenshotCreateRequestDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ScreenshotCreateRequestDto.prototype, "url", void 0);
exports.ScreenshotCreateRequestDto = ScreenshotCreateRequestDto;


/***/ }),

/***/ 287:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthDto = void 0;
class HealthDto {
}
exports.HealthDto = HealthDto;


/***/ }),

/***/ 882:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthRoutes = void 0;
var HealthRoutes;
(function (HealthRoutes) {
    HealthRoutes["health"] = "health";
})(HealthRoutes = exports.HealthRoutes || (exports.HealthRoutes = {}));


/***/ }),

/***/ 268:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlScreenshotRoutes = void 0;
var UrlScreenshotRoutes;
(function (UrlScreenshotRoutes) {
    UrlScreenshotRoutes["base"] = "url-screenshot";
})(UrlScreenshotRoutes = exports.UrlScreenshotRoutes || (exports.UrlScreenshotRoutes = {}));


/***/ }),

/***/ 125:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigModule = void 0;
const common_1 = __webpack_require__(578);
const config_service_1 = __webpack_require__(846);
let ConfigModule = class ConfigModule {
};
ConfigModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [config_service_1.ConfigService],
        exports: [config_service_1.ConfigService]
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;


/***/ }),

/***/ 846:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const dotenv = __webpack_require__(334);
const Joi = __webpack_require__(414);
const common_1 = __webpack_require__(578);
dotenv.config();
const ENV_VARIABLES = {
    NODE_ENV: '',
    PORT: '',
    S3_SECRET_KEY: '',
    S3_ACCESS_KEY: '',
    S3_BUCKET: '',
    S3_REGION: ''
};
let ConfigService = class ConfigService {
    constructor() {
        const envVars = ENV_VARIABLES;
        Object.keys(ENV_VARIABLES).forEach((name) => (envVars[name] = this.getEnvVar(name)));
        this.envConfig = this.validateInput(envVars);
    }
    getEnvVar(name) {
        return process.env[name];
    }
    validateInput(envConfig) {
        const envVarsSchema = Joi.object({
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
    get s3SecretAccessKey() {
        return String(this.envConfig.S3_SECRET_KEY);
    }
    get s3AccessKey() {
        return String(this.envConfig.S3_ACCESS_KEY);
    }
    get s3Bucket() {
        return String(this.envConfig.S3_BUCKET);
    }
    get s3Region() {
        return String(this.envConfig.S3_REGION);
    }
    get env() {
        return String(this.envConfig.NODE_ENV);
    }
    get port() {
        return Number(this.envConfig.PORT);
    }
    get(key) {
        const variable = this.getEnvVar(key);
        if (!variable) {
            throw new Error('Config variable does not exist: ' + key);
        }
        return variable;
    }
};
ConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
exports.ConfigService = ConfigService;


/***/ }),

/***/ 993:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.S3Provider = void 0;
const aws = __webpack_require__(480);
const fs = __webpack_require__(747);
const path = __webpack_require__(622);
const common_1 = __webpack_require__(578);
const config_service_1 = __webpack_require__(846);
let S3Provider = class S3Provider {
    constructor(configService) {
        this.configService = configService;
        aws.config.update({
            secretAccessKey: configService.s3SecretAccessKey,
            accessKeyId: configService.s3AccessKey,
            region: configService.s3Region
        });
        this.s3 = new aws.S3();
    }
    get S3() {
        return this.s3;
    }
    uploadFile(pathInput, pathOutput, fileName) {
        return new Promise((resolve, reject) => {
            const fileContent = fs.readFileSync(path.join(pathInput, fileName));
            const params = {
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
};
S3Provider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], S3Provider);
exports.S3Provider = S3Provider;


/***/ }),

/***/ 635:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HealthService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthService = void 0;
const common_1 = __webpack_require__(578);
const logger_service_1 = __webpack_require__(734);
let HealthService = HealthService_1 = class HealthService {
    onModuleInit() {
        this.logger.setContext(HealthService_1.name);
    }
    get() {
        return { status: 'UP' };
    }
};
__decorate([
    common_1.Inject(),
    __metadata("design:type", logger_service_1.Logger)
], HealthService.prototype, "logger", void 0);
HealthService = HealthService_1 = __decorate([
    common_1.Injectable()
], HealthService);
exports.HealthService = HealthService;


/***/ }),

/***/ 368:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlScreenshotService = void 0;
const common_1 = __webpack_require__(578);
const chromium = __webpack_require__(386);
const fs = __webpack_require__(747);
const path = __webpack_require__(622);
const s3_provider_1 = __webpack_require__(993);
let UrlScreenshotService = class UrlScreenshotService {
    constructor(s3Provider, httpService) {
        this.s3Provider = s3Provider;
        this.httpService = httpService;
    }
    async create(url) {
        const pathTmp = '/tmp';
        const fileName = Date.now().toString() + '.png';
        const pathS3 = 'url-screenshot';
        if (!fs.existsSync(pathTmp)) {
            fs.mkdirSync(pathTmp);
        }
        const browser = await chromium.puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
            ignoreHTTPSErrors: true
        });
        const page = await browser.newPage();
        await page.goto(url);
        await page.screenshot({ path: path.join(pathTmp, fileName) });
        const urlImage = await this.s3Provider.uploadFile(pathTmp, pathS3, fileName);
        fs.unlinkSync(path.join(pathTmp, fileName));
        await browser.close();
        return {
            urlImage
        };
    }
};
UrlScreenshotService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [s3_provider_1.S3Provider, common_1.HttpService])
], UrlScreenshotService);
exports.UrlScreenshotService = UrlScreenshotService;


/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassValidationException = void 0;
const http_exception_1 = __webpack_require__(464);
class ClassValidationException extends http_exception_1.HttpDomainException {
    constructor(errors) {
        const message = 'invalid params';
        const error = {
            validators: errors.map((e) => e.constraints)
        };
        super({ message, error });
    }
}
exports.ClassValidationException = ClassValidationException;


/***/ }),

/***/ 932:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(578);
const http_exception_1 = __webpack_require__(464);
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const body = exception.getBody();
        response.status(status).json(Object.assign({}, body));
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(http_exception_1.HttpDomainException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),

/***/ 464:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpDomainException = void 0;
const common_1 = __webpack_require__(578);
class HttpDomainException extends common_1.HttpException {
    constructor(_a) {
        var { status = common_1.HttpStatus.BAD_REQUEST } = _a, options = __rest(_a, ["status"]);
        super(options.message, status);
        this.code = options.code;
        this.error = options.error;
    }
    getCode() {
        return this.code;
    }
    getError() {
        return this.error;
    }
    getBody() {
        return { message: this.message, code: this.code, error: this.error };
    }
    toString() {
        return this.message;
    }
}
exports.HttpDomainException = HttpDomainException;


/***/ }),

/***/ 385:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
const common_1 = __webpack_require__(578);
const logger_service_1 = __webpack_require__(734);
let LoggerModule = class LoggerModule {
};
LoggerModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [],
        providers: [logger_service_1.Logger],
        exports: [logger_service_1.Logger]
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;


/***/ }),

/***/ 734:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const common_1 = __webpack_require__(578);
const winston_1 = __webpack_require__(944);
const chalk = __webpack_require__(242);
const util = __webpack_require__(669);
let Logger = class Logger extends common_1.Logger {
    constructor(context = 'Main') {
        super(context, true);
        this.logger = winston_1.createLogger({
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.prettyPrint(), winston_1.format.json(), this.printFormat()),
            transports: [new winston_1.transports.Console()]
        });
    }
    log(message) {
        this.logger.info(util.format(message));
    }
    error(message, meta) {
        this.logger.error(util.format(message, meta !== null && meta !== void 0 ? meta : ''));
    }
    warn(message) {
        this.logger.warning(util.format(message));
    }
    debug(message) {
        this.logger.debug(util.format(message));
    }
    verbose(message) {
        this.logger.info(util.format(message));
    }
    printFormat() {
        return winston_1.format.printf((info) => {
            const color = chalk;
            switch (info.level) {
                case 'info':
                    return this.logs(info, { colorLevel: color.blue, colorContext: color.green });
                case 'debug':
                    return this.logs(info, { colorLevel: color.white, colorContext: color.green });
                case 'error':
                    return this.logs(info, {
                        colorLevel: color.red,
                        colorContext: color.green,
                        colorMessage: color.red
                    });
            }
        });
    }
    logs(info, { colorLevel = (s) => s, colorTimestamp = (s) => s, colorContext = (s) => s, colorMessage = (s) => s }) {
        return !process.env.NODE_ENV || process.env.NODE_ENV === 'local'
            ? `[${colorLevel(info.level)}] ${colorTimestamp(info.timestamp)} [${colorContext(this.context)}] ${colorMessage(info.message)}`
            : `[${this.context}] ${info.message}`;
    }
    get stream() {
        return {
            write: (message) => {
                this.logger.info(message.substring(0, message.lastIndexOf('\n')));
            }
        };
    }
};
Logger = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], Logger);
exports.Logger = Logger;


/***/ }),

/***/ 414:
/***/ ((module) => {

module.exports = require("@hapi/joi");;

/***/ }),

/***/ 578:
/***/ ((module) => {

module.exports = require("@nestjs/common");;

/***/ }),

/***/ 84:
/***/ ((module) => {

module.exports = require("@nestjs/core");;

/***/ }),

/***/ 804:
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");;

/***/ }),

/***/ 480:
/***/ ((module) => {

module.exports = require("aws-sdk");;

/***/ }),

/***/ 425:
/***/ ((module) => {

module.exports = require("aws-serverless-express");;

/***/ }),

/***/ 242:
/***/ ((module) => {

module.exports = require("chalk");;

/***/ }),

/***/ 386:
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");;

/***/ }),

/***/ 516:
/***/ ((module) => {

module.exports = require("class-validator");;

/***/ }),

/***/ 334:
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ 127:
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ 150:
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ 622:
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ 669:
/***/ ((module) => {

module.exports = require("util");;

/***/ }),

/***/ 944:
/***/ ((module) => {

module.exports = require("winston");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(812);
/******/ })()

));
//# sourceMappingURL=main.js.map