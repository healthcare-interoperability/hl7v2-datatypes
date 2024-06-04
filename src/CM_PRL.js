import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CE } from './CE';
import { ST } from './ST';
import { TX } from './TX';

export class CM_PRL extends ComplexDataType {
    static components = {
        OBX3ObservationIdentifierOfParentResult: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 1,
        },
        OBX4SubIDOfParentResult: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 2,
        },
        PartOfOBX5ObservationResultFromParent: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'OBX3ObservationIdentifierOfParentResult', 'OBX4SubIDOfParentResult', 'PartOfOBX5ObservationResultFromParent'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get OBX3ObservationIdentifierOfParentResult() {
        return this.getComponent('OBX3ObservationIdentifierOfParentResult');
    }

    set OBX3ObservationIdentifierOfParentResult(value) {
        this.setComponentValue('OBX3ObservationIdentifierOfParentResult', value);
    }

    get OBX4SubIDOfParentResult() {
        return this.getComponent('OBX4SubIDOfParentResult');
    }

    set OBX4SubIDOfParentResult(value) {
        this.setComponentValue('OBX4SubIDOfParentResult', value);
    }

    get PartOfOBX5ObservationResultFromParent() {
        return this.getComponent('PartOfOBX5ObservationResultFromParent');
    }

    set PartOfOBX5ObservationResultFromParent(value) {
        this.setComponentValue('PartOfOBX5ObservationResultFromParent', value);
    }
}
