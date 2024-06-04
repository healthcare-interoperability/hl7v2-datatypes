import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { IS } from './IS';

export class CM_PI extends ComplexDataType {
    static components = {
        IdNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 1,
        },
        TypeOfIdNumber: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 2,
        },
        OtherQualifyingInfo: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'IdNumber', 'TypeOfIdNumber', 'OtherQualifyingInfo'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get IdNumber() {
        return this.getComponent('IdNumber');
    }

    set IdNumber(value) {
        this.setComponentValue('IdNumber', value);
    }

    get TypeOfIdNumber() {
        return this.getComponent('TypeOfIdNumber');
    }

    set TypeOfIdNumber(value) {
        this.setComponentValue('TypeOfIdNumber', value);
    }

    get OtherQualifyingInfo() {
        return this.getComponent('OtherQualifyingInfo');
    }

    set OtherQualifyingInfo(value) {
        this.setComponentValue('OtherQualifyingInfo', value);
    }
}
