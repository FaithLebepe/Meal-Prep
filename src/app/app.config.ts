// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(), // Enables route parameter binding
      withViewTransitions()        // Enables smooth transitions between routes
    ),
    provideAnimations(),           // Required for Angular Material
    provideHttpClient()            // For API calls
  ]
};