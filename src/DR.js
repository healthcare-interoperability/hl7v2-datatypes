import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { DTM } from './DTM';
import { TS } from './TS';

export class DR extends ComplexDataType {
    static components = {
        RangeStartDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
        },
        RangeEndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'RangeStartDateTime', 'RangeEndDateTime'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get RangeStartDateTime() {
        return this.getComponent('RangeStartDateTime');
    }

    set RangeStartDateTime(value) {
        this.setComponentValue('RangeStartDateTime', value);
    }

    get RangeEndDateTime() {
        return this.getComponent('RangeEndDateTime');
    }

    set RangeEndDateTime(value) {
        this.setComponentValue('RangeEndDateTime', value);
    }
}
