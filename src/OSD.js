import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { ST } from './ST';
import { IS } from './IS';
import { NM } from './NM';

export class OSD extends ComplexDataType {
    static components = {
        SequenceResultsFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 1,
        },
        PlacerOrderNumberEntityIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 2,
        },
        PlacerOrderNumberNamespaceId: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 3,
        },
        FillerOrderNumberEntityIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 4,
        },
        FillerOrderNumberNamespaceId: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 5,
        },
        SequenceConditionValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 6,
        },
        MaximumNumberOfRepeats: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 7,
        },
        PlacerOrderNumberUniversalId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 8,
        },
        PlacerOrderNumberUniversalIdType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 9,
        },
        FillerOrderNumberUniversalId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 10,
        },
        FillerOrderNumberUniversalIdType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 11,
        },
    };

    static componentsByIndex = [
        '',
        'SequenceResultsFlag',
        'PlacerOrderNumberEntityIdentifier',
        'PlacerOrderNumberNamespaceId',
        'FillerOrderNumberEntityIdentifier',
        'FillerOrderNumberNamespaceId',
        'SequenceConditionValue',
        'MaximumNumberOfRepeats',
        'PlacerOrderNumberUniversalId',
        'PlacerOrderNumberUniversalIdType',
        'FillerOrderNumberUniversalId',
        'FillerOrderNumberUniversalIdType',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SequenceResultsFlag() {
        return this.getComponent('SequenceResultsFlag');
    }

    set SequenceResultsFlag(value) {
        this.setComponentValue('SequenceResultsFlag', value);
    }

    get PlacerOrderNumberEntityIdentifier() {
        return this.getComponent('PlacerOrderNumberEntityIdentifier');
    }

    set PlacerOrderNumberEntityIdentifier(value) {
        this.setComponentValue('PlacerOrderNumberEntityIdentifier', value);
    }

    get PlacerOrderNumberNamespaceId() {
        return this.getComponent('PlacerOrderNumberNamespaceId');
    }

    set PlacerOrderNumberNamespaceId(value) {
        this.setComponentValue('PlacerOrderNumberNamespaceId', value);
    }

    get FillerOrderNumberEntityIdentifier() {
        return this.getComponent('FillerOrderNumberEntityIdentifier');
    }

    set FillerOrderNumberEntityIdentifier(value) {
        this.setComponentValue('FillerOrderNumberEntityIdentifier', value);
    }

    get FillerOrderNumberNamespaceId() {
        return this.getComponent('FillerOrderNumberNamespaceId');
    }

    set FillerOrderNumberNamespaceId(value) {
        this.setComponentValue('FillerOrderNumberNamespaceId', value);
    }

    get SequenceConditionValue() {
        return this.getComponent('SequenceConditionValue');
    }

    set SequenceConditionValue(value) {
        this.setComponentValue('SequenceConditionValue', value);
    }

    get MaximumNumberOfRepeats() {
        return this.getComponent('MaximumNumberOfRepeats');
    }

    set MaximumNumberOfRepeats(value) {
        this.setComponentValue('MaximumNumberOfRepeats', value);
    }

    get PlacerOrderNumberUniversalId() {
        return this.getComponent('PlacerOrderNumberUniversalId');
    }

    set PlacerOrderNumberUniversalId(value) {
        this.setComponentValue('PlacerOrderNumberUniversalId', value);
    }

    get PlacerOrderNumberUniversalIdType() {
        return this.getComponent('PlacerOrderNumberUniversalIdType');
    }

    set PlacerOrderNumberUniversalIdType(value) {
        this.setComponentValue('PlacerOrderNumberUniversalIdType', value);
    }

    get FillerOrderNumberUniversalId() {
        return this.getComponent('FillerOrderNumberUniversalId');
    }

    set FillerOrderNumberUniversalId(value) {
        this.setComponentValue('FillerOrderNumberUniversalId', value);
    }

    get FillerOrderNumberUniversalIdType() {
        return this.getComponent('FillerOrderNumberUniversalIdType');
    }

    set FillerOrderNumberUniversalIdType(value) {
        this.setComponentValue('FillerOrderNumberUniversalIdType', value);
    }
}
