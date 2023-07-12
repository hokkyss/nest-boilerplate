import PaginatedDto from '@/dto/paginated.dto';
import { applyDecorators, type Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

const ApiPaginatedResponse = <TModel extends Type<any>>(model: TModel) =>
  applyDecorators(
    ApiExtraModels(model),
    ApiExtraModels(PaginatedDto),
    ApiOkResponse({
      schema: {
        title: `Paginated${model.name}`,
        allOf: [
          {
            $ref: getSchemaPath(PaginatedDto),
          },
          {
            properties: {
              results: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );

export default ApiPaginatedResponse;
