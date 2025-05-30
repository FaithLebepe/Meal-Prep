import { Component, signal } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { SpecialsComponent } from "../specials/specials.component";
import { MenuComponent } from "../menu/menu.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from '../header.component';
import { LucideAngularModule} from 'lucide-angular';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, SpecialsComponent, MenuComponent, GalleryComponent, ContactComponent, HeaderComponent, FooterComponent, LucideAngularModule ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}
