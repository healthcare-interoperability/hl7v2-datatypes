import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { MO } from './MO';
import { CE } from './CE';

export class CM_MOC extends ComplexDataType {
    static components = {
        DollarAmount: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.3'] }],
            position: 1,
        },
        ChargeCode: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'DollarAmount', 'ChargeCode'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get DollarAmount() {
        return this.getComponent('DollarAmount');
    }

    set DollarAmount(value) {
        this.setComponentValue('DollarAmount', value);
    }

    get ChargeCode() {
        return this.getComponent('ChargeCode');
    }

    set ChargeCode(value) {
        this.setComponentValue('ChargeCode', value);
    }
}
