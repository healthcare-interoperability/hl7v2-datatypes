import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CNE } from './CNE';
import { CE } from './CE';
import { DT } from './DT';

export class OSP extends ComplexDataType {
    static components = {
        OccurrenceSpanCode: {
            defaultDataType: CNE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3.1', '2.4'] },
            ],
            position: 1,
        },
        OccurrenceSpanStartDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        OccurrenceSpanStopDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'OccurrenceSpanCode', 'OccurrenceSpanStartDate', 'OccurrenceSpanStopDate'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get OccurrenceSpanCode() {
        return this.getComponent('OccurrenceSpanCode');
    }

    set OccurrenceSpanCode(value) {
        this.setComponentValue('OccurrenceSpanCode', value);
    }

    get OccurrenceSpanStartDate() {
        return this.getComponent('OccurrenceSpanStartDate');
    }

    set OccurrenceSpanStartDate(value) {
        this.setComponentValue('OccurrenceSpanStartDate', value);
    }

    get OccurrenceSpanStopDate() {
        return this.getComponent('OccurrenceSpanStopDate');
    }

    set OccurrenceSpanStopDate(value) {
        this.setComponentValue('OccurrenceSpanStopDate', value);
    }
}
