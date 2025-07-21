import { Routes } from '@angular/router';
import { HomeComponent } from './pages/tabs/home/home.component';
import { AboutComponent } from './pages/tabs/about/about.component';
import { MenuComponent } from './pages/tabs/menu/menu.component';
import { GalleryComponent } from './pages/tabs/gallery/gallery.component';
import { ContactComponent } from './pages/tabs/contact/contact.component';
import { HeaderComponent } from './pages/tabs/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CartComponent } from './pages/tabs/cart/cart.component';
import { OrderComponent } from './pages/tabs/order/order.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  {
    path: 'tabs',
    component: HeaderComponent,
    title: 'tabs'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Meal Planner'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us '
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Our Menu '
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Food Gallery '
  },
  {
    path: 'order',
    component: OrderComponent,
    title: 'Oder you meal'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Food Gallery '
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Us'
  },
  {
    path: 'footer',
    component: FooterComponent,
    title: 'footer'
  },
];
