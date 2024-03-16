import { CategoryApi } from '@app/shared/models/api.model';
import { Category } from '@app/shared/models/category';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UserDetail, UserDetailModel } from '@app/shared/models/user-detail';
import { EmailValidator, PhoneValidator } from '@app/formlyConfig/validators';
import * as moment from 'moment';

export const CommonMapper = {
    mapCategoryApiToCategoryItem(categoryApi: CategoryApi): Category {
        return {
            id: categoryApi.id,
            name: categoryApi.name,
            description: categoryApi.description,
            image: categoryApi.imgSrc
        };
    }
};

export function mapUserDetailModelToUserDetail(udm: UserDetailModel): UserDetail {
    return {
        address: {
            country: udm.address.postal_country.country,
            locality: udm.address.street_city.locality,
            postalCode: udm.address.postal_country.postalCode.toString(),
            region: '',
            street: udm.address.street_city.street
        },
        birthdate: udm.birthdate.format("DD/MM/YYYY"),
        email: udm.email,
        firstname: udm.name.firstname,
        lastname: udm.name.lastname,
        phone: udm.phone.toString()
    };
}

export function mapUserDetailToFormlyFieldConfig(userDetail: UserDetail): FormlyFieldConfig[] {
    return [
        {
            fieldGroupClassName: 'flex flex-col',
            fieldGroup: [
                {
                    key: 'name',
                    className: 'w-full ',
                    fieldGroupClassName: 'formly-group flex-nowrap',
                    fieldGroup: [
                        {
                            className: 'w-full',
                            defaultValue: userDetail.firstname,
                            key: 'firstname',
                            type: 'input',
                            props: {
                                label: 'Prénom'
                            }
                        },
                        {
                            className: 'w-full',
                            defaultValue: userDetail.lastname,
                            key: 'lastname',
                            type: 'input',
                            props: {
                                label: 'Nom'
                            }
                        }
                    ]
                },
                {
                    className: 'w-full',
                    defaultValue: userDetail.email,
                    key: 'email',
                    type: 'input',
                    props: {
                        label: 'Email'
                    },
                    validators: {
                        validation: [EmailValidator]
                    }
                },
                {
                    // className: 'w-full laptop:w-3/12',
                    key: 'birthdate',
                    defaultValue: moment(userDetail.birthdate, "DD/MM/YYYY"),
                    type: 'date-picker',
                    props: {
                        label: 'Date de naissance'
                    }
                },
                {
                    // className: 'w-full laptop:w-4/12',
                    key: 'phone',
                    defaultValue: userDetail.phone,
                    type: 'input',
                    props: {
                        label: 'Téléphone',
                        type: 'tel'
                    },
                    validators: {
                        validation: [PhoneValidator]
                    }
                },
                {
                    key: 'address',
                    fieldGroupClassName: 'flex-group',
                    fieldGroup: [
                        {
                            key: 'street_city',
                            fieldGroupClassName: 'formly-group flex-nowrap',
                            fieldGroup: [
                                {
                                    className: 'w-full',
                                    key: 'street',
                                    defaultValue: userDetail.address?.street,
                                    type: 'input',
                                    props: {
                                        label: 'Rue'
                                    }
                                },
                                {
                                    className: 'w-full',
                                    key: 'locality',
                                    defaultValue: userDetail.address?.locality,
                                    type: 'input',
                                    props: {
                                        label: 'Ville'
                                    }
                                }
                            ]
                        },
                        {
                            key: 'postal_country',
                            fieldGroupClassName: 'flex flex-row gap-4',
                            fieldGroup: [
                                {
                                    className: 'w-full',
                                    key: 'postalCode',
                                    defaultValue: userDetail.address?.postalCode,
                                    type: 'input',
                                    props: {
                                        label: 'Code postal',
                                        type: 'number'
                                    }
                                },
                                {
                                    className: 'w-full',
                                    key: 'country',
                                    defaultValue: userDetail.address?.country,
                                    type: 'input',
                                    props: {
                                        label: 'Pays'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
}
