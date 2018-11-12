import * as React from 'react';
import { Input, SkjemaGruppe } from 'nav-frontend-skjema';
import { EndreAvtale } from '../EndreAvtale';
import { Deltakerinfo } from '../Avtale';

const DeltakerinfoDel = (props: Deltakerinfo & EndreAvtale) => (
    <SkjemaGruppe title="Informasjon om deltaker">
        <div className="kontaktinformasjon__deltakernavn">
            <Input
                className="kontaktinformasjon__deltakernavn__fornavn"
                label="Fornavn"
                defaultValue={props.deltakerFornavn}
                onChange={event =>
                    props.endreVerdi('deltakerFornavn', event.target.value)
                }
            />
            <Input
                className="kontaktinformasjon__deltakernavn__etternavn"
                label="Etternavn"
                defaultValue={props.deltakerEtternavn}
                onChange={event =>
                    props.endreVerdi('deltakerEtternavn', event.target.value)
                }
            />
        </div>
        <Input
            className="kontaktinformasjon__adresse"
            label="Adresse"
            defaultValue={props.deltakerAdresse}
            onChange={event =>
                props.endreVerdi('deltakerAdresse', event.target.value)
            }
        />
        <div className="kontaktinformasjon__postwrapper">
            <Input
                className="kontaktinformasjon__postwrapper__postnummer"
                label="Postnummer"
                defaultValue={props.deltakerPostnummer}
                onChange={event =>
                    props.endreVerdi('deltakerPostnummer', event.target.value)
                }
            />
            <Input
                className="kontaktinformasjon__postwrapper__poststed"
                label="Poststed"
                defaultValue={props.deltakerPoststed}
                onChange={event =>
                    props.endreVerdi('deltakerPoststed', event.target.value)
                }
            />
        </div>
    </SkjemaGruppe>
);

export default DeltakerinfoDel;
