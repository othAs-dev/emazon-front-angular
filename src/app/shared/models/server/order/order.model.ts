import { Product } from '@app/shared/models/product';
import { UserDetails } from '@app/shared/store/auth/auth.action';

export interface OrderDetail {
    product: Product,
    quantity: number,
    price: number,
}

export interface OrderAPI {
    id: number,
    user: UserDetails,
    orderDetails: OrderDetail[],
    purchaseDateTime: string
}

export interface Order {
    productIdsToQuantity: Record<string, number>;
}
