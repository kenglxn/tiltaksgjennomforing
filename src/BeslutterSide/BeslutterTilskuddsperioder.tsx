import { AvtaleContext } from '@/AvtaleProvider';
import { formatterDato, formatterPeriode, NORSK_DATO_FORMAT } from '@/utils/datoUtils';
import { formatterProsent } from '@/utils/formatterProsent';
import { formatterPenger } from '@/utils/PengeUtils';
import React, { FunctionComponent, useContext } from 'react';
import EtikettStatus from './EtikettStatus';

type Props = {
    startAnimering: () => void;
};

const BeslutterTilskuddsPerioder: FunctionComponent<Props> = props => {
    const { avtale } = useContext(AvtaleContext);

    const detErOpprettetTilskuddsPerioder = avtale.tilskuddPeriode.length > 0;

    return detErOpprettetTilskuddsPerioder ? (
        <div>
            <table className={'tabell'}>
                <thead>
                    <tr>
                        <th>Nr</th>
                        <th>Periode</th>
                        <th>Beløp</th>
                        <th>Sats</th>
                        <th>Kan besluttes f.o.m.</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {avtale.tilskuddPeriode.map((periode, index) => {
                        return (
                            <tr key={index}>
                                <td>{periode.løpenummer}</td>
                                <td aria-label={`Startdato ${periode.startDato} og sluttdato ${periode.sluttDato}`}>
                                    {formatterPeriode(periode.startDato, periode.sluttDato)}
                                </td>
                                <td>{formatterPenger(periode.beløp)}</td>
                                <td>{formatterProsent(periode.lonnstilskuddProsent)}</td>
                                <td>{formatterDato(periode.kanBesluttesFom, NORSK_DATO_FORMAT)}</td>
                                <td>
                                    <EtikettStatus tilskuddsperiodestatus={periode.status} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    ) : null;
};

export default BeslutterTilskuddsPerioder;
