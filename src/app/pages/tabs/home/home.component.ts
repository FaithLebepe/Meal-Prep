import { Component, signal } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { SpecialsComponent } from "../specials/specials.component";
import { MenuComponent } from "../menu/menu.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { LucideAngularModule, ArrowLeft, ArrowRight, PlayCircle, ArrowDown, ArrowDown01, ArrowDownIcon } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, SpecialsComponent, MenuComponent, GalleryComponent,LucideAngularModule ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  icons = {
    prev: ArrowDownIcon,
    next: ArrowRight,
    play: PlayCircle
  };

}
