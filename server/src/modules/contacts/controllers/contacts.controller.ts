import {Body, Controller, Post} from '@nestjs/common';
import {ContactsService} from "../services/contacts.service";
import {CreateContactRequestDto} from "../dto/create-contact.request.dto";
import {ApiOperation, ApiProperty, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateContactResponseDto} from "../dto/create-contact.response.dto";

@Controller('contacts')
@ApiTags('Contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Post()
    @ApiOperation({ summary: 'Create contact', description: 'Create contact and return entity' })
    @ApiResponse({ status: 200, type: CreateContactResponseDto })
    public async create(@Body() contact: CreateContactRequestDto) {
        return new CreateContactResponseDto(await this.contactsService.create(contact))
    }
}
