import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';

export class CM_RANGE extends ComplexDataType {
    static components = {
        LowValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1'] }],
            position: 1,
        },
        HighValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'LowValue', 'HighValue'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get LowValue() {
        return this.getComponent('LowValue');
    }

    set LowValue(value) {
        this.setComponentValue('LowValue', value);
    }

    get HighValue() {
        return this.getComponent('HighValue');
    }

    set HighValue(value) {
        this.setComponentValue('HighValue', value);
    }
}
