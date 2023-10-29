export interface CategoryItem {
  id: number;
  title: string;
  tooltip: string;
  imageSrc: string;
  description: string;
}

// Définissez une interface pour les éléments de logoData
export interface LogoItem {
  id: number;
  alt: string;
  src: string;
  tooltip: string;
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
  { id: 1, alt: 'Google Logo', src: '../../../assets/logo/logo-google.png', tooltip: 'Nos produits Google' },
  { id: 2, alt: 'Xiaomi Logo', src: '../../../assets/logo/logo-xiaomi.png', tooltip: 'Nos produits Xiaomi' },
  { id: 3, alt: 'Apple Logo', src: '../../../assets/logo/apple-logo-0.png', tooltip: 'Nos produits Apple' },
  { id: 4, alt: 'Samsung Logo', src: '../../../assets/logo/logo-samsung.png', tooltip: 'Nos produits Samsung' },
];
