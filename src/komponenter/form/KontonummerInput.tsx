import FormattedNumberInput from '@/komponenter/form/FormattedNumberInput';
import { fromFormatted } from '@/komponenter/form/utils/form-utils';
import { InputProps } from 'nav-frontend-skjema';
import React from 'react';

export const formaterKontonummer = (value: any): string => {
    if (!value) {
        return '';
    }
    return [value.substring(0, 4), value.substring(4, 6), value.substring(6, 11)].join(' ');
};

const KontonummerInput: React.FunctionComponent<InputProps> = (props) => {
    const validatorer = [
        (v: string) => {
            if (!v) {
                return 'Feltet er påkrevd';
            }
        },
        (v: string) => {
            if (v && fromFormatted(v).length !== 11) {
                return 'Kontonummer må være 11 siffer';
            }
        },
    ];
    return (
        <FormattedNumberInput
            validatorer={validatorer}
            toFormatted={formaterKontonummer}
            maxLength={11}
            minLength={11}
            {...props}
        />
    );
};

export default KontonummerInput;
