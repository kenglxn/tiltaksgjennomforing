import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import useAvtaleOversiktLayout from '@/AvtaleOversikt/useAvtaleOversiktLayout';

type Props = {
    tittel: string;
};

export const Filter: FunctionComponent<Props> = props => {
    const layout = useAvtaleOversiktLayout();
    return (
        <Ekspanderbartpanel tittel={props.tittel} apen={layout.erNokPlassTilTabellOgFilter} role="radiogroup">
            {props.children}
        </Ekspanderbartpanel>
    );
};
