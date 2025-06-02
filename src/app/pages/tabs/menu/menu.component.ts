import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems = [
    {
      title: 'Hot Beverages',
      description: 'Wide range of steaming hot coffee to make you fresh and light.',
      image: 'assets/pictures/Hot.jpeg',
    },
    {
      title: 'Cold Beverages',
      description: 'Creamy and frothy cold coffee to make you cool.',
      image: 'assets/pictures/Cold.jpeg',
    },
    {
      title: 'Refreshment',
      description: 'Fruit and icy refreshing drink to make you feel refreshed.',
      image: 'assets/pictures/refreshment.jpg',
    },
    {
      title: 'Special Combos',
      description: 'Perfectly paired meal deals for every craving.',
      image: 'assets/pictures/combos.jpeg',
    },
    {
      title: 'Dessert',
      description: 'Sweet treats and delightful desserts.',
      image: 'assets/pictures/desert.jpg',
    },
    {
      title: 'Wraps',
      description: 'Classic healthy-food favorite done right.',
      image: 'assets/pictures/wrap.jpg',
    },
  ];
}
