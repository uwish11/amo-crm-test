import {ApiProperty} from "@nestjs/swagger";

export interface IGetLeadAxiosResponse {
    id: number,
    name: string,
    price: number,
    responsible_user_id: number,
    group_id: number,
    status_id: number,
    pipeline_id: number,
    loss_reason_id?: number,
    created_by: number,
    updated_by: number,
    created_at: number,
    updated_at: number,
    closed_at?: number,
    closest_task_at?: number,
    is_deleted: boolean,
    custom_fields_values?: {
        field_id: number,
        values: { value: string }[]
    }[],
    score?: number,
    account_id: number,
    _links: {
        self: {
            href: string
        }
    },
    _embedded: {
        tags: [],
        companies: []
    }
}
