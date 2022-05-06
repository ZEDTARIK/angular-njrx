export interface Product {
    id: number;
    productName: string;
    price?: number;
    quantity: number;
    selected?: boolean;
    available?: boolean;
}
