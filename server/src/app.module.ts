import {Module} from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {AxiosRequestInterceptor} from "./core/axios-request/axios-request.interceptor";
import {ConfigModule} from "@nestjs/config";
import {LeadsModule} from './modules/leads/leads.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { CompaniesModule } from './modules/companies/companies.module';
import config from "./core/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config]
        }),
        HttpModule,
        LeadsModule,
        ContactsModule,
        CompaniesModule
    ],
    controllers: [],
    providers: [{
        provide: APP_INTERCEPTOR,
        useClass: AxiosRequestInterceptor
    }],
})
export class AppModule {
}
