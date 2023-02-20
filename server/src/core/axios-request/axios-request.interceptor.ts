import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AxiosRequestInterceptor implements NestInterceptor {
  private amoCRMToken: string;
  private baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    httpService.axiosRef.interceptors.request.use(
      async (config) => {
        if (
          !this.amoCRMToken &&
          config.url !== this.configService.get<string>('ACCESS_TOKEN_URL')
        ) {
          await this.updateToken();
        }

        config.baseURL = this.baseUrl;

        // @ts-ignore
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${this.amoCRMToken}`,
        };

        return config;
      },
      (error) => Promise.reject(error),
    );

    httpService.axiosRef.interceptors.response.use(
      (res) => res,
      async (err) => {
        const originalConfig = err.config;

        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            await this.updateToken();

            return httpService.axiosRef(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }

        return Promise.reject(err);
      },
    );
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle();
  }

  private async updateToken(): Promise<void> {
    const {
      data: { access_token, base_domain },
    } = await this.httpService.axiosRef.get<{
      access_token: string;
      base_domain: string;
    }>(this.configService.get<string>('ACCESS_TOKEN_URL'), {
      headers: {
        'X-Client-Id': this.configService.get<string>('ACCESS_TOKEN_CLIENT_ID'),
      },
    });
    this.amoCRMToken = access_token;
    this.baseUrl = `https://${base_domain}/api/v4/`;
  }
}
