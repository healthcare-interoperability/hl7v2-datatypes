import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { TS } from './TS';

export class CM_DLD extends ComplexDataType {
    static components = {
        DischargeLocation: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3'] }],
            position: 1,
        },
        EffectiveDate: {
            defaultDataType: TS,
            dataTypes: [{ dataType: TS, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'DischargeLocation', 'EffectiveDate'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get DischargeLocation() {
        return this.getComponent('DischargeLocation');
    }

    set DischargeLocation(value) {
        this.setComponentValue('DischargeLocation', value);
    }

    get EffectiveDate() {
        return this.getComponent('EffectiveDate');
    }

    set EffectiveDate(value) {
        this.setComponentValue('EffectiveDate', value);
    }
}
