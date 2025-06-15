export interface FoodItems {
    id: number;
    name: string;
    image: string;
    price?: {
        [days: number]: number;
    };
    calories: number;
    mainIngredients: string[];
    category: string; 
    fitnessGoals: string[]; 
}
