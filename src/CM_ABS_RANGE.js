import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CM_RANGE } from './CM_RANGE';
import { NM } from './NM';

export class CM_ABS_RANGE extends ComplexDataType {
    static components = {
        Range: {
            defaultDataType: CM_RANGE,
            dataTypes: [{ dataType: CM_RANGE, versions: ['2.3', '2.3.1'] }],
            position: 1,
        },
        NumericChange: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3', '2.3.1'] }],
            position: 2,
        },
        PercentPerChange: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3', '2.3.1'] }],
            position: 3,
        },
        Days: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3', '2.3.1'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'Range', 'NumericChange', 'PercentPerChange', 'Days'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Range() {
        return this.getComponent('Range');
    }

    set Range(value) {
        this.setComponentValue('Range', value);
    }

    get NumericChange() {
        return this.getComponent('NumericChange');
    }

    set NumericChange(value) {
        this.setComponentValue('NumericChange', value);
    }

    get PercentPerChange() {
        return this.getComponent('PercentPerChange');
    }

    set PercentPerChange(value) {
        this.setComponentValue('PercentPerChange', value);
    }

    get Days() {
        return this.getComponent('Days');
    }

    set Days(value) {
        this.setComponentValue('Days', value);
    }
}
