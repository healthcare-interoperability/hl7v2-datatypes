import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';
import { ST } from './ST';
import { ID } from './ID';
import { HD } from './HD';

export class CK extends ComplexDataType {
    static components = {
        IDNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 1,
        },
        IdNumber: { aliasOf: 'IDNumber' },
        CheckDigit: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.3', '2.4'] },
                { dataType: NM, versions: ['2.3.1'] },
            ],
            position: 2,
        },
        CodeIdentifyingTheCheckDigitSchemeEmployed: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 3,
        },
        AssigningAuthority: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'IDNumber', 'CheckDigit', 'CodeIdentifyingTheCheckDigitSchemeEmployed', 'AssigningAuthority'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get IDNumber() {
        return this.getComponent('IDNumber');
    }

    set IDNumber(value) {
        this.setComponentValue('IDNumber', value);
    }

    get IdNumber() {
        return this.getComponent('IDNumber');
    }

    set IdNumber(value) {
        this.setComponentValue('IDNumber', value);
    }

    get CheckDigit() {
        return this.getComponent('CheckDigit');
    }

    set CheckDigit(value) {
        this.setComponentValue('CheckDigit', value);
    }

    get CodeIdentifyingTheCheckDigitSchemeEmployed() {
        return this.getComponent('CodeIdentifyingTheCheckDigitSchemeEmployed');
    }

    set CodeIdentifyingTheCheckDigitSchemeEmployed(value) {
        this.setComponentValue('CodeIdentifyingTheCheckDigitSchemeEmployed', value);
    }

    get AssigningAuthority() {
        return this.getComponent('AssigningAuthority');
    }

    set AssigningAuthority(value) {
        this.setComponentValue('AssigningAuthority', value);
    }
}
