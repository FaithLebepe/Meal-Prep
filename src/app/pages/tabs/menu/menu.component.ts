import { Component } from '@angular/core';
import { MenuCategory } from '../../../interfaces/menu-item';

@Component({
  selector: 'app-menu',
  imports: [],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems: MenuCategory[] = [
    {
      id: 1,
      name: 'Breakfast',
      image: 'assets/pictures/Hot.jpeg',
    },
    {
      id: 2,
      name: 'Lunch',
      image: 'assets/pictures/Cold.jpeg',
    },
    {
      id: 3,
      name: 'Salads',
      image: 'assets/pictures/refreshment.jpg',
    },
    {
      id: 4,
      name: 'Dinner',
      image: 'assets/pictures/combos.jpeg',
    },
    {
      id: 5,
      name: 'Fruit jars',
      image: 'assets/pictures/desert.jpg',
    },
    {
      id: 6,
      name: 'Wraps',
      image: 'assets/pictures/wrap.jpg',
    },
  ];
}
