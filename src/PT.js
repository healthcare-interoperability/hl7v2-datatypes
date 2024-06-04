import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { ST } from './ST';

export class PT extends ComplexDataType {
    static components = {
        ProcessingId: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3'] },
            ],
            position: 1,
        },
        ProcessingMode: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'ProcessingId', 'ProcessingMode'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ProcessingId() {
        return this.getComponent('ProcessingId');
    }

    set ProcessingId(value) {
        this.setComponentValue('ProcessingId', value);
    }

    get ProcessingMode() {
        return this.getComponent('ProcessingMode');
    }

    set ProcessingMode(value) {
        this.setComponentValue('ProcessingMode', value);
    }
}
