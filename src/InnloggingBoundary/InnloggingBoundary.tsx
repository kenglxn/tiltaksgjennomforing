import * as React from 'react';
import { FunctionComponent } from 'react';
import Innloggingslinje from './Innloggingslinje';
import Innloggingside from './Innloggingsside';
import useInnlogget from './useInnlogget';

const InnloggingBoundary: FunctionComponent = props => {
    const { innloggetBruker, uinnlogget, innloggingskilder } = useInnlogget();

    if (uinnlogget) {
        return <Innloggingside innloggingskilder={innloggingskilder} />;
    } else if (innloggetBruker) {
        return (
            <>
                <Innloggingslinje innloggetBruker={innloggetBruker} />
                {props.children}
            </>
        );
    } else {
        return null;
    }
};

export default InnloggingBoundary;
