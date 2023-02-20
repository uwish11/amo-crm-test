import { IsNotEmpty, IsNumber } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateLeadRequestDto {

    @ApiProperty({ description: 'Lead name', required: true })
    @IsNotEmpty({ message: 'Property "name" is missing' })
    name: string;

    @ApiProperty({ description: 'Lead price', required: true })
    @IsNotEmpty({ message: 'Property "price" is missing' })
    @IsNumber({}, { message: 'Property "price" must be a numeric' })
    price: number;
}
