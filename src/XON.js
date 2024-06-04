import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { CWE } from './CWE';
import { IS } from './IS';
import { NM } from './NM';
import { ID } from './ID';
import { HD } from './HD';

export class XON extends ComplexDataType {
    static components = {
        OrganizationName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        OrganizationNameTypeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
        IdNumber: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
        },
        IdentifierCheckDigit: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4'] },
                { dataType: NM, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
            ],
            position: 4,
        },
        CheckDigit: { aliasOf: 'IdentifierCheckDigit' },
        CheckDigitScheme: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8'] },
                { dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
            ],
            position: 5,
        },
        CodeIdentifyingTheCheckDigitSchemeEmployed: { aliasOf: 'CheckDigitScheme' },
        AssigningAuthority: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        IdentifierTypeCode: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 7,
        },
        AssigningFacility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
        },
        AssigningFacilityId: { aliasOf: 'AssigningFacility' },
        NameRepresentationCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 9,
        },
        OrganizationIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 10,
        },
    };

    static componentsByIndex = [
        '',
        'OrganizationName',
        'OrganizationNameTypeCode',
        'IdNumber',
        'IdentifierCheckDigit',
        'CheckDigitScheme',
        'AssigningAuthority',
        'IdentifierTypeCode',
        'AssigningFacility',
        'NameRepresentationCode',
        'OrganizationIdentifier',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get OrganizationName() {
        return this.getComponent('OrganizationName');
    }

    set OrganizationName(value) {
        this.setComponentValue('OrganizationName', value);
    }

    get OrganizationNameTypeCode() {
        return this.getComponent('OrganizationNameTypeCode');
    }

    set OrganizationNameTypeCode(value) {
        this.setComponentValue('OrganizationNameTypeCode', value);
    }

    get IdNumber() {
        return this.getComponent('IdNumber');
    }

    set IdNumber(value) {
        this.setComponentValue('IdNumber', value);
    }

    get IdentifierCheckDigit() {
        return this.getComponent('IdentifierCheckDigit');
    }

    set IdentifierCheckDigit(value) {
        this.setComponentValue('IdentifierCheckDigit', value);
    }

    get CheckDigit() {
        return this.getComponent('IdentifierCheckDigit');
    }

    set CheckDigit(value) {
        this.setComponentValue('IdentifierCheckDigit', value);
    }

    get CheckDigitScheme() {
        return this.getComponent('CheckDigitScheme');
    }

    set CheckDigitScheme(value) {
        this.setComponentValue('CheckDigitScheme', value);
    }

    get CodeIdentifyingTheCheckDigitSchemeEmployed() {
        return this.getComponent('CheckDigitScheme');
    }

    set CodeIdentifyingTheCheckDigitSchemeEmployed(value) {
        this.setComponentValue('CheckDigitScheme', value);
    }

    get AssigningAuthority() {
        return this.getComponent('AssigningAuthority');
    }

    set AssigningAuthority(value) {
        this.setComponentValue('AssigningAuthority', value);
    }

    get IdentifierTypeCode() {
        return this.getComponent('IdentifierTypeCode');
    }

    set IdentifierTypeCode(value) {
        this.setComponentValue('IdentifierTypeCode', value);
    }

    get AssigningFacility() {
        return this.getComponent('AssigningFacility');
    }

    set AssigningFacility(value) {
        this.setComponentValue('AssigningFacility', value);
    }

    get AssigningFacilityId() {
        return this.getComponent('AssigningFacility');
    }

    set AssigningFacilityId(value) {
        this.setComponentValue('AssigningFacility', value);
    }

    get NameRepresentationCode() {
        return this.getComponent('NameRepresentationCode');
    }

    set NameRepresentationCode(value) {
        this.setComponentValue('NameRepresentationCode', value);
    }

    get OrganizationIdentifier() {
        return this.getComponent('OrganizationIdentifier');
    }

    set OrganizationIdentifier(value) {
        this.setComponentValue('OrganizationIdentifier', value);
    }
}
