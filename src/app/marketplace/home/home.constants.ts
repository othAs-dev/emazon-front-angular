import { Id } from '@app/shared/models/id';
import { CategoryAPI } from '@app/shared/models/category';
import { Brand } from '@app/shared/enums/brand';

export interface LogoItem {
    id: Id;
    alt: string;
    src: string;
    buttonText: string;
    link: string;
}

export interface ProductApi {
  name: string;
  uid: string;
  shortDesc: string;
  longDesc: string;
  imgSrc: string;
  category: CategoryAPI;
  brand: Brand;
  price: number;
  colors: string[];
  packagingPrice: number;
  shippingDayTime: number;
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
