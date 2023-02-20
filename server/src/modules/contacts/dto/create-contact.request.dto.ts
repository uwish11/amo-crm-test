import { IsNotEmpty } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateContactRequestDto {
    @ApiProperty({ description: 'Contact name', required: true })
    @IsNotEmpty({ message: 'Property "name" is missing' })
    name: string

    @ApiProperty({ description: 'Person first name', required: true })
    @IsNotEmpty({ message: 'Property "first_name" is missing' })
    first_name: string

    @ApiProperty({ description: 'Person second name', required: true })
    @IsNotEmpty({ message: 'Property "last_name" is missing' })
    last_name: string
}
