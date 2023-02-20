import { defineStore } from 'pinia';
import {ICreateLeadRequest, ICreateLeadResponse} from "@/dto/createLead";
import createEntity from "@/api";
import {ICreateContactRequest, ICreateContactResponse} from "@/dto/createContact";
import {ICreateCompanyRequest, ICreateCompanyResponse} from "@/dto/createCompany";

interface EntitiesStoreState {
  leads: {
    name: string;
    items: number[]
  }
  contacts: {
    name: string;
    items: number[]
  }
  companies: {
    name: string;
    items: number[]
  }
}

export const useEntitiesStore = defineStore('entities', {
  state: (): EntitiesStoreState => ({
    leads: {
      name: 'Сделка',
      items: []
    },
    contacts: {
      name: 'Контакт',
      items: []
    },
    companies: {
      name: 'Компания',
      items: []
    }
  }),

  getters: {
    entitiesList: (state) => (
      [state.leads, state.contacts, state.companies].reduce((acc, cur) => [
        ...acc,
        ...cur.items.map((item) => ({ id: item, name: cur.name }))
      ], [] as { id: number, name: string }[])
    )
  },

  actions: {
    async createLead(data: ICreateLeadRequest): Promise<void> {
      try {
        const { id } = await createEntity<ICreateLeadResponse, ICreateLeadRequest>('/leads', data)
        this.leads.items.push(id)
      } catch (e) {
        throw e
      }
    },
    async createContact(data: ICreateContactRequest): Promise<void> {
      try {
        const { id } = await createEntity<ICreateContactResponse, ICreateContactRequest>('/contacts', data)
        this.contacts.items.push(id)
      } catch (e) {
        throw e
      }
    },
    async createCompany(data: ICreateCompanyRequest): Promise<void> {
      try {
        const { id } = await createEntity<ICreateCompanyResponse, ICreateCompanyRequest>('/companies', data)
        this.companies.items.push(id)
      } catch (e) {
        throw e
      }
    },
  }
})
