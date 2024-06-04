import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { TS } from './TS';

export class CM_CCD extends ComplexDataType {
    static components = {
        WhenToChargeCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3'] }],
            position: 1,
        },
        DateTime: {
            defaultDataType: TS,
            dataTypes: [{ dataType: TS, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'WhenToChargeCode', 'DateTime'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get WhenToChargeCode() {
        return this.getComponent('WhenToChargeCode');
    }

    set WhenToChargeCode(value) {
        this.setComponentValue('WhenToChargeCode', value);
    }

    get DateTime() {
        return this.getComponent('DateTime');
    }

    set DateTime(value) {
        this.setComponentValue('DateTime', value);
    }
}
