import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { ST } from './ST';

export class RI extends ComplexDataType {
    static components = {
        RepeatPattern: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        ExplicitTimeInterval: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'RepeatPattern', 'ExplicitTimeInterval'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get RepeatPattern() {
        return this.getComponent('RepeatPattern');
    }

    set RepeatPattern(value) {
        this.setComponentValue('RepeatPattern', value);
    }

    get ExplicitTimeInterval() {
        return this.getComponent('ExplicitTimeInterval');
    }

    set ExplicitTimeInterval(value) {
        this.setComponentValue('ExplicitTimeInterval', value);
    }
}
