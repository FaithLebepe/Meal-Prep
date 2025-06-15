export interface FoodItem {
  id: string;
  name: string;
  image: string;
  calories: number;
  mainIngredients: string[];
  category: string;
  goals: string[];
  price: {
    [key: number]: number; 
  };
}