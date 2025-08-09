import { OrderItem } from './orderItem.model';

export class Order {
  id?: number;
  buyerId: number;
  buyerName: string;
  supplierId: number;
  supplierName: string;
  orderDate: Date | string;
  items: OrderItem[];
  totalAmount: number;
  status: string;
}
