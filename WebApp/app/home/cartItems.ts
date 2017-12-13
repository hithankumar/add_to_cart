export interface ICartItems{
    userName: string;
    item: string;
    isPurchased: boolean;
    hasAttachment: boolean;     
}

export class cartItems implements ICartItems{
    constructor(
           public userName: string,
           public item: string,
           public isPurchased: boolean,
           public hasAttachment: boolean
    ){}
}