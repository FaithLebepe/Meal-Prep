import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../interfaces/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [NgIf, NgFor, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  availableDayOptions: number[] = [5, 7, 10];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce(
      (acc, item) => acc + (item.price[item.selectedDays] || 0),
      0
    );
  }

  updateDays(item: CartItem, newDays: number): void {
    this.cartService.updateItemDays(item.id, newDays);
    item.selectedDays = newDays;
    this.calculateTotal();
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.id);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  confirmOrder(): void {
    alert('✅ Order confirmed! Thank you.');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  goBack(): void {
    this.router.navigate(['/order']);
  }
}
