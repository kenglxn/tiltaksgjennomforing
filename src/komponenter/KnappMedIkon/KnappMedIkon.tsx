import avbruttIkon from '@/assets/ikoner/stop.svg';
import classNames from 'classnames';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './KnappMedIkon.less';
import redigerIkon from './rediger-penn.svg';
import slettIkon from './soppeldunk.svg';

type IkonType = 'blyant' | 'soppelkasse' | 'avbrutt';

interface Props {
    ikonType: IkonType;
    label: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    backgroundColor?: string;
    disabled?: boolean;
}

const ikoner = {
    blyant: redigerIkon,
    soppelkasse: slettIkon,
    avbrutt: avbruttIkon,
};

const KnappMedIkon = (props: Props) => (
    <button
        disabled={props.disabled}
        type="button"
        onClick={props.onClick}
        className={classNames('knapp-med-ikon', {
            'knapp-med-ikon__backgroundColor': props.backgroundColor !== null,
        })}
    >
        <img src={ikoner[props.ikonType]} alt={props.ikonType} />
        <Normaltekst className="knapp-med-ikon__label">{props.label}</Normaltekst>
    </button>
);

export default KnappMedIkon;
