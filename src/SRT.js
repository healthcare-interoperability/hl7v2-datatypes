import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { ID } from './ID';

export class SRT extends ComplexDataType {
    static components = {
        SortByField: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Sequencing: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'SortByField', 'Sequencing'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SortByField() {
        return this.getComponent('SortByField');
    }

    set SortByField(value) {
        this.setComponentValue('SortByField', value);
    }

    get Sequencing() {
        return this.getComponent('Sequencing');
    }

    set Sequencing(value) {
        this.setComponentValue('Sequencing', value);
    }
}
