import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { FN } from './FN';
import { ST } from './ST';
import { IS } from './IS';
import { ID } from './ID';
import { CE } from './CE';
import { CWE } from './CWE';
import { DR } from './DR';
import { TS } from './TS';
import { DTM } from './DTM';

export class XPN extends ComplexDataType {
    static components = {
        FamilyName: {
            defaultDataType: FN,
            dataTypes: [
                { dataType: FN, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3'] },
            ],
            position: 1,
        },
        FamilyNameLastNamePrefix: { aliasOf: 'FamilyName' },
        GivenName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        SecondAndFurtherGivenNamesOrInitialsThereof: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        MiddleInitialOrName: { aliasOf: 'SecondAndFurtherGivenNamesOrInitialsThereof' },
        SuffixEGJrOrIii: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        Suffix: { aliasOf: 'SuffixEGJrOrIii' },
        PrefixEGDr: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        Prefix: { aliasOf: 'PrefixEGDr' },
        DegreeEGMd: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.3', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
        },
        Degree: { aliasOf: 'DegreeEGMd' },
        NameTypeCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
        },
        NameRepresentationCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
        },
        NameContext: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 9,
        },
        NameValidityRange: {
            defaultDataType: DR,
            dataTypes: [
                { dataType: DR, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: ST, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 10,
        },
        NameAssemblyOrder: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 11,
        },
        EffectiveDate: {
            defaultDataType: DTM,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 12,
        },
        ExpirationDate: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 13,
        },
        ProfessionalSuffix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 14,
        },
        CalledBy: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 15,
        },
    };

    static componentsByIndex = [
        '',
        'FamilyName',
        'GivenName',
        'SecondAndFurtherGivenNamesOrInitialsThereof',
        'SuffixEGJrOrIii',
        'PrefixEGDr',
        'DegreeEGMd',
        'NameTypeCode',
        'NameRepresentationCode',
        'NameContext',
        'NameValidityRange',
        'NameAssemblyOrder',
        'EffectiveDate',
        'ExpirationDate',
        'ProfessionalSuffix',
        'CalledBy',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get FamilyName() {
        return this.getComponent('FamilyName');
    }

    set FamilyName(value) {
        this.setComponentValue('FamilyName', value);
    }

    get FamilyNameLastNamePrefix() {
        return this.getComponent('FamilyName');
    }

    set FamilyNameLastNamePrefix(value) {
        this.setComponentValue('FamilyName', value);
    }

    get GivenName() {
        return this.getComponent('GivenName');
    }

    set GivenName(value) {
        this.setComponentValue('GivenName', value);
    }

    get SecondAndFurtherGivenNamesOrInitialsThereof() {
        return this.getComponent('SecondAndFurtherGivenNamesOrInitialsThereof');
    }

    set SecondAndFurtherGivenNamesOrInitialsThereof(value) {
        this.setComponentValue('SecondAndFurtherGivenNamesOrInitialsThereof', value);
    }

    get MiddleInitialOrName() {
        return this.getComponent('SecondAndFurtherGivenNamesOrInitialsThereof');
    }

    set MiddleInitialOrName(value) {
        this.setComponentValue('SecondAndFurtherGivenNamesOrInitialsThereof', value);
    }

    get SuffixEGJrOrIii() {
        return this.getComponent('SuffixEGJrOrIii');
    }

    set SuffixEGJrOrIii(value) {
        this.setComponentValue('SuffixEGJrOrIii', value);
    }

    get Suffix() {
        return this.getComponent('SuffixEGJrOrIii');
    }

    set Suffix(value) {
        this.setComponentValue('SuffixEGJrOrIii', value);
    }

    get PrefixEGDr() {
        return this.getComponent('PrefixEGDr');
    }

    set PrefixEGDr(value) {
        this.setComponentValue('PrefixEGDr', value);
    }

    get Prefix() {
        return this.getComponent('PrefixEGDr');
    }

    set Prefix(value) {
        this.setComponentValue('PrefixEGDr', value);
    }

    get DegreeEGMd() {
        return this.getComponent('DegreeEGMd');
    }

    set DegreeEGMd(value) {
        this.setComponentValue('DegreeEGMd', value);
    }

    get Degree() {
        return this.getComponent('DegreeEGMd');
    }

    set Degree(value) {
        this.setComponentValue('DegreeEGMd', value);
    }

    get NameTypeCode() {
        return this.getComponent('NameTypeCode');
    }

    set NameTypeCode(value) {
        this.setComponentValue('NameTypeCode', value);
    }

    get NameRepresentationCode() {
        return this.getComponent('NameRepresentationCode');
    }

    set NameRepresentationCode(value) {
        this.setComponentValue('NameRepresentationCode', value);
    }

    get NameContext() {
        return this.getComponent('NameContext');
    }

    set NameContext(value) {
        this.setComponentValue('NameContext', value);
    }

    get NameValidityRange() {
        return this.getComponent('NameValidityRange');
    }

    set NameValidityRange(value) {
        this.setComponentValue('NameValidityRange', value);
    }

    get NameAssemblyOrder() {
        return this.getComponent('NameAssemblyOrder');
    }

    set NameAssemblyOrder(value) {
        this.setComponentValue('NameAssemblyOrder', value);
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

    get ProfessionalSuffix() {
        return this.getComponent('ProfessionalSuffix');
    }

    set ProfessionalSuffix(value) {
        this.setComponentValue('ProfessionalSuffix', value);
    }

    get CalledBy() {
        return this.getComponent('CalledBy');
    }

    set CalledBy(value) {
        this.setComponentValue('CalledBy', value);
    }
}
