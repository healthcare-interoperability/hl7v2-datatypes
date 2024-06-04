import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';

export class CM_CCP extends ComplexDataType {
    static components = {
        SensitivityCorrectionFactor: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 1,
        },
        Baseline: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 2,
        },
        TimeSkew: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'SensitivityCorrectionFactor', 'Baseline', 'TimeSkew'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SensitivityCorrectionFactor() {
        return this.getComponent('SensitivityCorrectionFactor');
    }

    set SensitivityCorrectionFactor(value) {
        this.setComponentValue('SensitivityCorrectionFactor', value);
    }

    get Baseline() {
        return this.getComponent('Baseline');
    }

    set Baseline(value) {
        this.setComponentValue('Baseline', value);
    }

    get TimeSkew() {
        return this.getComponent('TimeSkew');
    }

    set TimeSkew(value) {
        this.setComponentValue('TimeSkew', value);
    }
}
