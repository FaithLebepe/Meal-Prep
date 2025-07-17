export interface CartItem {
  id: string;
  name: string;
  image: string;
  description?: string;
  calories?: number;
  mainIngredients?: string[];
  price: { [key: number]: number }; 
  selectedDays: number;
  pricePerDay: number; 
}
