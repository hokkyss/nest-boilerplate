import ErrorDto from '@/dto/error.dto';
import JwtAuthGuard from '@/guards/jwt-auth.guard';
import { UseGuards, applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiUnauthorizedResponse,
  ApiBearerAuth as NestApiBearerAuth,
  getSchemaPath,
} from '@nestjs/swagger';

const ApiBearerAuth = () =>
  applyDecorators(
    ApiExtraModels(ErrorDto),
    NestApiBearerAuth(),
    UseGuards(JwtAuthGuard),
    ApiUnauthorizedResponse({
      schema: {
        allOf: [
          {
            $ref: getSchemaPath(ErrorDto),
          },
          {
            properties: {
              code: {
                example: 'auth/invalid-credentials',
                type: 'string',
              },
              status: {
                example: 401,
                type: 'number',
              },
            },
          },
        ],
      },
    }),
  );

export default ApiBearerAuth;
