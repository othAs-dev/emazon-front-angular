import { FormlyFieldConfig } from '@ngx-formly/core';
import {
    EmailValidator,
    PasswordValidator,
    PhoneValidator,
} from '../validators';
export const UserInfos: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: '',
        fieldGroup: [
            {
                className: 'w-full laptop:w-5/12',
                key: 'firstname',
                type: 'input',
                props: {
                    label: 'Prénom',
                },
            },
            {
                className: 'w-full laptop:w-5/12',
                key: 'lastname',
                type: 'input',
                props: {
                    label: 'Nom',
                },
            },
            {
                className: 'w-full laptop:w-5/12',
                key: 'birthdate',
                type: 'date-picker',
                props: {
                    label: 'Date de naissance',
                },
            },
            {
                className: 'w-full laptop:w-5/12',
                key: 'email',
                type: 'input',
                props: {
                    label: 'Email',
                },
                validators: {
                    validation: [EmailValidator],
                },
            },
            {
                className: 'w-full laptop:w-5/12',
                key: 'phone',
                type: 'input',
                props: {
                    label: 'Téléphone',
                    type: 'tel',
                },
                validators: {
                    validation: [PhoneValidator],
                },
            },
            {
                className: 'w-full laptop:w-5/12',
                key: 'password',
                type: 'input',
                props: {
                    label: 'Mot de passe',
                    type: 'password',
                },
                validators: {
                    validation: [PasswordValidator],
                },
            },
            {
                key: 'address',
                className: 'w-full',
                fieldGroup: [
                    {
                        className: 'w-full laptop:w-5/12',
                        key: 'street',
                        type: 'input',
                        props: {
                            label: 'Rue',
                        },
                    },
                    {
                        className: 'w-full laptop:w-5/12',

                        key: 'localilty',
                        type: 'input',
                        props: {
                            label: 'Ville',
                        },
                    },
                    {
                        className: 'w-full laptop:w-5/12',
                        key: 'postalCode',
                        type: 'input',
                        props: {
                            label: 'Code postal',
                            type: 'number',
                        },
                    },
                    {
                        className: 'w-full laptop:w-5/12',
                        key: 'country',
                        type: 'input',
                        props: {
                            label: 'Pays',
                        },
                    },
                ],
            },
        ],
    },
];
