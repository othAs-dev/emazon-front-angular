import { Id } from './id';

export interface SelectOption {
    id: Id;
    option: string;
    value: string;
}
export type SelectOptions = SelectOption[];
