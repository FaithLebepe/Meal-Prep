import { NgFor, NgIf } from '@angular/common';
import { Component,  } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
  image: string;
  price?: number;
  description?: string;
  calories?: number;
  mainIngredients?: string[];
}

@Component({
  selector: 'app-order',
  imports: [NgIf, NgFor],
  standalone: true,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  constructor(private router: Router) {}

  menuItems: MenuItem[] = [
    { id: 1, name: 'Hot Beverages', image: 'assets/pictures/Hot.jpeg' },
    { id: 2, name: 'Cold Beverages', image: 'assets/pictures/Cold.jpeg' },
    { id: 3, name: 'Refreshment', image: 'assets/pictures/refreshment.jpg' },
    { id: 4, name: 'Special Combos', image: 'assets/pictures/combos.jpeg' },
    { id: 5, name: 'Dessert', image: 'assets/pictures/desert.jpg' },
    { id: 6, name: 'Wraps', image: 'assets/pictures/wrap.jpg' },
  ];

  foodItems: MenuItem[] = [
    { 
      id: 1, 
      name: 'Hot Beverages', 
      image: 'https://th.bing.com/th/id/OIP.nIisw_7UCnbj0xwp9dPTcwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3', 
      price: 12.99,
      calories: 320,
      mainIngredients: ['Mixed greens', 'Cherry tomatoes', 'Cucumber', 'Feta cheese', 'Olive oil dressing']
    },
    { 
      id: 2, 
      name: 'Cold Beverages', 
      image: 'https://th.bing.com/th/id/OIP.P2nCU5mbTUPSyzCjC3IT9AHaE7?rs=1&pid=ImgDetMain', 
      price: 15.99,
      calories: 680,
      mainIngredients: ['Beef patty', 'Lettuce', 'Tomato', 'Cheese', 'Pickles', 'Sesame bun']
    },
    { 
      id: 3, 
      name: 'Refreshment', 
      image: 'https://th.bing.com/th/id/OIP.0cvsqZZZzLKCX8obGgStiAHaE8?pid=ImgDet&w=184&h=122&c=7&dpr=1,3', 
      price: 9.99,
      calories: 420,
      mainIngredients: ['Chicken breast', 'Breadcrumbs', 'Herbs', 'Spices']
    },
    { 
      id: 4, 
      name: 'Special Combos', 
      image: 'https://th.bing.com/th/id/OIP.IJBKYiCfzKC8XJj2_XxjugHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      price: 18.99,
      calories: 290,
      mainIngredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella', 'Basil', 'Olive oil']
    },
    { 
      id: 5, 
      name: 'Coffee', 
      image: 'https://th.bing.com/th/id/OIP.xge5NNfamJQgdD8wZi9qsAHaE7?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      price: 4.99,
      calories: 5,
      mainIngredients: ['Arabica coffee beans', 'Filtered water']
    },
    { 
      id: 6, 
      name: 'Hot Beverages', 
      image: 'https://th.bing.com/th/id/OIP.cnXE0367vb2AzGr_IgEcDQHaHa?w=194&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      price: 4.99,
      calories: 5,
      mainIngredients: ['Arabica coffee beans', 'Filtered water']
    },
    { 
      id: 7, 
      name: 'Cold Beverages', 
      image: 'https://th.bing.com/th/id/OIP.b7IK_tL3FBgPpUae9mjBnQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      price: 4.99,
      calories: 5,
      mainIngredients: ['Arabica coffee beans', 'Filtered water']
    },
    { 
      id: 8, 
      name: 'Refreshment', 
      image: 'https://th.bing.com/th/id/OIP.b7IK_tL3FBgPpUae9mjBnQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      price: 4.99,
      calories: 5,
      mainIngredients: ['Arabica coffee beans', 'Filtered water']
    },
    { 
      id: 9, 
      name: 'Special Combos', 
      image: 'https://th.bing.com/th/id/OIP.tU4o0V1AMZelrHo5w1qK_gHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      price: 4.99,
      calories: 5,
      mainIngredients: ['Arabica coffee beans', 'Filtered water']
    },
    { 
      id: 10, 
      name: 'Wraps', 
      image: 'https://th.bing.com/th/id/OIP.b7IK_tL3FBgPpUae9mjBnQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      price: 4.99,
      calories: 5,
      mainIngredients: ['Arabica coffee beans', 'Filtered water']
    }
  ];

  cartItems: MenuItem[] = [];
  selectedWeeks ='';

  selectMenuItem(item: MenuItem) {
    console.log('Selected menu item:', item.name);
  }

  updateWeekSelection(itemId: number, event: any) {
  }

  getSelectedWeek(itemId: number): string {
    return this.selectedWeeks[itemId] || '';
  }

  addToCart(item: MenuItem) {
      
  }

  goBack() {
    this.router.navigateByUrl("/home");
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
