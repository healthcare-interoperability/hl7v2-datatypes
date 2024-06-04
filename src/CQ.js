import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';
import { CWE } from './CWE';
import { ST } from './ST';
import { CE } from './CE';

export class CQ extends ComplexDataType {
    static components = {
        Quantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Units: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4'] },
                { dataType: CE, versions: ['2.5', '2.5.1'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'Quantity', 'Units'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Quantity() {
        return this.getComponent('Quantity');
    }

    set Quantity(value) {
        this.setComponentValue('Quantity', value);
    }

    get Units() {
        return this.getComponent('Units');
    }

    set Units(value) {
        this.setComponentValue('Units', value);
    }
}
