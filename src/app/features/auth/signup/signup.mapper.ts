import { Signup, SignupForm } from '@feat/auth/signup/signup.models';

export const mapSignupFormToSignupApi = (signup: SignupForm): Signup => {
    return {
        emailPassword: {
            email: signup.email,
            password: signup.password,
        },
        userDetails: {
            firstname: signup.firstname,
            lastname: signup.lastname,
            phone: signup.phone,
            birthdate: signup.birthdate,
            email: signup.email,
            address: {},
        },
    };
};
