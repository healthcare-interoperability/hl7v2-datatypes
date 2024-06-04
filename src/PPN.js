import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { FN } from './FN';
import { IS } from './IS';
import { CWE } from './CWE';
import { ID } from './ID';
import { HD } from './HD';
import { DTM } from './DTM';
import { TS } from './TS';
import { CE } from './CE';
import { DR } from './DR';

export class PPN extends ComplexDataType {
    static components = {
        PersonIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        IdNumber: { aliasOf: 'PersonIdentifier' },
        FamilyName: {
            defaultDataType: FN,
            dataTypes: [
                { dataType: FN, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3'] },
            ],
            position: 2,
        },
        FamilyNameLastNamePrefix: { aliasOf: 'FamilyName' },
        GivenName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        SecondAndFurtherGivenNamesOrInitialsThereof: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        MiddleInitialOrName: { aliasOf: 'SecondAndFurtherGivenNamesOrInitialsThereof' },
        SuffixEGJrOrIii: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        Suffix: { aliasOf: 'SuffixEGJrOrIii' },
        PrefixEGDr: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        Prefix: { aliasOf: 'PrefixEGDr' },
        DegreeEGMd: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.3', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 7,
        },
        Degree: { aliasOf: 'DegreeEGMd' },
        SourceTable: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
        },
        AssigningAuthority: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
        NameTypeCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
        },
        IdentifierCheckDigit: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
        },
        CheckDigitScheme: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
        },
        CodeIdentifyingTheCheckDigitSchemeEmployed: { aliasOf: 'CheckDigitScheme' },
        IdentifierTypeCode: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 13,
        },
        AssigningFacility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
        },
        DateTimeActionPerformed: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 15,
        },
        NameRepresentationCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 16,
        },
        NameContext: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 17,
        },
        NameValidityRange: {
            defaultDataType: DR,
            dataTypes: [
                { dataType: DR, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: ST, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 18,
        },
        NameAssemblyOrder: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 19,
        },
        EffectiveDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 20,
        },
        ExpirationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 21,
        },
        ProfessionalSuffix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 22,
        },
        AssigningJurisdiction: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
        },
        AssigningAgencyOrDepartment: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 24,
        },
        SecurityCheck: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 25,
        },
        SecurityCheckScheme: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 26,
        },
    };

    static componentsByIndex = [
        '',
        'PersonIdentifier',
        'FamilyName',
        'GivenName',
        'SecondAndFurtherGivenNamesOrInitialsThereof',
        'SuffixEGJrOrIii',
        'PrefixEGDr',
        'DegreeEGMd',
        'SourceTable',
        'AssigningAuthority',
        'NameTypeCode',
        'IdentifierCheckDigit',
        'CheckDigitScheme',
        'IdentifierTypeCode',
        'AssigningFacility',
        'DateTimeActionPerformed',
        'NameRepresentationCode',
        'NameContext',
        'NameValidityRange',
        'NameAssemblyOrder',
        'EffectiveDate',
        'ExpirationDate',
        'ProfessionalSuffix',
        'AssigningJurisdiction',
        'AssigningAgencyOrDepartment',
        'SecurityCheck',
        'SecurityCheckScheme',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get PersonIdentifier() {
        return this.getComponent('PersonIdentifier');
    }

    set PersonIdentifier(value) {
        this.setComponentValue('PersonIdentifier', value);
    }

    get IdNumber() {
        return this.getComponent('PersonIdentifier');
    }

    set IdNumber(value) {
        this.setComponentValue('PersonIdentifier', value);
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

    get SourceTable() {
        return this.getComponent('SourceTable');
    }

    set SourceTable(value) {
        this.setComponentValue('SourceTable', value);
    }

    get AssigningAuthority() {
        return this.getComponent('AssigningAuthority');
    }

    set AssigningAuthority(value) {
        this.setComponentValue('AssigningAuthority', value);
    }

    get NameTypeCode() {
        return this.getComponent('NameTypeCode');
    }

    set NameTypeCode(value) {
        this.setComponentValue('NameTypeCode', value);
    }

    get IdentifierCheckDigit() {
        return this.getComponent('IdentifierCheckDigit');
    }

    set IdentifierCheckDigit(value) {
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

    get DateTimeActionPerformed() {
        return this.getComponent('DateTimeActionPerformed');
    }

    set DateTimeActionPerformed(value) {
        this.setComponentValue('DateTimeActionPerformed', value);
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
