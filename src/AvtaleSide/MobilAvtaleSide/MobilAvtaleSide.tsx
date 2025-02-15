import OppgaveLinje from '@/AvtaleSide/Oppgavelinje/Oppgavelinje';
import { Rolle } from '@/types/innlogget-bruker';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import React from 'react';
import { StegInfo } from '../AvtaleSide';

interface Props {
    avtaleSteg: StegInfo[];
    rolle: Rolle;
}

const MobilAvtaleSide: React.FunctionComponent<Props> = props => {
    const ekspanderbartPanel = props.avtaleSteg.map(steg => (
        <div className="avtaleside__ekspanderbart-panel" key={steg.id}>
            <Ekspanderbartpanel tittel={steg.label}>{steg.komponent}</Ekspanderbartpanel>
        </div>
    ));

    return (
        <>
            <OppgaveLinje />
            <form>{ekspanderbartPanel}</form>
        </>
    );
};

export default MobilAvtaleSide;
