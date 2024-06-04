import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { NM } from './NM';

export class DTN extends ComplexDataType {
    static components = {
        DayType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        NumberOfDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'DayType', 'NumberOfDays'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get DayType() {
        return this.getComponent('DayType');
    }

    set DayType(value) {
        this.setComponentValue('DayType', value);
    }

    get NumberOfDays() {
        return this.getComponent('NumberOfDays');
    }

    set NumberOfDays(value) {
        this.setComponentValue('NumberOfDays', value);
    }
}
