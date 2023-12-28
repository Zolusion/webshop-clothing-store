export default interface Product {
    id?: string;
    productName: string;
    description: string;
    imageUrl: string;
    quantity: number;
    oldPrice?: string;
    newPrice?: string;
}