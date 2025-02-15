import { InnloggetBrukerContext } from '@/InnloggingBoundary/InnloggingBoundary';
import '@navikt/bedriftsmeny/lib/bedriftsmeny.css';
import amplitude from 'amplitude-js';
import { Innholdstittel, UndertekstBold } from 'nav-frontend-typografi';
import React, { useContext } from 'react';
import VerticalSpacer from '../layout/VerticalSpacer';
import nyheter from '../NyttIAppen/nyheter';
import Nytt from '../NyttIAppen/Nytt';
import './Banner.less';

interface Props {
    tekst: string;
    undertittel?: string;
}

const BannerNAVAnsatt: React.FunctionComponent<Props> = props => {
    const innloggetBruker = useContext(InnloggetBrukerContext);

    return innloggetBruker.erNavAnsatt ? (
        <div className={'banner-veileder-container'}>
            <div className="banner-veileder" role="banner">
                <div>
                    <Innholdstittel role="heading" aria-level={1}>
                        {props.tekst}
                    </Innholdstittel>

                    {props.undertittel && (
                        <>
                            <VerticalSpacer rem={0.5} />
                            <UndertekstBold>{props.undertittel}</UndertekstBold>
                        </>
                    )}
                </div>

                <div>
                    <Nytt
                        onÅpneNyheter={() => amplitude.logEvent('#tiltak-nyheter-apnet')}
                        åpneVedFørsteBesøk={true}
                        nyheter={nyheter}
                        title="Nytt i tiltaksgjennomføring"
                        navn="Tiltaksgjennomføring"
                    />
                </div>
            </div>
        </div>
    ) : null;
};

export default BannerNAVAnsatt;
