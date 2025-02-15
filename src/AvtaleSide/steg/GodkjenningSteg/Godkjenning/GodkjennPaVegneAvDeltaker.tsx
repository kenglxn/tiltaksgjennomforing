import { AvtaleContext } from '@/AvtaleProvider';
import GodkjennPåVegneAvDeltakerCheckboxer from '@/AvtaleSide/steg/GodkjenningSteg/Godkjenning/GodkjennPåVegneAvDeltakerCheckboxer';
import LagreKnapp from '@/komponenter/LagreKnapp/LagreKnapp';
import VerticalSpacer from '@/komponenter/layout/VerticalSpacer';
import { GodkjentPaVegneAvDeltakerGrunner } from '@/types/avtale';
import { Checkbox, SkjemaGruppe } from 'nav-frontend-skjema';
import React, { Dispatch, FunctionComponent, SetStateAction, useContext, useState } from 'react';

type Props = {
    skalGodkjennesPaVegne: boolean;
    setSkalGodkjennesPaVegne: Dispatch<SetStateAction<boolean>>;
};

const GodkjennPaVegneAvDeltaker: FunctionComponent<Props> = (props) => {
    const avtaleContext = useContext(AvtaleContext);

    const godkjennPaVegneLabel = props.skalGodkjennesPaVegne
        ? 'Jeg skal godkjenne på vegne av deltakeren, fordi deltakeren'
        : 'Jeg skal godkjenne på vegne av deltakeren';

    const [godkjentPåVegneAvGrunner, setGodkjentPåVegneAvGrunner] = useState<GodkjentPaVegneAvDeltakerGrunner>({
        digitalKompetanse: false,
        reservert: false,
        ikkeBankId: false,
    });

    const [feilmeldingGrunn, setFeilmeldingGrunn] = useState<string>();
    const [deltakerInformert, setDeltakerInformert] = useState(false);
    const [feilDeltakerInformert, setFeilDeltakerInformert] = useState<string>();

    const godkjennAvtalen = () => {
        const valgtMinstEnGrunn =
            godkjentPåVegneAvGrunner.ikkeBankId ||
            godkjentPåVegneAvGrunner.reservert ||
            godkjentPåVegneAvGrunner.digitalKompetanse;
        if (!valgtMinstEnGrunn) {
            setFeilmeldingGrunn('Oppgi minst én grunn for godkjenning på vegne av deltaker');
            return;
        } else {
            setFeilmeldingGrunn(undefined);
        }

        if (!deltakerInformert) {
            setFeilDeltakerInformert('Deltaker må være informert om kravene og godkjenne innholdet i avtalen.');
            return;
        } else {
            setFeilDeltakerInformert(undefined);
        }

        return avtaleContext.godkjennPaVegneAvDeltaker(godkjentPåVegneAvGrunner);
    };

    return (
        <>
            <Checkbox
                label={godkjennPaVegneLabel}
                checked={props.skalGodkjennesPaVegne}
                onChange={(e) => {
                    props.setSkalGodkjennesPaVegne(e.currentTarget.checked);
                }}
            />

            {props.skalGodkjennesPaVegne && (
                <>
                    <VerticalSpacer rem={1} />
                    <div style={{ marginLeft: '2rem' }}>
                        <GodkjennPåVegneAvDeltakerCheckboxer
                            godkjentPåVegneAvGrunner={godkjentPåVegneAvGrunner}
                            setGodkjentPåVegneAvGrunner={setGodkjentPåVegneAvGrunner}
                            feilmeldingGrunn={feilmeldingGrunn}
                            setFeilmeldingGrunn={setFeilmeldingGrunn}
                        />
                    </div>
                    <VerticalSpacer rem={1} />
                    <SkjemaGruppe feil={feilDeltakerInformert}>
                        <Checkbox
                            label="Deltakeren er informert om kravene og godkjenner innholdet i avtalen."
                            checked={deltakerInformert}
                            onChange={() => setDeltakerInformert(!deltakerInformert)}
                        />
                    </SkjemaGruppe>
                </>
            )}
            {props.skalGodkjennesPaVegne && <LagreKnapp lagre={godkjennAvtalen} label="Godkjenn avtalen" />}
            <VerticalSpacer rem={1} />
        </>
    );
};

export default GodkjennPaVegneAvDeltaker;
