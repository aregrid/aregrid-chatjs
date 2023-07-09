import { ApplicationConfig, ModuleWithProviders } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { appRoutes } from './app.routes';

import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
const dbConfig: DBConfig = {
  name: 'myDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'workspace',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        // Other properties of the workspace object
      ],
    },
    // Other object stores if needed
  ],
};

// const indexedDBModuleArray =;

const indexedDBModule: ModuleWithProviders<NgxIndexedDBModule> =
  NgxIndexedDBModule.forRoot(dbConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    indexedDBModule.providers ? indexedDBModule.providers : [],
  ],
};
