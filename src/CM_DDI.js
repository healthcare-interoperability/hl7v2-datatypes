import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';

export class CM_DDI extends ComplexDataType {
    static components = {
        DelayDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 1,
        },
        Amount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 2,
        },
        NumberOfDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'DelayDays', 'Amount', 'NumberOfDays'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get DelayDays() {
        return this.getComponent('DelayDays');
    }

    set DelayDays(value) {
        this.setComponentValue('DelayDays', value);
    }

    get Amount() {
        return this.getComponent('Amount');
    }

    set Amount(value) {
        this.setComponentValue('Amount', value);
    }

    get NumberOfDays() {
        return this.getComponent('NumberOfDays');
    }

    set NumberOfDays(value) {
        this.setComponentValue('NumberOfDays', value);
    }
}
