import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';

export class VR extends ComplexDataType {
    static components = {
        FirstDataCodeValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        LastDataCodeValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'FirstDataCodeValue', 'LastDataCodeValue'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get FirstDataCodeValue() {
        return this.getComponent('FirstDataCodeValue');
    }

    set FirstDataCodeValue(value) {
        this.setComponentValue('FirstDataCodeValue', value);
    }

    get LastDataCodeValue() {
        return this.getComponent('LastDataCodeValue');
    }

    set LastDataCodeValue(value) {
        this.setComponentValue('LastDataCodeValue', value);
    }
}
