import {IGetLeadAxiosResponse} from "../interfaces/get-lead.axios.interface.response";
import {ApiProperty} from "@nestjs/swagger";

export class CreateLeadResponseDto {
    @ApiProperty({ description: 'Lead id', required: true })
    id: number;

    @ApiProperty({ description: 'Lead name', required: true })
    name: string;

    @ApiProperty({ description: 'Lead price', required: true })
    price: number;

    constructor(lead: Partial<IGetLeadAxiosResponse>) {
        Object.assign(this, lead)
    }
}
