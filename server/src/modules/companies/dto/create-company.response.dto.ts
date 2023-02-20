import { IGetCompaniesAxiosInterfaceResponse } from '../interfaces/get-companies.axios.interface.response';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyResponseDto {
  @ApiProperty({ description: 'Company id', required: true })
  id: number;

  @ApiProperty({ description: 'Company name', required: true })
  name: string;

  constructor(company: Partial<IGetCompaniesAxiosInterfaceResponse>) {
    Object.assign(this, company);
  }
}
