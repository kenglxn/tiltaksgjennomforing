import { Maalkategori } from './maalkategorier';
import { Nettressurs } from '@/types/nettressurs';

export type Avtale<T extends FellesAvtaleinnhold = AltAvtaleinnhold> = Avbrytelse &
    AvtaleMetadata &
    Avtaleparter &
    Versjonering<T> &
    FellesAvtaleinnhold &
    T;

type FellesAvtaleinnhold = Arbeidsgiverinfo &
    Bedriftinfo &
    Deltakerinfo &
    Godkjenninger &
    Oppfolging &
    Stilling &
    Tilrettelegging &
    Varighet &
    Veilederinfo & { versjon: number };

export type ArbeidstreningAvtaleinnhold = FellesAvtaleinnhold & MaalListe & Oppgaver;

export type LonnstilskuddAvtaleinnhold = FellesAvtaleinnhold & Beregningsgrunnlag & Kontonummer;

export type AltAvtaleinnhold = ArbeidstreningAvtaleinnhold & LonnstilskuddAvtaleinnhold;

export type TiltaksType = 'ARBEIDSTRENING' | 'MIDLERTIDIG_LONNSTILSKUDD' | 'VARIG_LONNSTILSKUDD';

export interface AvtaleMetadata {
    id: string;
    opprettetTidspunkt: string;
    sistEndret: string;
    tiltakstype: TiltaksType;
}

export interface Avtaleparter {
    bedriftNr: string;
    deltakerFnr: string;
    veilederNavIdent: string;
}

export interface Bedriftinfo {
    bedriftNavn: string;
}

export interface Arbeidsgiverinfo {
    arbeidsgiverFornavn: string;
    arbeidsgiverEtternavn: string;
    arbeidsgiverTlf: string;
}

export interface Deltakerinfo {
    deltakerFornavn: string;
    deltakerEtternavn: string;
    deltakerTlf: string;
}
export interface Veilederinfo {
    veilederFornavn: string;
    veilederEtternavn: string;
    veilederTlf: string;
}

export interface Varighet {
    startDato: number;
    sluttDato: number;
    stillingprosent: number;
}

export interface Stilling {
    stillingtype?: string;
    stillingbeskrivelse?: string;
}

export interface Beregningsgrunnlag {
    manedslonn?: number;
    feriepengesats: number;
    arbeidsgiveravgift: number;
    lonnstilskuddProsent: string;
    stillingprosent: number;
}

export interface Kontonummer {
    arbeidsgiverKontonummer: string;
}

export interface MaalListe {
    maal: Maal[];
}

export interface Maal {
    id?: string;
    opprettetTimestamp?: number;
    kategori: Maalkategori;
    beskrivelse: string;
}

export interface Oppgaver {
    oppgaver: Oppgave[];
}

export interface Oppgave {
    id?: string;
    opprettetTimestamp?: number;
    tittel: string;
    beskrivelse: string;
    opplaering: string;
}

export interface Oppfolging {
    oppfolging: string;
}

export interface Tilrettelegging {
    tilrettelegging: string;
}

export interface Godkjenninger {
    godkjentAvDeltaker: boolean;
    godkjentAvArbeidsgiver: boolean;
    godkjentAvVeileder: boolean;
    status: string;
    godkjentPaVegneAv: boolean;
    godkjentPaVegneGrunn?: GodkjentPaVegneGrunner;
    erLaast: boolean;
}

export interface Avbrytelse {
    kanAvbrytes: boolean;
    avbrutt: boolean;
}
export interface GodkjentPaVegneGrunner {
    ikkeBankId: boolean;
    reservert: boolean;
    digitalKompetanse: boolean;
}

export interface Versjonering<T extends FellesAvtaleinnhold> {
    versjon: number;
    versjoner: T[];
    kanLåsesOpp: boolean;
}

export type AvtalelisteRessurs = Nettressurs<Avtale[]>;
