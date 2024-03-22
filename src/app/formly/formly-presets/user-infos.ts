import { FormlyFieldConfig } from '@ngx-formly/core';
import { PasswordValidator } from '../validators';

export const passwordForm: FormlyFieldConfig[] = [
    {
        // className: 'w-full laptop:w-4/12',
        key: 'oldPassword',
        type: 'input',
        props: {
            label: 'Mot de passe actuel',
            type: 'password',
        },
        validators: {
            validation: [PasswordValidator],
        },
    },
    {
        key: 'newPassword',
        type: 'input',
        props: {
            label: 'Nouveau mot de passe',
            type: 'password'
        },
        validators: {
            validation: [PasswordValidator]
        }
    },
    {
        key: 'confirmPassword',
        type: 'input',
        props: {
            label: 'Confirmer le mot de passe',
            type: 'password'
        },
        validators: {
            validation: [PasswordValidator]
        }
    }
]
