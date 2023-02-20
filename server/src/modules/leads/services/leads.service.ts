import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {CreateLeadRequestDto} from "../dto/create-lead.request.dto";
import {IGetLeadAxiosResponse} from "../interfaces/get-lead.axios.interface.response";
import {ICreateEntityAxiosInterfaceResponse} from "../../../core/interfaces/create-entity.axios.interface.response";

@Injectable()
export class LeadsService {
    constructor(private readonly httpService: HttpService) {
    }

    public async getById(id: number): Promise<IGetLeadAxiosResponse> {
        try {
            const response = await this.httpService.axiosRef.get<IGetLeadAxiosResponse>(`/leads/${id}`)

            return response.data
        } catch (e) {
            throw e
        }
    }

    public async create(lead: CreateLeadRequestDto): Promise<IGetLeadAxiosResponse> {
        try {
            const response = await this.httpService.axiosRef.post<ICreateEntityAxiosInterfaceResponse>('/leads', [lead])


            return await this.getById(response.data?._embedded?.leads[0]?.id)
        } catch (e) {
            throw e
        }
    }
}
