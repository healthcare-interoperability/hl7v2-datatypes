import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { ID } from './ID';
import { HD } from './HD';
import { IS } from './IS';
import { DT } from './DT';
import { CWE } from './CWE';

export class CX extends ComplexDataType {
    static components = {
        IdNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        ID: { aliasOf: 'IdNumber' },
        Id: { aliasOf: 'IdNumber' },
        IdentifierCheckDigit: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        CheckDigit: { aliasOf: 'IdentifierCheckDigit' },
        CheckDigitScheme: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        CodeIdentifyingTheCheckDigitSchemeEmployed: { aliasOf: 'CheckDigitScheme' },
        AssigningAuthority: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        IdentifierTypeCode: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1'] },
            ],
            position: 5,
        },
        AssigningFacility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        EffectiveDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 7,
        },
        ExpirationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 8,
        },
        AssigningJurisdiction: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 9,
        },
        AssigningAgencyOrDepartment: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 10,
        },
        SecurityCheck: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 11,
        },
        SecurityCheckScheme: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 12,
        },
    };

    static componentsByIndex = [
        '',
        'IdNumber',
        'IdentifierCheckDigit',
        'CheckDigitScheme',
        'AssigningAuthority',
        'IdentifierTypeCode',
        'AssigningFacility',
        'EffectiveDate',
        'ExpirationDate',
        'AssigningJurisdiction',
        'AssigningAgencyOrDepartment',
        'SecurityCheck',
        'SecurityCheckScheme',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get IdNumber() {
        return this.getComponent('IdNumber');
    }

    set IdNumber(value) {
        this.setComponentValue('IdNumber', value);
    }

    get ID() {
        return this.getComponent('IdNumber');
    }

    set ID(value) {
        this.setComponentValue('IdNumber', value);
    }

    get Id() {
        return this.getComponent('IdNumber');
    }

    set Id(value) {
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

    get EffectiveDate() {
        return this.getComponent('EffectiveDate');
    }

    set EffectiveDate(value) {
        this.setComponentValue('EffectiveDate', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }

    get AssigningJurisdiction() {
        return this.getComponent('AssigningJurisdiction');
    }

    set AssigningJurisdiction(value) {
        this.setComponentValue('AssigningJurisdiction', value);
    }

    get AssigningAgencyOrDepartment() {
        return this.getComponent('AssigningAgencyOrDepartment');
    }

    set AssigningAgencyOrDepartment(value) {
        this.setComponentValue('AssigningAgencyOrDepartment', value);
    }

    get SecurityCheck() {
        return this.getComponent('SecurityCheck');
    }

    set SecurityCheck(value) {
        this.setComponentValue('SecurityCheck', value);
    }

    get SecurityCheckScheme() {
        return this.getComponent('SecurityCheckScheme');
    }

    set SecurityCheckScheme(value) {
        this.setComponentValue('SecurityCheckScheme', value);
    }
}
