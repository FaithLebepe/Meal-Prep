// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/tabs/home/home.component';
import { AboutComponent } from './pages/tabs/about/about.component';
import { MenuComponent } from './pages/tabs/menu/menu.component';
import { SpecialsComponent } from './pages/tabs/specials/specials.component';
import { GalleryComponent } from './pages/tabs/gallery/gallery.component';
import { ContactComponent } from './pages/tabs/contact/contact.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { FooterComponent } from './pages/footer/footer.component';


export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/tabs',
    pathMatch: 'full' 
  },
  {
    path: 'tabs',
    component: TabsComponent,
    title: 'tabs'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'CRAFT - Gourmet Burgers & Crafted Delights'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us - CRAFT'
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Our Menu - CRAFT'
  },
  {
    path: 'specials',
    component: SpecialsComponent,
    title: 'Special Offers - CRAFT'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Food Gallery - CRAFT'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Us - CRAFT'
  },
  {
    path: 'footer',
    component: FooterComponent,
    title: 'footer'
  },

];