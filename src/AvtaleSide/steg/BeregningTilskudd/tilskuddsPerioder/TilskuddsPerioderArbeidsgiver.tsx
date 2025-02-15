import { TilskuddsPeriode } from '@/types/avtale';
import BEMHelper from '@/utils/bem';
import { formatterDato, formatterPeriode, NORSK_DATO_FORMAT } from '@/utils/datoUtils';
import { formatterProsent } from '@/utils/formatterProsent';
import { formatterPenger } from '@/utils/PengeUtils';
import React, { FunctionComponent } from 'react';
import './tilskuddsPerioder.less';

const cls = BEMHelper('tilskuddsPerioder');

type Props = {
    tilskuddsperioder: TilskuddsPeriode[];
};

const TilskuddsPerioderArbeidsgiver: FunctionComponent<Props> = props => {
    const detErOpprettetTilskuddsPerioder = props.tilskuddsperioder.length > 0;

    return detErOpprettetTilskuddsPerioder ? (
        <div className={cls.className}>
            <table className={'tabell'}>
                <thead>
                    <tr>
                        <th>Nr</th>
                        <th>Periode</th>
                        <th>Prosent</th>
                        <th>Beløp</th>
                        <th>Kan be om refusjon</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tilskuddsperioder
                        .filter(t => t.aktiv)
                        .map((periode, index) => {
                            return (
                                <tr key={index}>
                                    <td>{periode.løpenummer}</td>
                                    <td aria-label={`Startdato ${periode.startDato} og sluttdato ${periode.sluttDato}`}>
                                        {formatterPeriode(periode.startDato, periode.sluttDato)}
                                    </td>
                                    <td>{formatterProsent(periode.lonnstilskuddProsent)}</td>
                                    <td>{formatterPenger(periode.beløp)}</td>
                                    <td>{formatterDato(periode.sluttDato, NORSK_DATO_FORMAT)}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    ) : null;
};

export default TilskuddsPerioderArbeidsgiver;
