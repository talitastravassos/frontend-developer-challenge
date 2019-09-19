export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    oldPrice: number;
    price: number;
    installments: { 
        count: number;
        value: number;
    }
}