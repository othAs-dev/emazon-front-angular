export interface FaqItem {
  question: string;
  answer: string;
}
export interface TableRow {
  label: string;
  value: string;
}
export interface ProductItem {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  price: string;
}

export interface PageContent {
  urlImage: string[];
  shortDescription: string;
  longDescription: string;
  chipOptionsColors: string[];
  chipOptionsStorage: string[];
  tableData: TableRow[];
  products: ProductItem[];
}

export const pageContent: PageContent = {
  urlImage: ["assets/mabook-air.jpeg", "assets/mabook-air.jpeg", "assets/ipad-air.jpeg"],
  shortDescription: "Design tout écran. De toute beauté. Avec l’iPad Air, plongez dans tout ce que vous lisez, regardez ou créez. Son écran Liquid Retina 10,9 pouces dispose de tech­no­lo­gies avan­cées, telles que l’affi­cha­ge True Tone, la large gamme de couleurs P3 et un revê­te­ment antireflet.",
  longDescription: "Design tout écran. De toute beauté. Avec l’iPad Air, plongez dans tout ce que vous lisez, regardez ou créez. Son écran Liquid Retina 10,9 pouces dispose de tech­no­lo­gies avan­cées, telles que l’affi­cha­ge True Tone, la large gamme de couleurs P3 et un revê­te­ment antireflet. Touch ID est intégré au bouton supérieur. Vous pouvez ainsi utiliser votre empreinte digi­tale pour déver­­­rouiller votre iPad, vous connec­­ter à des apps ou effectuer des paie­­ments sécurisés avec Apple Pay. Et l’iPad Air se décline en cinq couleurs sublimes. Haut-parleurs stéréo sur les côtés de l’iPad AirDéverrouillez, connectez-vous et payez avec Touch ID.",
  chipOptionsColors: ['Gris sidéral', 'Bleu', 'Rose', 'Lumière stellaire'],
  chipOptionsStorage: ['128 Go', '256 Go', '512 Go', '1064 Go'],
  tableData: [
    { label: 'Gamme', value: 'iPad Air' },
    { label: 'Communication sans fil', value: 'Wi-Fi' },
    { label: 'Processeur', value: 'Apple' },
    { label: 'Longueur du produit', value: '24,8 cm' },
    { label: 'Largeur du produit', value: '17,9 cm' },
    { label: 'Hauteur du produit', value: '0,7 cm' },
    { label: 'Poids du produit', value: '461 g' },
    { label: 'SKU', value: '17996901' },
    { label: 'EAN', value: '0194252794692' },
  ],
  products: [
    {
      id: 1,
      title: "Iphone 15 pro",
      imageSrc: "assets/15-basic.jpeg",
      description: "L’iPhone 15 Pro présente un design en titane de qualité aérospatiale",
      price: "1 259 €"
    },
    {
      id: 2,
      title: "Iphone 15 pro",
      imageSrc: "assets/15-pro.jpeg",
      description: "L’iPhone 15 Pro présente un design en titane de qualité aérospatiale",
      price: "1 259 €"
    },
    {
      id: 3,
      title: "Airpods Max",
      imageSrc: "assets/airpods-mac.png",
      description: "L’iPhone 15 Pro présente un design en titane de qualité aérospatiale",
      price: "1 259 €"
    },
  ]
};

export const faqItems: FaqItem[] = [
  {
    question: 'Garanties & Assistance',
    answer: 'En cas de panne le produit est réparé sans frais. Si la réparation n’est pas possible, le produit est échangé. Olé.'
  },
  {
    question: 'Livraison',
    answer: 'On vous livre entre 24 et 72h.'
  },
  {
    question: 'Quels modes de paiement sont disponibles?',
    answer: 'Emazon accepte les modes de paiement suivants : Carte Bleue, Visa, MasterCard. Nous acceptons également Paypal et Klarna et bien plus encore.'
  },
];
