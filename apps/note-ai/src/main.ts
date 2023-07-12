import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

console.log(`NODE_ENV`, process.env['NODE_ENV']);
console.log(`NX_API_URL`, process.env['NX_API_URL']);
