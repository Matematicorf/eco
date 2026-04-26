import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // Certifique-se que o caminho é exatamente este

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
