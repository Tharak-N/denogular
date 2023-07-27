import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { RequestInterceptor } from './request.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
// import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      // withInterceptors([RequestInterceptor])
      withInterceptorsFromDi(),
    ),
    // importProvidersFrom(HttpClientModule, HttpClient),
    // RequestInterceptor,
    {
      provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
    }
    // importProvidersFrom(HttpClientModule),
    // provideHttpClient()
  ]
};
