import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';

export class NR extends ComplexDataType {
    static components = {
        LowValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        HighValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
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
