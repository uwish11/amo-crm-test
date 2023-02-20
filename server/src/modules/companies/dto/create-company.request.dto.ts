import { IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyRequestDto {
  @ApiProperty({ description: 'Company name', required: true })
  @IsNotEmpty({ message: 'Property "name" is missing' })
  name: string;
}
