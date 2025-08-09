import { Supplier } from "./supplier.model";

export class Product {
  id?: number;
  name: string;
  description?: string;
  supplierId: number;
  price: number;
  stockQuantity: number;
  supplier?: Supplier;
}
