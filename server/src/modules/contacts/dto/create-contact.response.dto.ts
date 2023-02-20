import {ApiProperty} from "@nestjs/swagger";
import {IGetContactAxiosResponse} from "../interfaces/get-contact.axios.interface.response";

export class CreateContactResponseDto {
    @ApiProperty({ description: 'Contact id', required: true })
    id: number

    @ApiProperty({ description: 'Contact name', required: true })
    name: string

    @ApiProperty({ description: 'Person first name', required: true })
    first_name: string

    @ApiProperty({ description: 'Person second name', required: true })
    last_name: string

    constructor(contact: Partial<IGetContactAxiosResponse>) {
        Object.assign(this, contact)
    }

}
