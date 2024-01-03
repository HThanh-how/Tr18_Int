export interface Shoe {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    color: string;
  }
  
export interface Response {
    shoes: Shoe[];
  }