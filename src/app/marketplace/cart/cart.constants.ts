import { Id } from '@app/shared/models/id';
import { SelectOptions } from '@app/shared/models/selectOptions';
import { Products } from '@app/shared/models/product';

export interface benefitsModel {
    id: Id;
    icon: string;
    text: string;
}

export interface payementMethodModel {
    id: Id;
    src: string;
    alt: string;
}

export const benefitsData: benefitsModel[] = [
    {
        id: 1,
        icon: 'local_shipping',
        text: 'livraison offerte à partir de 100€',
    },
    {
        id: 2,
        icon: 'headset_mic',
        text: 'Service-client aux petits oignons',
    },
    {
        id: 3,
        icon: 'done_all',
        text: 'Garantie commerciale de 12 mois',
    },
    {
        id: 4,
        icon: 'attach_money',
        text: 'Retour gratuit sous 30 jours',
    },
];
export const payementMethodData: payementMethodModel[] = [
    {
        id: 1,
        src: 'assets/icons/payements-methods-icons/Visa.svg',
        alt: 'logo visa',
    },
    {
        id: 2,
        src: 'assets/icons/payements-methods-icons/Mastercard.png',
        alt: 'logo mastercard',
    },
    {
        id: 3,
        src: 'assets/icons/payements-methods-icons/Amex.svg',
        alt: 'logo american express',
    },
    {
        id: 4,
        src: 'assets/icons/payements-methods-icons/Discover.svg',
        alt: 'logo discover',
    },
    {
        id: 5,
        src: 'assets/icons/payements-methods-icons/PayPal.png',
        alt: 'logo paypal',
    },
    {
        id: 6,
        src: 'assets/icons/payements-methods-icons/ApplePay.svg',
        alt: 'logo apple pay',
    },
    {
        id: 7,
        src: 'assets/icons/payements-methods-icons/GooglePay.svg',
        alt: 'logo google pay',
    },
    {
        id: 8,
        src: 'assets/icons/payements-methods-icons/Alipay.svg',
        alt: 'logo alipay',
    },
    {
        id: 9,
        src: 'assets/icons/payements-methods-icons/Klarna.svg',
        alt: 'logo klarna',
    },
    {
        id: 10,
        src: 'assets/icons/payements-methods-icons/Stripe.svg',
        alt: 'logo stripe',
    },
];

export const products: Products = [
    {
        id: 1,
        name: 'Iphone 15 pro',
        imgSrc: '../../../assets/15-basic.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259,00 €',
    },
    {
        id: 2,
        name: 'Iphone 15 pro',
        imgSrc: '../../../assets/15-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259,00 €',
    },
    {
        id: 3,
        name: 'Airpods Max',
        imgSrc: '../../../assets/airpods-mac.png',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259,00 €',
    },
    {
        id: 4,
        name: 'Macbook Air 15 pouces',
        imgSrc: '../../../assets/mabook-air.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259,00 €',
    },
    {
        id: 5,
        name: 'Google Pixel 5',
        imgSrc: '../../../assets/pixel-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259,00 €',
    },
    {
        id: 6,
        name: 'ipad 10ème génération',
        imgSrc: '../../../assets/ipad-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259,00 €',
    },
];
export const productsRecap: Products = [
    {
        id: 1,
        description: '',
        imgSrc: '../../../assets/ipad-pro.jpeg',
        name: 'Iphone 15pro 128gb - Or',
        price: '1259.99',
        delivery: 'Gratuit',
        packaging: 'OUI',
    },
    {
        id: 1,
        description: '',
        imgSrc: '../../../assets/ipad-pro.jpeg',
        name: 'Iphone 15pro 128gb - Or',
        price: '1259.99',
        delivery: 'Gratuit',
        packaging: 'OUI',
    },
];
export const numberProductsOptions: SelectOptions = [
    {
        id: 1,
        option: 'ONE',
        value: '1',
    },
    {
        id: 2,
        option: 'TWO',
        value: '2',
    },
    {
        id: 3,
        option: 'THREE',
        value: '3',
    },
    {
        id: 4,
        option: 'FOUR',
        value: '4',
    },
    {
        id: 5,
        option: 'FIVE',
        value: '5',
    },
];
