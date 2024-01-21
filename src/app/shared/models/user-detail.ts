import { Address } from '@app/shared/models/address';

export interface UserDetail {
    firstname: string;
    lastname: string;
    phone: string;
    birthdate: string;
    email: string;
    address?: Address;
}
