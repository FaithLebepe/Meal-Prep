import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { NgIf, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-gallery',
  imports: [ NgFor,NgIf],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  galleryItems = [
   { type: 'image', src: 'assets/gallery/food.jpeg' },
    { type: 'image', src: 'assets/gallery/pasta.jpeg' },
    { type: 'image', src: 'assets/gallery/salad.jpeg' },
    { type: 'video', src: 'assets/gallery/video1.mp4' },
    { type: 'video', src: 'assets/gallery/video2.mp4' },
    { type: 'video', src: 'assets/gallery/video3.mp4' },
  ];

  currentIndex = 0;

  selectImage(index: number) {
    this.currentIndex = index;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.galleryItems.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
  }
}
