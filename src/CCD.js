import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { DTM } from './DTM';
import { TS } from './TS';

export class CCD extends ComplexDataType {
    static components = {
        InvocationEvent: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        WhenToChargeCode: { aliasOf: 'InvocationEvent' },
        DateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'InvocationEvent', 'DateTime'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get InvocationEvent() {
        return this.getComponent('InvocationEvent');
    }

    set InvocationEvent(value) {
        this.setComponentValue('InvocationEvent', value);
    }

    get WhenToChargeCode() {
        return this.getComponent('InvocationEvent');
    }

    set WhenToChargeCode(value) {
        this.setComponentValue('InvocationEvent', value);
    }

    get DateTime() {
        return this.getComponent('DateTime');
    }

    set DateTime(value) {
        this.setComponentValue('DateTime', value);
    }
}
