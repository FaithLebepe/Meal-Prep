import { Component } from '@angular/core';
import { Firestore, collection, setDoc, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-seeder',
  imports: [],
  standalone: true,
  templateUrl: './seeder.component.html',
  styleUrl: './seeder.component.css'
})
export class SeederComponent {
  constructor(private firestore: Firestore) {}

  menuCategories = [
    { id: '1', name: 'Breakfast', image: 'assets/pictures/Hot.jpeg' },
    { id: '2', name: 'Lunch', image: 'assets/pictures/Cold.jpeg' },
    { id: '3', name: 'Dinner', image: 'assets/pictures/refreshment.jpg' },
    { id: '4', name: 'Salads', image: 'assets/pictures/combos.jpeg' },
    { id: '5', name: 'Fruit jars', image: 'assets/pictures/desert.jpg' },
    { id: '6', name: 'Wraps', image: 'assets/pictures/wrap.jpg' }
  ];

  foodItems = [
    {
      id: '1',
      name: 'Toast',
      image: 'https://th.bing.com/th/id/OIP.nIisw_7UCnbj0xwp9dPTcwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3',
      price: { 1: 12.99, 5: 59.99, 7: 79.99 },
      calories: 320,
      mainIngredients: ['Mixed greens', 'Cherry tomatoes', 'Cucumber', 'Feta cheese', 'Olive oil dressing'],
      category: 'Breakfast',
      goals: ['Weight Loss', 'Muscle Gain']
    },
    {
      id: '2',
      name: 'Beef',
      image: 'https://th.bing.com/th/id/OIP.P2nCU5mbTUPSyzCjC3IT9AHaE7?rs=1&pid=ImgDetMain',
      price: { 1: 15.99, 5: 69.99, 7: 89.99 },
      calories: 680,
      mainIngredients: ['Beef patty', 'Lettuce', 'Tomato', 'Cheese', 'Pickles', 'Sesame bun'],
      category: 'Lunch',
      goals: ['Weight Loss']
    },
    {
      id: '3',
      name: 'Chocolate',
      image: 'https://th.bing.com/th/id/OIP.0cvsqZZZzLKCX8obGgStiAHaE8?pid=ImgDet&w=184&h=122&c=7&dpr=1,3',
      price: { 1: 9.99, 5: 44.99, 7: 59.99 },
      calories: 420,
      mainIngredients: ['Chicken breast', 'Breadcrumbs', 'Herbs', 'Spices'],
      category: 'Dinner',
      goals: ['Muscle Gain', 'Energy Boost']
    },
    {
      id: '4',
      name: 'Wrap',
      image: 'https://th.bing.com/th/id/OIP.IJBKYiCfzKC8XJj2_XxjugHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: { 1: 18.99, 5: 89.99, 7: 119.99 },
      calories: 290,
      mainIngredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella', 'Basil', 'Olive oil'],
      category: 'Salads',
      goals: ['Weight Loss', 'Energy Boost']
    },
    {
      id: '5',
      name: 'Oats',
      image: 'https://th.bing.com/th/id/OIP.xge5NNfamJQgdD8wZi9qsAHaE7?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: { 1: 4.99, 5: 19.99, 7: 24.99 },
      calories: 5,
      mainIngredients: ['Fruits', 'Honey', 'Yogurt'],
      category: 'Fruit jars',
      goals: ['Weight Loss', 'Muscle Gain', 'Energy Boost']
    },
    {
      id: '6',
      name: 'Cake',
      image: 'https://th.bing.com/th/id/OIP.b7IK_tL3FBgPpUae9mjBnQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      price: { 1: 4.99 },
      calories: 5,
      mainIngredients: ['Whole wheat wrap', 'Grilled chicken', 'Spinach'],
      category: 'Wraps',
      goals: ['Weight Loss', 'Muscle Gain', 'Energy Boost']
    }
  ];

  async seedData() {
  try {
    for (const category of this.menuCategories) {
      const ref = doc(this.firestore, `menuCategories/${category.id}`);
      await setDoc(ref, category);
    }

    for (const item of this.foodItems) {
      const ref = doc(this.firestore, `foodItems/${item.id}`);
      await setDoc(ref, item);
    }

    alert('Firestore seeded successfully!');
  } catch (err: any) {
    console.error('Seeding error:', err?.message || err);
    alert('Failed to seed Firestore. Check console.');
  }
}

}
