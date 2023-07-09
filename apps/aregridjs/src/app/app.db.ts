import { DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'myDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'workspaces',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        { name: 'avatar', keypath: 'avatar', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'subtitle', keypath: 'subtitle', options: { unique: false } },
        {
          name: 'chatMessages',
          keypath: 'chatMessages',
          options: { unique: false },
        },
        // Other properties of the workspace object
      ],
    },
    // Other object stores if needed
  ],
};

export { dbConfig };
