import { Login } from '@app/shared/models/login';
import { UserDetail } from '@app/shared/models/user-detail';

export interface Signup {
    emailPassword: Login;
    userDetails: UserDetail;
}

export interface SignupForm {
    firstname: string;
    lastname: string;
    birthdate: string;
    email: string;
    phone: string;
    password: string;
}
