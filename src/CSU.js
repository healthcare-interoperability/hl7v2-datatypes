import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';
import { ST } from './ST';
import { ID } from './ID';
import { IS } from './IS';
import { DTM } from './DTM';

export class CSU extends ComplexDataType {
    static components = {
        ChannelSensitivity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        UnitOfMeasureIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        UnitOfMeasureDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        UnitOfMeasureCodingSystem: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4'] },
            ],
            position: 4,
        },
        AlternateUnitOfMeasureIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        AlternateUnitOfMeasureDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        AlternateUnitOfMeasureCodingSystem: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4'] },
            ],
            position: 7,
        },
        UnitOfMeasureCodingSystemVersionId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 8,
        },
        AlternateUnitOfMeasureCodingSystemVersionId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 9,
        },
        OriginalText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 10,
        },
        SecondAlternateUnitOfMeasureIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 11,
        },
        SecondAlternateUnitOfMeasureText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 12,
        },
        NameOfSecondAlternateUnitOfMeasureCodingSy: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 13,
        },
        SecondAlternateUnitOfMeasureCodingSystemVer: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 14,
        },
        UnitOfMeasureCodingSystemOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 15,
        },
        UnitOfMeasureValueSetOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 16,
        },
        UnitOfMeasureValueSetVersionId: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 17,
        },
        AlternateUnitOfMeasureCodingSystemOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 21,
        },
        AlternateUnitOfMeasureValueSetOid: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 22,
        },
        AlternateUnitOfMeasureValueSetVersionId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 23,
        },
    };

    static componentsByIndex = [
        '',
        'ChannelSensitivity',
        'UnitOfMeasureIdentifier',
        'UnitOfMeasureDescription',
        'UnitOfMeasureCodingSystem',
        'AlternateUnitOfMeasureIdentifier',
        'AlternateUnitOfMeasureDescription',
        'AlternateUnitOfMeasureCodingSystem',
        'UnitOfMeasureCodingSystemVersionId',
        'AlternateUnitOfMeasureCodingSystemVersionId',
        'OriginalText',
        'SecondAlternateUnitOfMeasureIdentifier',
        'SecondAlternateUnitOfMeasureText',
        'NameOfSecondAlternateUnitOfMeasureCodingSy',
        'SecondAlternateUnitOfMeasureCodingSystemVer',
        'UnitOfMeasureCodingSystemOid',
        'UnitOfMeasureValueSetOid',
        'UnitOfMeasureValueSetVersionId',
        'AlternateUnitOfMeasureCodingSystemOid',
        'AlternateUnitOfMeasureValueSetOid',
        'AlternateUnitOfMeasureValueSetVersionId',
        'AlternateUnitOfMeasureCodingSystemOid',
        'AlternateUnitOfMeasureValueSetOid',
        'AlternateUnitOfMeasureValueSetVersionId',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ChannelSensitivity() {
        return this.getComponent('ChannelSensitivity');
    }

    set ChannelSensitivity(value) {
        this.setComponentValue('ChannelSensitivity', value);
    }

    get UnitOfMeasureIdentifier() {
        return this.getComponent('UnitOfMeasureIdentifier');
    }

    set UnitOfMeasureIdentifier(value) {
        this.setComponentValue('UnitOfMeasureIdentifier', value);
    }

    get UnitOfMeasureDescription() {
        return this.getComponent('UnitOfMeasureDescription');
    }

    set UnitOfMeasureDescription(value) {
        this.setComponentValue('UnitOfMeasureDescription', value);
    }

    get UnitOfMeasureCodingSystem() {
        return this.getComponent('UnitOfMeasureCodingSystem');
    }

    set UnitOfMeasureCodingSystem(value) {
        this.setComponentValue('UnitOfMeasureCodingSystem', value);
    }

    get AlternateUnitOfMeasureIdentifier() {
        return this.getComponent('AlternateUnitOfMeasureIdentifier');
    }

    set AlternateUnitOfMeasureIdentifier(value) {
        this.setComponentValue('AlternateUnitOfMeasureIdentifier', value);
    }

    get AlternateUnitOfMeasureDescription() {
        return this.getComponent('AlternateUnitOfMeasureDescription');
    }

    set AlternateUnitOfMeasureDescription(value) {
        this.setComponentValue('AlternateUnitOfMeasureDescription', value);
    }

    get AlternateUnitOfMeasureCodingSystem() {
        return this.getComponent('AlternateUnitOfMeasureCodingSystem');
    }

    set AlternateUnitOfMeasureCodingSystem(value) {
        this.setComponentValue('AlternateUnitOfMeasureCodingSystem', value);
    }

    get UnitOfMeasureCodingSystemVersionId() {
        return this.getComponent('UnitOfMeasureCodingSystemVersionId');
    }

    set UnitOfMeasureCodingSystemVersionId(value) {
        this.setComponentValue('UnitOfMeasureCodingSystemVersionId', value);
    }

    get AlternateUnitOfMeasureCodingSystemVersionId() {
        return this.getComponent('AlternateUnitOfMeasureCodingSystemVersionId');
    }

    set AlternateUnitOfMeasureCodingSystemVersionId(value) {
        this.setComponentValue('AlternateUnitOfMeasureCodingSystemVersionId', value);
    }

    get OriginalText() {
        return this.getComponent('OriginalText');
    }

    set OriginalText(value) {
        this.setComponentValue('OriginalText', value);
    }

    get SecondAlternateUnitOfMeasureIdentifier() {
        return this.getComponent('SecondAlternateUnitOfMeasureIdentifier');
    }

    set SecondAlternateUnitOfMeasureIdentifier(value) {
        this.setComponentValue('SecondAlternateUnitOfMeasureIdentifier', value);
    }

    get SecondAlternateUnitOfMeasureText() {
        return this.getComponent('SecondAlternateUnitOfMeasureText');
    }

    set SecondAlternateUnitOfMeasureText(value) {
        this.setComponentValue('SecondAlternateUnitOfMeasureText', value);
    }

    get NameOfSecondAlternateUnitOfMeasureCodingSy() {
        return this.getComponent('NameOfSecondAlternateUnitOfMeasureCodingSy');
    }

    set NameOfSecondAlternateUnitOfMeasureCodingSy(value) {
        this.setComponentValue('NameOfSecondAlternateUnitOfMeasureCodingSy', value);
    }

    get SecondAlternateUnitOfMeasureCodingSystemVer() {
        return this.getComponent('SecondAlternateUnitOfMeasureCodingSystemVer');
    }

    set SecondAlternateUnitOfMeasureCodingSystemVer(value) {
        this.setComponentValue('SecondAlternateUnitOfMeasureCodingSystemVer', value);
    }

    get UnitOfMeasureCodingSystemOid() {
        return this.getComponent('UnitOfMeasureCodingSystemOid');
    }

    set UnitOfMeasureCodingSystemOid(value) {
        this.setComponentValue('UnitOfMeasureCodingSystemOid', value);
    }

    get UnitOfMeasureValueSetOid() {
        return this.getComponent('UnitOfMeasureValueSetOid');
    }

    set UnitOfMeasureValueSetOid(value) {
        this.setComponentValue('UnitOfMeasureValueSetOid', value);
    }

    get UnitOfMeasureValueSetVersionId() {
        return this.getComponent('UnitOfMeasureValueSetVersionId');
    }

    set UnitOfMeasureValueSetVersionId(value) {
        this.setComponentValue('UnitOfMeasureValueSetVersionId', value);
    }

    get AlternateUnitOfMeasureCodingSystemOid() {
        return this.getComponent('AlternateUnitOfMeasureCodingSystemOid');
    }

    set AlternateUnitOfMeasureCodingSystemOid(value) {
        this.setComponentValue('AlternateUnitOfMeasureCodingSystemOid', value);
    }

    get AlternateUnitOfMeasureValueSetOid() {
        return this.getComponent('AlternateUnitOfMeasureValueSetOid');
    }

    set AlternateUnitOfMeasureValueSetOid(value) {
        this.setComponentValue('AlternateUnitOfMeasureValueSetOid', value);
    }

    get AlternateUnitOfMeasureValueSetVersionId() {
        return this.getComponent('AlternateUnitOfMeasureValueSetVersionId');
    }

    set AlternateUnitOfMeasureValueSetVersionId(value) {
        this.setComponentValue('AlternateUnitOfMeasureValueSetVersionId', value);
    }

    get AlternateUnitOfMeasureCodingSystemOid() {
        return this.getComponent('AlternateUnitOfMeasureCodingSystemOid');
    }

    set AlternateUnitOfMeasureCodingSystemOid(value) {
        this.setComponentValue('AlternateUnitOfMeasureCodingSystemOid', value);
    }

    get AlternateUnitOfMeasureValueSetOid() {
        return this.getComponent('AlternateUnitOfMeasureValueSetOid');
    }

    set AlternateUnitOfMeasureValueSetOid(value) {
        this.setComponentValue('AlternateUnitOfMeasureValueSetOid', value);
    }

    get AlternateUnitOfMeasureValueSetVersionId() {
        return this.getComponent('AlternateUnitOfMeasureValueSetVersionId');
    }

    set AlternateUnitOfMeasureValueSetVersionId(value) {
        this.setComponentValue('AlternateUnitOfMeasureValueSetVersionId', value);
    }
}
