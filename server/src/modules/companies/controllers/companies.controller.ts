import { Body, Controller, Post } from '@nestjs/common';
import { CompaniesService } from '../services/companies.service';
import { CreateCompanyRequestDto } from '../dto/create-company.request.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCompanyResponseDto } from '../dto/create-company.response.dto';

@Controller('companies')
@ApiTags('Companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create company',
    description: 'Create company and return entity',
  })
  @ApiResponse({ status: 200, type: CreateCompanyResponseDto })
  public async create(@Body() createCompany: CreateCompanyRequestDto) {
    return new CreateCompanyResponseDto(
      await this.companiesService.create(createCompany),
    );
  }
}
