import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { HD } from './HD';
import { ID } from './ID';

export class RP extends ComplexDataType {
    static components = {
        Pointer: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        ApplicationId: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        ApplicationID: { aliasOf: 'ApplicationId' },
        TypeOfData: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        Subtype: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'Pointer', 'ApplicationId', 'TypeOfData', 'Subtype'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Pointer() {
        return this.getComponent('Pointer');
    }

    set Pointer(value) {
        this.setComponentValue('Pointer', value);
    }

    get ApplicationId() {
        return this.getComponent('ApplicationId');
    }

    set ApplicationId(value) {
        this.setComponentValue('ApplicationId', value);
    }

    get ApplicationID() {
        return this.getComponent('ApplicationId');
    }

    set ApplicationID(value) {
        this.setComponentValue('ApplicationId', value);
    }

    get TypeOfData() {
        return this.getComponent('TypeOfData');
    }

    set TypeOfData(value) {
        this.setComponentValue('TypeOfData', value);
    }

    get Subtype() {
        return this.getComponent('Subtype');
    }

    set Subtype(value) {
        this.setComponentValue('Subtype', value);
    }
}
