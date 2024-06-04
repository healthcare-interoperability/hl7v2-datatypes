import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CE } from './CE';
import { DT } from './DT';

export class CM_OCD extends ComplexDataType {
    static components = {
        OccurrenceCode: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 1,
        },
        OccurrenceDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'OccurrenceCode', 'OccurrenceDate'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get OccurrenceCode() {
        return this.getComponent('OccurrenceCode');
    }

    set OccurrenceCode(value) {
        this.setComponentValue('OccurrenceCode', value);
    }

    get OccurrenceDate() {
        return this.getComponent('OccurrenceDate');
    }

    set OccurrenceDate(value) {
        this.setComponentValue('OccurrenceDate', value);
    }
}
