import { GodkjentPaVegneAvDeltakerGrunner } from '@/types/avtale';
import { Checkbox, SkjemaGruppe } from 'nav-frontend-skjema';
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';

interface Props {
    godkjentPåVegneAvGrunner: GodkjentPaVegneAvDeltakerGrunner;
    setGodkjentPåVegneAvGrunner: Dispatch<SetStateAction<GodkjentPaVegneAvDeltakerGrunner>>;
    feilmeldingGrunn: string | undefined;
    setFeilmeldingGrunn: Dispatch<SetStateAction<string | undefined>>;
}

const GodkjennPåVegneAvDeltakerCheckboxer: FunctionComponent<Props> = (props) => {
    return (
        <SkjemaGruppe feil={props.feilmeldingGrunn}>
            <Checkbox
                label="har ikke BankID"
                checked={props.godkjentPåVegneAvGrunner.ikkeBankId}
                onChange={(event) =>
                    props.setGodkjentPåVegneAvGrunner({
                        ...props.godkjentPåVegneAvGrunner,
                        ikkeBankId: event.currentTarget.checked,
                    })
                }
            />
            <Checkbox
                label="har reservert seg mot digitale tjenester"
                checked={props.godkjentPåVegneAvGrunner.reservert}
                onChange={(event) =>
                    props.setGodkjentPåVegneAvGrunner({
                        ...props.godkjentPåVegneAvGrunner,
                        reservert: event.currentTarget.checked,
                    })
                }
            />
            <Checkbox
                label="mangler digital kompetanse"
                checked={props.godkjentPåVegneAvGrunner.digitalKompetanse}
                onChange={(event) =>
                    props.setGodkjentPåVegneAvGrunner({
                        ...props.godkjentPåVegneAvGrunner,
                        digitalKompetanse: event.currentTarget.checked,
                    })
                }
            />
        </SkjemaGruppe>
    );
};

export default GodkjennPåVegneAvDeltakerCheckboxer;
