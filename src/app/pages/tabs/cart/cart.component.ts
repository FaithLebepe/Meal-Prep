import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule} from 'lucide-angular';
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description?: string;
}
interface DeliveryOption {
  id: string;
  name: string;
  time: string;
  price: number;
}
@Component({
  selector: 'app-cart',
  imports: [NgIf, NgFor, FormsModule,LucideAngularModule, CommonModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Classic Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
      price: 15.99,
      quantity: 2,
      description: 'Beef patty with lettuce, tomato, and special sauce'
    },
    {
      id: 2,
      name: 'Caesar Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
      price: 12.99,
      quantity: 1,
      description: 'Fresh romaine lettuce with parmesan and croutons'
    },
    {
      id: 3,
      name: 'Chicken Nuggets',
      image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=300&fit=crop',
      price: 9.99,
      quantity: 1,
      description: '10 pieces of crispy chicken nuggets'
    }
  ];

  deliveryOptions: DeliveryOption[] = [
    { id: 'standard', name: 'Standard Delivery', time: '30-45 min', price: 2.99 },
    { id: 'express', name: 'Express Delivery', time: '15-25 min', price: 5.99 },
    { id: 'pickup', name: 'Pickup', time: '10-15 min', price: 0 }
  ];

  selectedDelivery: string = 'standard';
  promoCode: string = '';
  promoMessage: string = '';
  promoApplied: boolean = false;
  discount: number = 0;


  goBack() {
    window.history.back();
  }

 
}