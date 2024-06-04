import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { ST } from './ST';
import { IS } from './IS';
import { NM } from './NM';

export class CM_OSD extends ComplexDataType {
    static components = {
        SequenceResultsFlag: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3', '2.3.1'] }],
            position: 1,
        },
        PlacerOrderNumberEntityIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1'] }],
            position: 2,
        },
        PlacerOrderNumberNamespaceID: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1'] }],
            position: 3,
        },
        FillerOrderNumberEntityIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1'] }],
            position: 4,
        },
        FillerOrderNumberNamespaceID: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1'] }],
            position: 5,
        },
        SequenceConditionValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1'] }],
            position: 6,
        },
        MaximumNumberOfRepeats: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3', '2.3.1'] }],
            position: 7,
        },
        PlacerOrderNumberUniversalID: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1'] }],
            position: 8,
        },
        PlacerOrderNumberUniversalIDType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3', '2.3.1'] }],
            position: 9,
        },
        FillerOrderNumberUniversalID: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1'] }],
            position: 10,
        },
        FillerOrderNumberUniversalIDType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3', '2.3.1'] }],
            position: 11,
        },
    };

    static componentsByIndex = [
        '',
        'SequenceResultsFlag',
        'PlacerOrderNumberEntityIdentifier',
        'PlacerOrderNumberNamespaceID',
        'FillerOrderNumberEntityIdentifier',
        'FillerOrderNumberNamespaceID',
        'SequenceConditionValue',
        'MaximumNumberOfRepeats',
        'PlacerOrderNumberUniversalID',
        'PlacerOrderNumberUniversalIDType',
        'FillerOrderNumberUniversalID',
        'FillerOrderNumberUniversalIDType',
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

    get PlacerOrderNumberNamespaceID() {
        return this.getComponent('PlacerOrderNumberNamespaceID');
    }

    set PlacerOrderNumberNamespaceID(value) {
        this.setComponentValue('PlacerOrderNumberNamespaceID', value);
    }

    get FillerOrderNumberEntityIdentifier() {
        return this.getComponent('FillerOrderNumberEntityIdentifier');
    }

    set FillerOrderNumberEntityIdentifier(value) {
        this.setComponentValue('FillerOrderNumberEntityIdentifier', value);
    }

    get FillerOrderNumberNamespaceID() {
        return this.getComponent('FillerOrderNumberNamespaceID');
    }

    set FillerOrderNumberNamespaceID(value) {
        this.setComponentValue('FillerOrderNumberNamespaceID', value);
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

    get PlacerOrderNumberUniversalID() {
        return this.getComponent('PlacerOrderNumberUniversalID');
    }

    set PlacerOrderNumberUniversalID(value) {
        this.setComponentValue('PlacerOrderNumberUniversalID', value);
    }

    get PlacerOrderNumberUniversalIDType() {
        return this.getComponent('PlacerOrderNumberUniversalIDType');
    }

    set PlacerOrderNumberUniversalIDType(value) {
        this.setComponentValue('PlacerOrderNumberUniversalIDType', value);
    }

    get FillerOrderNumberUniversalID() {
        return this.getComponent('FillerOrderNumberUniversalID');
    }

    set FillerOrderNumberUniversalID(value) {
        this.setComponentValue('FillerOrderNumberUniversalID', value);
    }

    get FillerOrderNumberUniversalIDType() {
        return this.getComponent('FillerOrderNumberUniversalIDType');
    }

    set FillerOrderNumberUniversalIDType(value) {
        this.setComponentValue('FillerOrderNumberUniversalIDType', value);
    }
}
