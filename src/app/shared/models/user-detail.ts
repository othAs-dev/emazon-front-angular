import { Address } from '@app/shared/models/address';
import { Moment } from 'moment';

export interface UserDetail {
    firstname: string;
    lastname: string;
    phone: string;
    birthdate: string;
    email: string;
    address?: Address;
}

export interface UserDetailModel {
    address: {
        postal_country: {
            country: string,
            postalCode: number
        },
        street_city: {
            locality: string,
            street: string
        }
    },
    birthdate: Moment,
    email: string,
    name: { firstname: string, lastname: string }
    phone: number
}

export interface PasswordModel {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
}
