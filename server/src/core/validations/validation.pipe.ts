import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException } from '../exceptions/bad-request.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) return value;

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const preparedErrorMessage = this.prepareErrorMessage(errors);

      throw new BadRequestException(preparedErrorMessage);
    }

    return value;
  }

  protected toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];

    return !types.includes(metatype);
  }

  prepareErrorMessage(errors) {
    let message = 'Validation failed:\n';

    for (const error of errors) {
      Object.values(error.constraints).forEach((constraint) => {
        message += ` - ${constraint};\n`;
      });
    }

    return message;
  }
}
