import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';

export class CM_VR extends ComplexDataType {
    static components = {
        FirstDataCodeValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 1,
        },
        LastDataCodeCalue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'FirstDataCodeValue', 'LastDataCodeCalue'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get FirstDataCodeValue() {
        return this.getComponent('FirstDataCodeValue');
    }

    set FirstDataCodeValue(value) {
        this.setComponentValue('FirstDataCodeValue', value);
    }

    get LastDataCodeCalue() {
        return this.getComponent('LastDataCodeCalue');
    }

    set LastDataCodeCalue(value) {
        this.setComponentValue('LastDataCodeCalue', value);
    }
}
