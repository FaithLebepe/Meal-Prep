// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './pages/tabs/tabs.component';
import { FooterComponent } from './pages/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, TabsComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 140px); 
    }
  `]
})
export class AppComponent {}