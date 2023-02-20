import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IGetCompaniesAxiosInterfaceResponse } from '../interfaces/get-companies.axios.interface.response';
import { ICreateEntityAxiosInterfaceResponse } from '../../../core/interfaces/create-entity.axios.interface.response';
import { CreateCompanyRequestDto } from '../dto/create-company.request.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly httpService: HttpService) {}

  public async getById(id: number) {
    try {
      const response =
        await this.httpService.axiosRef.get<IGetCompaniesAxiosInterfaceResponse>(
          `/companies/${id}`,
        );

      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async create(
    company: CreateCompanyRequestDto,
  ): Promise<IGetCompaniesAxiosInterfaceResponse> {
    const response =
      await this.httpService.axiosRef.post<ICreateEntityAxiosInterfaceResponse>(
        '/companies',
        [company],
      );

    return this.getById(response.data?._embedded?.companies[0]?.id);
  }
}
