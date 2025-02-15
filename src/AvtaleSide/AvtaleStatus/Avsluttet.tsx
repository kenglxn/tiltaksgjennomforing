import { ReactComponent as InaktivIkon } from '@/assets/ikoner/inaktiv.svg';
import StatusPanel from '@/AvtaleSide/AvtaleStatus/StatusPanel';
import { Avtale } from '@/types/avtale';
import { formatterDato, NORSK_DATO_FORMAT } from '@/utils/datoUtils';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';

interface Props {
    avtale: Avtale;
}

const Avsluttet: FunctionComponent<Props> = ({ avtale }) => {
    return (
        <StatusPanel
            ikon={InaktivIkon}
            header="Tiltaket er avsluttet"
            body={
                <Normaltekst>
                    Tiltaket varte fra {formatterDato(avtale.gjeldendeInnhold.startDato!, NORSK_DATO_FORMAT)} til{' '}
                    {formatterDato(avtale.gjeldendeInnhold.sluttDato!, NORSK_DATO_FORMAT)}.
                </Normaltekst>
            }
        />
    );
};

export default Avsluttet;
