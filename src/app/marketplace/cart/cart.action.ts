import { ProductRecap } from '@app/marketplace/cart/cart.constants';

export class AddItem {
  static readonly type = '[Cart] add item';

  constructor(public item: ProductRecap) {
  }
}

export class DeleteItem {
  static readonly type = '[Cart] delete item';

  constructor(public item: ProductRecap) {
  }
}
