import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { DTM } from './DTM';
import { ID } from './ID';

export class TS extends ComplexDataType {
    static components = {
        TimeOfAnEvent: {
            defaultDataType: DTM,
            dataTypes: [
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4'] },
                { dataType: DTM, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        Time: { aliasOf: 'TimeOfAnEvent' },
        DegreeOfPrecision: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ST, versions: ['2.4'] },
                { dataType: ID, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'TimeOfAnEvent', 'DegreeOfPrecision'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get TimeOfAnEvent() {
        return this.getComponent('TimeOfAnEvent');
    }

    set TimeOfAnEvent(value) {
        this.setComponentValue('TimeOfAnEvent', value);
    }

    get Time() {
        return this.getComponent('TimeOfAnEvent');
    }

    set Time(value) {
        this.setComponentValue('TimeOfAnEvent', value);
    }

    get DegreeOfPrecision() {
        return this.getComponent('DegreeOfPrecision');
    }

    set DegreeOfPrecision(value) {
        this.setComponentValue('DegreeOfPrecision', value);
    }
}
