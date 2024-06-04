import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { MO } from './MO';
import { CWE } from './CWE';
import { CE } from './CE';

export class MOC extends ComplexDataType {
    static components = {
        MonetaryAmount: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        DollarAmount: { aliasOf: 'MonetaryAmount' },
        ChargeCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'MonetaryAmount', 'ChargeCode'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get MonetaryAmount() {
        return this.getComponent('MonetaryAmount');
    }

    set MonetaryAmount(value) {
        this.setComponentValue('MonetaryAmount', value);
    }

    get DollarAmount() {
        return this.getComponent('MonetaryAmount');
    }

    set DollarAmount(value) {
        this.setComponentValue('MonetaryAmount', value);
    }

    get ChargeCode() {
        return this.getComponent('ChargeCode');
    }

    set ChargeCode(value) {
        this.setComponentValue('ChargeCode', value);
    }
}
