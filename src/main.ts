import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Asegúrate de importar esto

bootstrapApplication(AppComponent, {
  providers: [
    { provide: BrowserAnimationsModule, useClass: BrowserAnimationsModule }
  ]
}).catch(err => console.error(err));
