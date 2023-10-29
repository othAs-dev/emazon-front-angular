export interface CategoryItem {
  id: number;
  title: string;
  tooltip: string;
  imageSrc: string;
  description: string;
}
export interface LogoItem {
  id: number;
  alt: string;
  src: string;
  buttonText: string;
  link: string;
}
export interface ProductItem {
  id: number;
  title: string;
  imageSrc: string;
  description: string[];
  price: string;
}
export const categoryData: CategoryItem[] = [
  {
    "id": 1,
    "title": "Ordinateurs",
    "tooltip": "Tous nos ordinateurs",
    "imageSrc": "../../../assets/MacBook_Air__2022__M2.avif",
    "description": "Au prix d'un McMorning. Ou presque."
  },
  {
    "id": 2,
    "title": "Tablettes",
    "tooltip": "Toutes nos tablettes",
    "imageSrc": "../../../assets/ipad_category.avif",
    "description": "Pour ceux qui voient la vie en grand"
  },
  {
    "id": 3,
    "title": "Smartphones",
    "tooltip": "Tous nos smartphones",
    "imageSrc": "../../../assets/iphone_category.avif",
    "description": "Le monde dans sa poche"
  },
  {
    "id": 4,
    "title": "Airpods",
    "tooltip": "Tous nos casques audios",
    "imageSrc": "../../../assets/airpods_category.avif",
    "description": "Le gadget le plus cool du 21eme siècle"
  }
]
export const logoData: LogoItem[] = [
  {
    id: 1,
    alt: 'Logo Apple',
    src: '../../../assets/logo/apple-logo.svg',
    buttonText: 'En savoir plus',
    link: '#'

  },
  {
    id: 2,
    alt: 'Logo Samsung',
    src: '../../../assets/logo/samsung-logo.svg',
    buttonText: 'En savoir plus',
    link: '#'
  },
  {
    id: 3,
    alt: 'Logo Google',
    src: '../../../assets/logo/logo-google.png',
    buttonText: 'En savoir plus',
    link: '#'
  },
  {
    id: 4,
    alt: 'Logo Huawei',
    src: '../../../assets/logo/huwawei-logo.svg',
    buttonText: 'En savoir plus',
    link: '#'
  },
];

export const products: ProductItem[] = [
  {
    id: 1,
    title: "Iphone 15 pro",
    imageSrc: "../../../assets/15-basic.jpeg",
    description: [
      "OS iOS 17 - 128Go de ROM, 8Go de RAM",
      "Écran AMOLED 6,1\" Dynamic Island 120Hz",
      "Nouvelle puce Apple Bionic A17 Pro",
      "Triple Capteur photo arrière"
    ],
    price: "1 259,00 €"
  },
  {
    id: 2,
    title: "Iphone 15 pro",
    imageSrc: "../../../assets/15-pro.jpeg",
    description: [
      "OS iOS 17 - 128Go de ROM, 8Go de RAM",
      "Écran AMOLED 6,1\" Dynamic Island 120Hz",
      "Nouvelle puce Apple Bionic A17 Pro",
      "Triple Capteur photo arrière"
    ],
    price: "1 259,00 €"
  },
  {
    id: 3,
    title: "Airpods Max",
    imageSrc: "../../../assets/airpods-mac.png",
    description: [
      "OS iOS 17 - 128Go de ROM, 8Go de RAM",
      "Écran AMOLED 6,1\" Dynamic Island 120Hz",
      "Nouvelle puce Apple Bionic A17 Pro",
      "Triple Capteur photo arrière"
    ],
    price: "1 259,00 €"
  },
  {
    id: 4,
    title: "Macbook Air 15 pouces",
    imageSrc: "../../../assets/mabook-air.jpeg",
    description: [
      "OS iOS 17 - 128Go de ROM, 8Go de RAM",
      "Écran AMOLED 6,1\" Dynamic Island 120Hz",
      "Nouvelle puce Apple Bionic A17 Pro",
      "Triple Capteur photo arrière"
    ],
    price: "1 259,00 €"
  },
  {
    id: 5,
    title: "iPad Pro M2",
    imageSrc: "../../../assets/ipad-air.jpeg",
    description: [
      "OS iOS 17 - 128Go de ROM, 8Go de RAM",
      "Écran AMOLED 6,1\" Dynamic Island 120Hz",
      "Nouvelle puce Apple Bionic A17 Pro",
      "Triple Capteur photo arrière"
    ],
    price: "1 259,00 €"
  },
  {
    id: 6,
    title: "iPad 10gen",
    imageSrc: "../../../assets/ipad-pro.jpeg",
    description: [
      "OS iOS 17 - 128Go de ROM, 8Go de RAM",
      "Écran AMOLED 6,1\" Dynamic Island 120Hz",
      "Nouvelle puce Apple Bionic A17 Pro",
      "Triple Capteur photo arrière"
    ],
    price: "1 259,00 €"
  },
  {
    id: 7,
    title: "Google Pixel 7a",
    imageSrc: "../../../assets/pixel-7a.webp",
    description: [
      "OS iOS 17 - 128Go de ROM, 8Go de RAM",
      "Écran AMOLED 6,1\" Dynamic Island 120Hz",
      "Nouvelle puce Apple Bionic A17 Pro",
      "Triple Capteur photo arrière"
    ],
    price: "1 259,00 €"
  },
  {
    id: 8,
    title: "Google Pixel 8",
    imageSrc: "../../../assets/pixel-pro.jpeg",
    description: [
      "OS iOS 17 - 128Go de ROM, 8Go de RAM",
      "Écran AMOLED 6,1\" Dynamic Island 120Hz",
      "Nouvelle puce Apple Bionic A17 Pro",
      "Triple Capteur photo arrière"
    ],
    price: "1 259,00 €"
  }
];
