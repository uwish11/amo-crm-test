import {Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors} from '@nestjs/common';
import {LeadsService} from "../services/leads.service";
import {CreateLeadRequestDto} from "../dto/create-lead.request.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateContactResponseDto} from "../../contacts/dto/create-contact.response.dto";
import {CreateLeadResponseDto} from "../dto/create-lead.response.dto";

@Controller('/leads')
@ApiTags('Leads')
export class LeadsController {
    constructor(private readonly leadsService: LeadsService) {
    }

    @Post('/')
    @ApiOperation({ summary: 'Create lead', description: 'Create lead and return entity' })
    @ApiResponse({ status: 200, type: CreateLeadResponseDto })
    @UseInterceptors(ClassSerializerInterceptor)
    public async create(@Body() createLead: CreateLeadRequestDto) {
        return this.leadsService.create(createLead)
    }
}
