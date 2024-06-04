import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';

export class MSG extends ComplexDataType {
    static components = {
        MessageCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        MessageType: { aliasOf: 'MessageCode' },
        TriggerEvent: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        MessageStructure: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'MessageCode', 'TriggerEvent', 'MessageStructure'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get MessageCode() {
        return this.getComponent('MessageCode');
    }

    set MessageCode(value) {
        this.setComponentValue('MessageCode', value);
    }

    get MessageType() {
        return this.getComponent('MessageCode');
    }

    set MessageType(value) {
        this.setComponentValue('MessageCode', value);
    }

    get TriggerEvent() {
        return this.getComponent('TriggerEvent');
    }

    set TriggerEvent(value) {
        this.setComponentValue('TriggerEvent', value);
    }

    get MessageStructure() {
        return this.getComponent('MessageStructure');
    }

    set MessageStructure(value) {
        this.setComponentValue('MessageStructure', value);
    }
}
