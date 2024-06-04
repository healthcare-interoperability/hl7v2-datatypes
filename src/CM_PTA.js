import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { NM } from './NM';

export class CM_PTA extends ComplexDataType {
    static components = {
        PolicyType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 1,
        },
        AmountClass: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 2,
        },
        Amount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'PolicyType', 'AmountClass', 'Amount'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get PolicyType() {
        return this.getComponent('PolicyType');
    }

    set PolicyType(value) {
        this.setComponentValue('PolicyType', value);
    }

    get AmountClass() {
        return this.getComponent('AmountClass');
    }

    set AmountClass(value) {
        this.setComponentValue('AmountClass', value);
    }

    get Amount() {
        return this.getComponent('Amount');
    }

    set Amount(value) {
        this.setComponentValue('Amount', value);
    }
}
