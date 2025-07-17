import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addToCart(item: any, selectedDays: number) {
  const cartItem = {
    id: item.id,
    name: item.name,
    image: item.image,
    calories: item.calories,
    mainIngredients: item.mainIngredients,
    price: item.price,
    selectedDays,
    pricePerDay: item.pricePerDay 
  };

  const currentItems = this.cartItemsSubject.value;
  const updatedItems = [...currentItems, cartItem];
  this.cartItemsSubject.next(updatedItems);
}

updateItemDays(itemId: string, newDays: number): void {
  const cart = this.getCartItems();
  const updatedCart = cart.map(item =>
    item.id === itemId ? { ...item, selectedDays: newDays } : item
  );
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  this.cartItemsSubject.next(updatedCart);
}


  removeFromCart(itemId: string) {
    const updatedItems = this.cartItemsSubject.value.filter(item => item.id !== itemId);
    this.cartItemsSubject.next(updatedItems);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
