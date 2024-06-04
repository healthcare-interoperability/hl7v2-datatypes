import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';

export class CM_MSG extends ComplexDataType {
    static components = {
        MessageType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3'] }],
            position: 1,
        },
        TriggerEvent: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'MessageType', 'TriggerEvent'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get MessageType() {
        return this.getComponent('MessageType');
    }

    set MessageType(value) {
        this.setComponentValue('MessageType', value);
    }

    get TriggerEvent() {
        return this.getComponent('TriggerEvent');
    }

    set TriggerEvent(value) {
        this.setComponentValue('TriggerEvent', value);
    }
}
