import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MenuCategory } from '../models/menu-category.model';
import { FoodItem } from '../models/food-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private firestore: Firestore) {}

  getCategories(): Observable<MenuCategory[]> {
    const ref = collection(this.firestore, 'menuCategories');
    return collectionData(ref, { idField: 'id' }) as Observable<MenuCategory[]>;
  }

  getAllFoodItems(): Observable<FoodItem[]> {
    const ref = collection(this.firestore, 'foodItems');
    return collectionData(ref, { idField: 'id' }) as Observable<FoodItem[]>;
  }

  getFoodItemsByCategoryAndGoal(category: string, goal: string): Observable<FoodItem[]> {
    const ref = collection(this.firestore, 'foodItems');
    const q = query(
      ref,
      where('category', '==', category),
      where('goals', 'array-contains', goal)
    );
    return collectionData(q, { idField: 'id' }) as Observable<FoodItem[]>;
  }
}
