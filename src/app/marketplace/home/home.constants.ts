import { Id } from '@app/shared/models/id';
import { Products } from '@app/shared/models/product';

export interface LogoItem {
    id: Id;
    alt: string;
    src: string;
    buttonText: string;
    link: string;
}

export const logoData: LogoItem[] = [
    {
        id: 1,
        alt: 'Logo Apple',
        src: 'assets/logo/apple-logo.svg',
        buttonText: 'Gamme Apple',
        link: '#',
    },
    {
        id: 2,
        alt: 'Logo Samsung',
        src: 'assets/logo/samsung-logo.svg',
        buttonText: 'Gamme Samsung',
        link: '#',
    },
    {
        id: 3,
        alt: 'Logo Google',
        src: 'assets/logo/google-logo.svg',
        buttonText: 'Gamme Google',
        link: '#',
    },
    {
        id: 4,
        alt: 'Logo Huawei',
        src: 'assets/logo/huwawei-logo.svg',
        buttonText: 'Gamme Huawei',
        link: '#',
    },
];

export const products: Products = [
    {
        id: 1,
        name: 'Iphone 15 pro',
        imgSrc: 'assets/15-basic.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 2,
        name: 'Iphone 15 pro',
        imgSrc: 'assets/15-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 3,
        name: 'Airpods Max',
        imgSrc: 'assets/airpods-mac.png',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 4,
        name: 'Macbook Air 15 pouces',
        imgSrc: 'assets/mabook-air.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 5,
        name: 'iPad Pro M2',
        imgSrc: 'assets/ipad-air.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 6,
        name: 'iPad 10ème génération',
        imgSrc: 'assets/ipad-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 7,
        name: 'Google Pixel 7a',
        imgSrc: 'assets/pixel-7a.webp',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 8,
        name: 'Google Pixel 8',
        imgSrc: 'assets/pixel-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
];
