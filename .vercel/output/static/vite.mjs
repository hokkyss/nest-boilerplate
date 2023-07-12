import { Catch, HttpException, BadRequestException, applyDecorators, Controller as Controller$1, Get, Inject, Injectable, Module, ClassSerializerInterceptor, ConsoleLogger, VersioningType } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR, APP_FILTER, NestFactory } from '@nestjs/core';
import { JoiPipeValidationException, JoiPipeModule } from 'nestjs-joi';
import { ApiTags, ApiProperty, DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

function _ts_decorate$9(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        response.status(status).json({
            status: status,
            code: exception.message
        });
    }
};
HttpExceptionFilter = _ts_decorate$9([
    Catch(HttpException)
], HttpExceptionFilter);

function _ts_decorate$8(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let JoiPipeValidationExceptionFilter = class JoiPipeValidationExceptionFilter {
    catch(exception, _host) {
        throw new BadRequestException(exception.message);
    }
};
JoiPipeValidationExceptionFilter = _ts_decorate$8([
    Catch(JoiPipeValidationException)
], JoiPipeValidationExceptionFilter);

const HELLO_WORLD_REPOSITORY = 'HELLO_WORLD_REPOSITORY';

const HELLO_WORLD_SERVICE = 'HELLO_WORLD_SERVICE';

const Controller = (options)=>applyDecorators(ApiTags(...options.path ? typeof options.path === 'string' ? [
        options.path
    ] : options.path : []), Controller$1(options));

function _define_property$2(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_decorate$7(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata$2(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
class HelloWorld {
    constructor(attributes){
        _define_property$2(this, "message", void 0);
        Object.assign(this, attributes);
    }
}
_ts_decorate$7([
    Expose(),
    ApiProperty({
        type: 'string'
    }),
    _ts_metadata$2("design:type", String)
], HelloWorld.prototype, "message", void 0);

function _define_property$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_decorate$6(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata$1(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param$1(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let HelloWorldV1Controller = class HelloWorldV1Controller {
    async getHello() {
        return new HelloWorld({
            message: await this.helloWorldService.getHello()
        });
    }
    constructor(helloWorldService){
        _define_property$1(this, "helloWorldService", void 0);
        this.helloWorldService = helloWorldService;
    }
};
_ts_decorate$6([
    Get(),
    _ts_metadata$1("design:type", Function),
    _ts_metadata$1("design:paramtypes", [])
], HelloWorldV1Controller.prototype, "getHello", null);
HelloWorldV1Controller = _ts_decorate$6([
    Controller({
        path: 'hello-world',
        version: '1'
    }),
    _ts_param$1(0, Inject(HELLO_WORLD_SERVICE)),
    _ts_metadata$1("design:type", Function),
    _ts_metadata$1("design:paramtypes", [
        typeof IHelloWorldService === "undefined" ? Object : IHelloWorldService
    ])
], HelloWorldV1Controller);

function _ts_decorate$5(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HelloWorldV1Repository = class HelloWorldV1Repository {
    async getHello() {
        return `Hello World Version 1`;
    }
};
HelloWorldV1Repository = _ts_decorate$5([
    Injectable()
], HelloWorldV1Repository);

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_decorate$4(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let HelloWorldV1Service = class HelloWorldV1Service {
    async getHello() {
        return await this.helloWorldRepository.getHello();
    }
    constructor(helloWorldRepository){
        _define_property(this, "helloWorldRepository", void 0);
        this.helloWorldRepository = helloWorldRepository;
    }
};
HelloWorldV1Service = _ts_decorate$4([
    Injectable(),
    _ts_param(0, Inject(HELLO_WORLD_REPOSITORY)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof IHelloWorldRepository === "undefined" ? Object : IHelloWorldRepository
    ])
], HelloWorldV1Service);

function _ts_decorate$3(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HelloWorldV1Module = class HelloWorldV1Module {
};
HelloWorldV1Module = _ts_decorate$3([
    Module({
        controllers: [
            HelloWorldV1Controller
        ],
        providers: [
            {
                provide: HELLO_WORLD_REPOSITORY,
                useClass: HelloWorldV1Repository
            },
            {
                provide: HELLO_WORLD_SERVICE,
                useClass: HelloWorldV1Service
            }
        ]
    })
], HelloWorldV1Module);

function _ts_decorate$2(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let V1Module = class V1Module {
};
V1Module = _ts_decorate$2([
    Module({
        imports: [
            HelloWorldV1Module
        ]
    })
], V1Module);

function _ts_decorate$1(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let V2Module = class V2Module {
};
V2Module = _ts_decorate$1([
    Module({
        imports: []
    })
], V2Module);

function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    Module({
        imports: [
            JoiPipeModule.forRoot({
                pipeOpts: {
                    skipErrorFormatting: true,
                    usePipeValidationException: true
                }
            }),
            ConfigModule.forRoot({
                isGlobal: true,
                ignoreEnvFile: true,
                cache: true
            }),
            V1Module,
            V2Module
        ],
        providers: [
            {
                provide: APP_INTERCEPTOR,
                useClass: ClassSerializerInterceptor
            },
            {
                provide: APP_FILTER,
                useClass: HttpExceptionFilter
            },
            {
                provide: APP_FILTER,
                useClass: JoiPipeValidationExceptionFilter
            }
        ]
    })
], AppModule);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useLogger(new ConsoleLogger('boilerplate', {
        timestamp: true,
        logLevels: [
            'verbose'
        ]
    }));
    app.enableCors();
    app.enableVersioning({
        type: VersioningType.URI
    });
    const swaggerConfig = new DocumentBuilder().setTitle('boilerplate').setDescription('boilerplate description').addBearerAuth().build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('swagger', app, document, {
        customSiteTitle: 'boilerplate'
    });
    await app.init();
    return app;
}

const viteNodeApp = bootstrap();

export { viteNodeApp as default };
