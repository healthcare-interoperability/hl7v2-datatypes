import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CNE } from './CNE';
import { ID } from './ID';
import { IS } from './IS';
import { DT } from './DT';

export class OCD extends ComplexDataType {
    static components = {
        OccurrenceCode: {
            defaultDataType: CNE,
            dataTypes: [
                { dataType: CNE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ID, versions: ['2.3.1'] },
                { dataType: IS, versions: ['2.4'] },
            ],
            position: 1,
        },
        OccurrenceDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
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
