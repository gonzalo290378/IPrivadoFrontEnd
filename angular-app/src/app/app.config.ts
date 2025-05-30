import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ResourceInterceptor } from './interceptors/resource.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    //provideHttpClient(withFetch()), 
    provideHttpClient(
      withInterceptorsFromDi()  // Esto permite usar el enfoque basado en DI para interceptores
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResourceInterceptor,
      multi: true
    },
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync()]
};

