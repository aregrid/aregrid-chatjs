import { ApplicationConfig, ModuleWithProviders } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { appRoutes } from './app.routes';
import { dbConfig } from './app.db';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

// const indexedDBModuleArray =;

const indexedDBModule: ModuleWithProviders<NgxIndexedDBModule> =
  NgxIndexedDBModule.forRoot(dbConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    indexedDBModule.providers ? indexedDBModule.providers : [],
  ],
};
