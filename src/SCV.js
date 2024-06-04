import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { ST } from './ST';

export class SCV extends ComplexDataType {
    static components = {
        ParameterClass: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 1,
        },
        ParameterValue: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'ParameterClass', 'ParameterValue'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ParameterClass() {
        return this.getComponent('ParameterClass');
    }

    set ParameterClass(value) {
        this.setComponentValue('ParameterClass', value);
    }

    get ParameterValue() {
        return this.getComponent('ParameterValue');
    }

    set ParameterValue(value) {
        this.setComponentValue('ParameterValue', value);
    }
}
