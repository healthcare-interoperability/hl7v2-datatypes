import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { IS } from './IS';
import { ID } from './ID';

export class EI extends ComplexDataType {
    static components = {
        EntityIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        NamespaceId: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        NamespaceID: { aliasOf: 'NamespaceId' },
        UniversalId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        UniversalID: { aliasOf: 'UniversalId' },
        UniversalIdType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        UniversalIDType: { aliasOf: 'UniversalIdType' },
    };

    static componentsByIndex = ['', 'EntityIdentifier', 'NamespaceId', 'UniversalId', 'UniversalIdType'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get EntityIdentifier() {
        return this.getComponent('EntityIdentifier');
    }

    set EntityIdentifier(value) {
        this.setComponentValue('EntityIdentifier', value);
    }

    get NamespaceId() {
        return this.getComponent('NamespaceId');
    }

    set NamespaceId(value) {
        this.setComponentValue('NamespaceId', value);
    }

    get NamespaceID() {
        return this.getComponent('NamespaceId');
    }

    set NamespaceID(value) {
        this.setComponentValue('NamespaceId', value);
    }

    get UniversalId() {
        return this.getComponent('UniversalId');
    }

    set UniversalId(value) {
        this.setComponentValue('UniversalId', value);
    }

    get UniversalID() {
        return this.getComponent('UniversalId');
    }

    set UniversalID(value) {
        this.setComponentValue('UniversalId', value);
    }

    get UniversalIdType() {
        return this.getComponent('UniversalIdType');
    }

    set UniversalIdType(value) {
        this.setComponentValue('UniversalIdType', value);
    }

    get UniversalIDType() {
        return this.getComponent('UniversalIdType');
    }

    set UniversalIDType(value) {
        this.setComponentValue('UniversalIdType', value);
    }
}
