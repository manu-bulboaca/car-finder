import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// TODO: Replace platformBrowserDynamic().bootstrapModule with bootstrapApplication(...)
// Documentation: https://angular.io/api/platform-browser/bootstrapApplication

// Hint: don't forget to provide the animations as they are required by angular material
// for that use: provideAnimations()

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

