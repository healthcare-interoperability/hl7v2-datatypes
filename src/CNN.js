import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { IS } from './IS';
import { ID } from './ID';

export class CNN extends ComplexDataType {
    static components = {
        IdNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        IDNumber: { aliasOf: 'IdNumber' },
        FamilyName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        GivenName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        SecondAndFurtherGivenNamesOrInitialsThereof: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        SuffixEGJrOrIii: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        Suffix: { aliasOf: 'SuffixEGJrOrIii' },
        PrefixEGDr: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        Prefix: { aliasOf: 'PrefixEGDr' },
        DegreeEGMd: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
        },
        Degree: { aliasOf: 'DegreeEGMd' },
        SourceTable: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
        },
        AssigningAuthorityNamespaceId: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
        AssigningAuthorityNamespaceID: { aliasOf: 'AssigningAuthorityNamespaceId' },
        AssigningAuthorityUniversalId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
        },
        AssigningAuthorityUniversalID: { aliasOf: 'AssigningAuthorityUniversalId' },
        AssigningAuthorityUniversalIdType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
        },
        AssigningAuthorityUniversalIDType: { aliasOf: 'AssigningAuthorityUniversalIdType' },
    };

    static componentsByIndex = [
        '',
        'IdNumber',
        'FamilyName',
        'GivenName',
        'SecondAndFurtherGivenNamesOrInitialsThereof',
        'SuffixEGJrOrIii',
        'PrefixEGDr',
        'DegreeEGMd',
        'SourceTable',
        'AssigningAuthorityNamespaceId',
        'AssigningAuthorityUniversalId',
        'AssigningAuthorityUniversalIdType',
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

    get IDNumber() {
        return this.getComponent('IdNumber');
    }

    set IDNumber(value) {
        this.setComponentValue('IdNumber', value);
    }

    get FamilyName() {
        return this.getComponent('FamilyName');
    }

    set FamilyName(value) {
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

    get AssigningAuthorityNamespaceId() {
        return this.getComponent('AssigningAuthorityNamespaceId');
    }

    set AssigningAuthorityNamespaceId(value) {
        this.setComponentValue('AssigningAuthorityNamespaceId', value);
    }

    get AssigningAuthorityNamespaceID() {
        return this.getComponent('AssigningAuthorityNamespaceId');
    }

    set AssigningAuthorityNamespaceID(value) {
        this.setComponentValue('AssigningAuthorityNamespaceId', value);
    }

    get AssigningAuthorityUniversalId() {
        return this.getComponent('AssigningAuthorityUniversalId');
    }

    set AssigningAuthorityUniversalId(value) {
        this.setComponentValue('AssigningAuthorityUniversalId', value);
    }

    get AssigningAuthorityUniversalID() {
        return this.getComponent('AssigningAuthorityUniversalId');
    }

    set AssigningAuthorityUniversalID(value) {
        this.setComponentValue('AssigningAuthorityUniversalId', value);
    }

    get AssigningAuthorityUniversalIdType() {
        return this.getComponent('AssigningAuthorityUniversalIdType');
    }

    set AssigningAuthorityUniversalIdType(value) {
        this.setComponentValue('AssigningAuthorityUniversalIdType', value);
    }

    get AssigningAuthorityUniversalIDType() {
        return this.getComponent('AssigningAuthorityUniversalIdType');
    }

    set AssigningAuthorityUniversalIDType(value) {
        this.setComponentValue('AssigningAuthorityUniversalIdType', value);
    }
}
