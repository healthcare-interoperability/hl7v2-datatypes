import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { NM } from './NM';

export class CM_DTN extends ComplexDataType {
    static components = {
        DayType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 1,
        },
        NumberOfDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
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
