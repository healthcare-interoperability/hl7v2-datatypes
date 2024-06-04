import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CM_RANGE } from './CM_RANGE';
import { NM } from './NM';
import { ST } from './ST';

export class CM_DLT extends ComplexDataType {
    static components = {
        Range: {
            defaultDataType: CM_RANGE,
            dataTypes: [{ dataType: CM_RANGE, versions: ['2.3'] }],
            position: 1,
        },
        NumericThreshold: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 2,
        },
        Change: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 3,
        },
        LengthOfTimeDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'Range', 'NumericThreshold', 'Change', 'LengthOfTimeDays'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Range() {
        return this.getComponent('Range');
    }

    set Range(value) {
        this.setComponentValue('Range', value);
    }

    get NumericThreshold() {
        return this.getComponent('NumericThreshold');
    }

    set NumericThreshold(value) {
        this.setComponentValue('NumericThreshold', value);
    }

    get Change() {
        return this.getComponent('Change');
    }

    set Change(value) {
        this.setComponentValue('Change', value);
    }

    get LengthOfTimeDays() {
        return this.getComponent('LengthOfTimeDays');
    }

    set LengthOfTimeDays(value) {
        this.setComponentValue('LengthOfTimeDays', value);
    }
}
