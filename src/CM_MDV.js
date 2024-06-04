import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';

export class CM_MDV extends ComplexDataType {
    static components = {
        MinimumValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 1,
        },
        MaximumValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'MinimumValue', 'MaximumValue'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get MinimumValue() {
        return this.getComponent('MinimumValue');
    }

    set MinimumValue(value) {
        this.setComponentValue('MinimumValue', value);
    }

    get MaximumValue() {
        return this.getComponent('MaximumValue');
    }

    set MaximumValue(value) {
        this.setComponentValue('MaximumValue', value);
    }
}
