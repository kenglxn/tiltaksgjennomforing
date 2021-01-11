import { Context } from '@/AvtaleProvider';
import { Avtale } from '@/types/avtale';

const avtaleInnhold: Avtale = {
    arbeidsgiverEtternavn: '',
    arbeidsgiverFornavn: '',
    arbeidsgiverKontonummer: '',
    arbeidsgiverTlf: '',
    arbeidsgiveravgift: 1,
    arbeidsgiveravgiftBelop: 100,
    bedriftNavn: '',
    deltakerEtternavn: '',
    deltakerFornavn: '',
    deltakerTlf: '',
    feriepengerBelop: 1,
    feriepengesats: 100,
    harFamilietilknytning: false,
    maal: [{ beskrivelse: '', kategori: 'ANNET', id: '' }],
    mentorAntallTimer: 1,
    mentorEtternavn: '',
    mentorFornavn: '',
    mentorOppgaver: '',
    mentorTimelonn: 1,
    oppfolging: '',
    otpBelop: 1,
    sluttDato: '',
    startDato: '',
    stillingprosent: 1,
    sumLonnstilskudd: 1,
    sumLonnsutgifter: 111,
    tilskuddPeriode: [
        {
            beløp: 10000,
            id: '123123',
            startDato: '',
            sluttDato: '',
            godkjentTidspunkt: '',
            tilskuddPeriodeStatus: 'UBEHANDLET',
        },
    ],
    tilrettelegging: '',
    veilederEtternavn: '',
    veilederFornavn: '',
    veilederTlf: '',
    avbrutt: false,
    avbruttDato: '',
    avbruttGrunn: '',
    bedriftNr: '',
    deltakerFnr: '',
    erLaast: false,
    erUfordelt: false,
    godkjentAvArbeidsgiver: false,
    godkjentAvDeltaker: false,
    godkjentAvVeileder: false,
    godkjentPaVegneAv: false,
    id: '',
    kanAvbrytes: true,
    tilskuddPeriodeStatus: 'UBEHANDLET',
    godkjentTidspunkt: '',
    beløp: 0,
    kanGjenopprettes: false,
    kanLåsesOpp: false,
    opprettetTidspunkt: '',
    sistEndret: '',
    status: '',
    tiltakstype: 'ARBEIDSTRENING',
    veilederNavIdent: '',
    beslutterNavIdent: '',
    versjoner: [],
};

export const contextMock: Context = {
    avtale: avtaleInnhold,
    settOgLagreBeregningsverdier: () => Promise.resolve(),
    settAvtaleVerdi: () => null,
    settAvtaleVerdier: () => null,
    hentAvtale: () => Promise.resolve(),
    avbrytAvtale: () => Promise.resolve(),
    lagreAvtale: () => Promise.resolve(),
    overtaAvtale: () => Promise.resolve(),
    laasOpp: () => Promise.resolve(),
    gjenopprettAvtale: () => Promise.resolve(),
    utforHandlingHvisRedigerbar: () => Promise.resolve(),
    lagreMaal: () => Promise.resolve(),
    slettMaal: () => Promise.resolve(),
    endretSteg: () => Promise.resolve(),
    godkjenn: () => Promise.resolve(),
    godkjennTilskudd: () => Promise.resolve(),
    godkjennPaVegne: () => Promise.resolve(),
    ulagredeEndringer: false,
    mellomLagring: undefined,
    setMellomLagring: () => null,
};
