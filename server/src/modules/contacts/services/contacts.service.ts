import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IGetContactAxiosResponse } from '../interfaces/get-contact.axios.interface.response';
import { ICreateEntityAxiosInterfaceResponse } from '../../../core/interfaces/create-entity.axios.interface.response';
import { CreateContactRequestDto } from '../dto/create-contact.request.dto';

@Injectable()
export class ContactsService {
  constructor(private readonly httpService: HttpService) {}

  public async getById(id: number): Promise<IGetContactAxiosResponse> {
    try {
      const response =
        await this.httpService.axiosRef.get<IGetContactAxiosResponse>(
          `/contacts/${id}`,
        );

      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async create(
    contact: CreateContactRequestDto,
  ): Promise<IGetContactAxiosResponse> {
    const response =
      await this.httpService.axiosRef.post<ICreateEntityAxiosInterfaceResponse>(
        '/contacts',
        [contact],
      );

    return this.getById(response.data?._embedded?.contacts[0]?.id);
  }
}
