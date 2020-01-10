import Lenke from 'nav-frontend-lenker';
import React, { FunctionComponent, useContext, useState } from 'react';
import { ReactComponent as ShareIkon } from '@/assets/ikoner/share.svg';
import './DelLenkeTilAvtalen.less';
import KopierLenkeModal from './KopierLenkeModal';
import SendVarselModal from '@/AvtaleSide/DelLenkeTilAvtalen/SendVarselModal';
import { Feature, FeatureToggleContext } from '@/FeatureToggleProvider';

const DelLenkeTilAvtalen: FunctionComponent = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const featureToggleContext = useContext(FeatureToggleContext);
    const varsleOpprettelseToggle = featureToggleContext[Feature.DelLenkeViaSms];

    return (
        <>
            <Lenke onClick={() => setOpen(true)} href="#">
                <ShareIkon className="lenkedeling__ikon" />
                Del lenke til avtalen
            </Lenke>
            {varsleOpprettelseToggle ? (
                <SendVarselModal isOpen={isOpen} lukkModal={() => setOpen(false)} />
            ) : (
                <KopierLenkeModal isOpen={isOpen} lukkModal={() => setOpen(false)} />
            )}
        </>
    );
};

export default DelLenkeTilAvtalen;
