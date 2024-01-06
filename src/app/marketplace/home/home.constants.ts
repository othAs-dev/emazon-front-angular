import { Id } from '../../shared/models/id';

export interface CategoryItem {
    id: Id;
    title: string;
    tooltip: string;
    link: string;
    imageSrc: string;
    description: string;
}

export interface LogoItem {
    id: Id;
    alt: string;
    src: string;
    buttonText: string;
    link: string;
}
export interface ProductItem {
    id: Id;
    title: string;
    imageSrc: string;
    description: string;
    price: string;
}
export const categoryData: CategoryItem[] = [
    {
        id: 1,
        title: 'Ordinateurs',
        tooltip: 'Tous nos ordinateurs',
        link: 'computers',
        imageSrc: '../../../assets/MacBook_Air__2022__M2.avif',
        description: "Au prix d'un McMorning. Ou presque.",
    },
    {
        id: 2,
        title: 'Tablettes',
        tooltip: 'Toutes nos tablettes',
        link: 'tablets',
        imageSrc: '../../../assets/ipad_category.avif',
        description: 'Pour ceux qui voient la vie en grand',
    },
    {
        id: 3,
        title: 'Smartphones',
        tooltip: 'Tous nos smartphones',
        link: 'smartphones',
        imageSrc: '../../../assets/iphone_category.avif',
        description: 'Le monde dans sa poche',
    },
    {
        id: 4,
        title: 'Airpods',
        tooltip: 'Tous nos casques audios',
        link: 'audio-and-sound',
        imageSrc: 'assets/airpods_category.avif',
        description: 'Le gadget le plus cool du 21eme siècle',
    },
];
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

export const products: ProductItem[] = [
    {
        id: 1,
        title: 'Iphone 15 pro',
        imageSrc: 'assets/15-basic.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 2,
        title: 'Iphone 15 pro',
        imageSrc: 'assets/15-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 3,
        title: 'Airpods Max',
        imageSrc: 'assets/airpods-mac.png',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 4,
        title: 'Macbook Air 15 pouces',
        imageSrc: 'assets/mabook-air.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 5,
        title: 'iPad Pro M2',
        imageSrc: 'assets/ipad-air.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 6,
        title: 'iPad 10ème génération',
        imageSrc: 'assets/ipad-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 7,
        title: 'Google Pixel 7a',
        imageSrc: 'assets/pixel-7a.webp',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
    {
        id: 8,
        title: 'Google Pixel 8',
        imageSrc: 'assets/pixel-pro.jpeg',
        description:
            'L’iPhone 15 Pro présente un design en titane de qualité aérospatiale',
        price: '1 259 €',
    },
];
