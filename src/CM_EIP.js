import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { EI } from './EI';

export class CM_EIP extends ComplexDataType {
    static components = {
        ParentSPlacerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.3'] }],
            position: 1,
        },
        ParentSFillerOrderNumber: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'ParentSPlacerOrderNumber', 'ParentSFillerOrderNumber'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ParentSPlacerOrderNumber() {
        return this.getComponent('ParentSPlacerOrderNumber');
    }

    set ParentSPlacerOrderNumber(value) {
        this.setComponentValue('ParentSPlacerOrderNumber', value);
    }

    get ParentSFillerOrderNumber() {
        return this.getComponent('ParentSFillerOrderNumber');
    }

    set ParentSFillerOrderNumber(value) {
        this.setComponentValue('ParentSFillerOrderNumber', value);
    }
}
