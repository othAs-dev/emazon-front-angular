import { SelectOptions } from '@app/shared/models/selectOptions';

export const defaultOptions: SelectOptions = [
    {
        id: 1,
        option: 'Tri par défaut',
        value: 'Tri par défaut',
    },
    {
        id: 2,
        option: 'Prix croissant',
        value: 'Prix croissant',
    },
    {
        id: 3,
        option: 'Prix décroissant',
        value: 'Prix décroissant',
    },
];

export const priceOptions: SelectOptions = [
    {
        id: 1,
        option: 'all',
        value: 'Voir tout',
    },
    {
        id: 2,
        option: 'btw0and200',
        value: 'Entre 0 et 200',
    },
    {
        id: 3,
        option: 'btw200and500',
        value: 'Entre 200 et 500',
    },
    {
        id: 4,
        option: 'btw500and1000',
        value: 'Entre 500 et 1000',
    },
    {
        id: 5,
        option: 'more1000',
        value: 'Plus de 1000',
    },
];

export const brandOptions: SelectOptions = [
    {
        id: 1,
        option: 'Apple',
        value: 'Apple',
    },
    {
        id: 2,
        option: 'Huwawei',
        value: 'Huwawei',
    },
    {
        id: 3,
        option: 'Dell',
        value: 'Dell',
    },
    {
        id: 4,
        option: 'Asus',
        value: 'Asus',
    },
];
