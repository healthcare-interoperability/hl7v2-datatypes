import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { NM } from './NM';

export class CM_UVC extends ComplexDataType {
    static components = {
        ValueCode: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 1,
        },
        ValueAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'ValueCode', 'ValueAmount'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ValueCode() {
        return this.getComponent('ValueCode');
    }

    set ValueCode(value) {
        this.setComponentValue('ValueCode', value);
    }

    get ValueAmount() {
        return this.getComponent('ValueAmount');
    }

    set ValueAmount(value) {
        this.setComponentValue('ValueAmount', value);
    }
}
