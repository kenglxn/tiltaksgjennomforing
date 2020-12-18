import { Feature, FeatureToggleContext } from '@/FeatureToggleProvider';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import { FunctionComponent, useContext } from 'react';

export const VarselOmNedetid: FunctionComponent = () => {
    const featureToggleContext = useContext(FeatureToggleContext);
    const visNedetidBannerToggle = featureToggleContext[Feature.VisNedetidBanner];

    if (visNedetidBannerToggle.enabled) {
        return <AlertStripeAdvarsel>{visNedetidBannerToggle.payload.value || 'en anne feil'}</AlertStripeAdvarsel>;
    } else {
        return null;
    }
};
