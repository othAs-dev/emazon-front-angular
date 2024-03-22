export class GetProductByUid {
    static readonly type = '[Product] Get Product By Uid';

    constructor(public uid: string) {
    }
}

export class GetAllProducts {
    static readonly type = '[Product] Get All Products';
}
