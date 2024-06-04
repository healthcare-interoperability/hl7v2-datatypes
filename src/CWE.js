import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { ID } from './ID';
import { IS } from './IS';
import { DTM } from './DTM';

export class CWE extends ComplexDataType {
    static components = {
        Identifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Text: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        NameOfCodingSystem: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3.1'] },
                { dataType: IS, versions: ['2.4'] },
            ],
            position: 3,
        },
        AlternateIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        AlternateText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        NameOfAlternateCodingSystem: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3.1'] },
                { dataType: IS, versions: ['2.4'] },
            ],
            position: 6,
        },
        CodingSystemVersionId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
        },
        AlternateCodingSystemVersionId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
        },
        OriginalText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
        SecondAlternateIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 10,
        },
        SecondAlternateText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 11,
        },
        NameOfSecondAlternateCodingSystem: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 12,
        },
        SecondAlternateCodingSystemVersionId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 13,
        },
        CodingSystemOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 14,
        },
        ValueSetOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 15,
        },
        ValueSetVersionId: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 16,
        },
        AlternateCodingSystemOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 17,
        },
        AlternateValueSetOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 18,
        },
        AlternateValueSetVersionId: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 19,
        },
        SecondAlternateCodingSystemOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 20,
        },
        SecondAlternateValueSetOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 21,
        },
        SecondAlternateValueSetVersionId: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 22,
        },
    };

    static componentsByIndex = [
        '',
        'Identifier',
        'Text',
        'NameOfCodingSystem',
        'AlternateIdentifier',
        'AlternateText',
        'NameOfAlternateCodingSystem',
        'CodingSystemVersionId',
        'AlternateCodingSystemVersionId',
        'OriginalText',
        'SecondAlternateIdentifier',
        'SecondAlternateText',
        'NameOfSecondAlternateCodingSystem',
        'SecondAlternateCodingSystemVersionId',
        'CodingSystemOid',
        'ValueSetOid',
        'ValueSetVersionId',
        'AlternateCodingSystemOid',
        'AlternateValueSetOid',
        'AlternateValueSetVersionId',
        'SecondAlternateCodingSystemOid',
        'SecondAlternateValueSetOid',
        'SecondAlternateValueSetVersionId',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Identifier() {
        return this.getComponent('Identifier');
    }

    set Identifier(value) {
        this.setComponentValue('Identifier', value);
    }

    get Text() {
        return this.getComponent('Text');
    }

    set Text(value) {
        this.setComponentValue('Text', value);
    }

    get NameOfCodingSystem() {
        return this.getComponent('NameOfCodingSystem');
    }

    set NameOfCodingSystem(value) {
        this.setComponentValue('NameOfCodingSystem', value);
    }

    get AlternateIdentifier() {
        return this.getComponent('AlternateIdentifier');
    }

    set AlternateIdentifier(value) {
        this.setComponentValue('AlternateIdentifier', value);
    }

    get AlternateText() {
        return this.getComponent('AlternateText');
    }

    set AlternateText(value) {
        this.setComponentValue('AlternateText', value);
    }

    get NameOfAlternateCodingSystem() {
        return this.getComponent('NameOfAlternateCodingSystem');
    }

    set NameOfAlternateCodingSystem(value) {
        this.setComponentValue('NameOfAlternateCodingSystem', value);
    }

    get CodingSystemVersionId() {
        return this.getComponent('CodingSystemVersionId');
    }

    set CodingSystemVersionId(value) {
        this.setComponentValue('CodingSystemVersionId', value);
    }

    get AlternateCodingSystemVersionId() {
        return this.getComponent('AlternateCodingSystemVersionId');
    }

    set AlternateCodingSystemVersionId(value) {
        this.setComponentValue('AlternateCodingSystemVersionId', value);
    }

    get OriginalText() {
        return this.getComponent('OriginalText');
    }

    set OriginalText(value) {
        this.setComponentValue('OriginalText', value);
    }

    get SecondAlternateIdentifier() {
        return this.getComponent('SecondAlternateIdentifier');
    }

    set SecondAlternateIdentifier(value) {
        this.setComponentValue('SecondAlternateIdentifier', value);
    }

    get SecondAlternateText() {
        return this.getComponent('SecondAlternateText');
    }

    set SecondAlternateText(value) {
        this.setComponentValue('SecondAlternateText', value);
    }

    get NameOfSecondAlternateCodingSystem() {
        return this.getComponent('NameOfSecondAlternateCodingSystem');
    }

    set NameOfSecondAlternateCodingSystem(value) {
        this.setComponentValue('NameOfSecondAlternateCodingSystem', value);
    }

    get SecondAlternateCodingSystemVersionId() {
        return this.getComponent('SecondAlternateCodingSystemVersionId');
    }

    set SecondAlternateCodingSystemVersionId(value) {
        this.setComponentValue('SecondAlternateCodingSystemVersionId', value);
    }

    get CodingSystemOid() {
        return this.getComponent('CodingSystemOid');
    }

    set CodingSystemOid(value) {
        this.setComponentValue('CodingSystemOid', value);
    }

    get ValueSetOid() {
        return this.getComponent('ValueSetOid');
    }

    set ValueSetOid(value) {
        this.setComponentValue('ValueSetOid', value);
    }

    get ValueSetVersionId() {
        return this.getComponent('ValueSetVersionId');
    }

    set ValueSetVersionId(value) {
        this.setComponentValue('ValueSetVersionId', value);
    }

    get AlternateCodingSystemOid() {
        return this.getComponent('AlternateCodingSystemOid');
    }

    set AlternateCodingSystemOid(value) {
        this.setComponentValue('AlternateCodingSystemOid', value);
    }

    get AlternateValueSetOid() {
        return this.getComponent('AlternateValueSetOid');
    }

    set AlternateValueSetOid(value) {
        this.setComponentValue('AlternateValueSetOid', value);
    }

    get AlternateValueSetVersionId() {
        return this.getComponent('AlternateValueSetVersionId');
    }

    set AlternateValueSetVersionId(value) {
        this.setComponentValue('AlternateValueSetVersionId', value);
    }

    get SecondAlternateCodingSystemOid() {
        return this.getComponent('SecondAlternateCodingSystemOid');
    }

    set SecondAlternateCodingSystemOid(value) {
        this.setComponentValue('SecondAlternateCodingSystemOid', value);
    }

    get SecondAlternateValueSetOid() {
        return this.getComponent('SecondAlternateValueSetOid');
    }

    set SecondAlternateValueSetOid(value) {
        this.setComponentValue('SecondAlternateValueSetOid', value);
    }

    get SecondAlternateValueSetVersionId() {
        return this.getComponent('SecondAlternateValueSetVersionId');
    }

    set SecondAlternateValueSetVersionId(value) {
        this.setComponentValue('SecondAlternateValueSetVersionId', value);
    }
}
