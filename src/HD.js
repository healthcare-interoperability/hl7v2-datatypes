import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { ST } from './ST';
import { ID } from './ID';

export class HD extends ComplexDataType {
    static components = {
        NamespaceId: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        UniversalId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        UniversalIdType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'NamespaceId', 'UniversalId', 'UniversalIdType'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get NamespaceId() {
        return this.getComponent('NamespaceId');
    }

    set NamespaceId(value) {
        this.setComponentValue('NamespaceId', value);
    }

    get UniversalId() {
        return this.getComponent('UniversalId');
    }

    set UniversalId(value) {
        this.setComponentValue('UniversalId', value);
    }

    get UniversalIdType() {
        return this.getComponent('UniversalIdType');
    }

    set UniversalIdType(value) {
        this.setComponentValue('UniversalIdType', value);
    }
}
