// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/tabs/header.component';
import { FooterComponent } from './pages/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 140px); 
    }
  `]
})
export class AppComponent {}