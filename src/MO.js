import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';
import { ID } from './ID';

export class MO extends ComplexDataType {
    static components = {
        Quantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Denomination: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'Quantity', 'Denomination'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Quantity() {
        return this.getComponent('Quantity');
    }

    set Quantity(value) {
        this.setComponentValue('Quantity', value);
    }

    get Denomination() {
        return this.getComponent('Denomination');
    }

    set Denomination(value) {
        this.setComponentValue('Denomination', value);
    }
}
