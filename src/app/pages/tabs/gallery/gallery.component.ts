import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NgIf, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { MediaItem } from '../../../interfaces/media-items';
register();
@Component({
  selector: 'app-gallery',
  imports: [ NgFor,NgIf, NgSwitchCase, NgSwitch ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  selectedCategory: string = 'All';

  mediaItems: MediaItem[] = [
    { type: 'image', src: 'assets/gallery/food.jpeg', alt: 'Oats Bowl', category: 'Breakfast' },
    { type: 'image', src: 'assets/gallery/pasta.jpeg', alt: 'Grilled Chicken', category: 'Dinner' },
    { type: 'video', src: 'assets/gallery/', alt: 'Fruit Bowl Video', category: 'Snack' },
    { type: 'image', src: 'assets/gallery/food.jpeg', alt: 'Special Dish', category: 'Special' },
    { type: 'image', src: 'assets/gallery/salad.jpeg', alt: 'Oats Bowl', category: 'Breakfast' },
    { type: 'image', src: 'assets/gallery/pasta.jpeg', alt: 'Grilled Chicken', category: 'Dinner' },
    { type: 'video', src: 'assets/gallery/', alt: 'Fruit Bowl Video', category: 'Snack' },
    { type: 'image', src: 'assets/gallery/salad.jpeg', alt: 'Special Dish', category: 'Special' },
    { type: 'image', src: 'assets/gallery/pasta.jpeg', alt: 'Oats Bowl', category: 'Breakfast' },
    { type: 'image', src: 'assets/gallery/food.jpeg', alt: 'Grilled Chicken', category: 'Dinner' },
    { type: 'video', src: 'assets/gallery/', alt: 'Fruit Bowl Video', category: 'Snack' },
    { type: 'image', src: 'assets/gallery/salad.jpeg', alt: 'Special Dish', category: 'Special' },
   
  ];

  get filteredItems(): MediaItem[] {
    return this.selectedCategory === 'All'
      ? this.mediaItems
      : this.mediaItems.filter(item => item.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  selectedMedia: MediaItem | null = null;

  openLightbox(item: MediaItem) {
    this.selectedMedia = item;
  }

  closeLightbox() {
    this.selectedMedia = null;
  }
}
