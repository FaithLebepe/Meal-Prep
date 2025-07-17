import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuCategory } from '../../../models/menu-category.model';
import { FoodItem } from '../../../models/food-item.model';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../services/menu.service';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../interfaces/cart-item';

@Component({
  selector: 'app-order',
  imports: [NgIf, NgFor, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  constructor(private router: Router, 
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  foodItems: FoodItem[] = []; 
  cartItemCount = 0;

  menuItems: MenuCategory[] = [];
  filteredFoodItems: FoodItem[] = [];

  fitnessGoals: string[] = ['Weight Loss', 'Muscle Gain', 'Cutting & Toning'];

  selectedCategory: string | null = null;
  selectedGoal: string | null = null;
  selectedDays: { [key: string]: number } = {};

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.length;
    });

  this.menuService.getCategories().subscribe(categories => {
    this.menuItems = categories;
  });

  this.menuService.getAllFoodItems().subscribe(items => {
    this.foodItems = items;
    this.filteredFoodItems = items; 
  });
}



selectCategory(category: string) {
  this.selectedCategory = this.selectedCategory === category ? null : category;
  this.filterFoodItems();
}

selectGoal(goal: string) {
  this.selectedGoal = this.selectedGoal === goal ? null : goal;
  this.filterFoodItems();
}


filterFoodItems() {
  this.filteredFoodItems = this.foodItems.filter(item => {
    const matchesCategory = this.selectedCategory ? item.category === this.selectedCategory : true;
    const matchesGoal = this.selectedGoal ? item.goals.includes(this.selectedGoal) : true;
    return matchesCategory && matchesGoal;
  });
}

  addToCart(item: FoodItem) {
  const days = this.selectedDays[item.id];
  if (!days || !item.price?.[days]) return;

  this.cartService.addToCart(item, days);
}

updateDays(item: CartItem, newDays: number) {
  this.cartService.updateItemDays(item.id, newDays);
}


  goBack() {
    this.router.navigateByUrl("/home");
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}