import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { IS } from './IS';

export class CM_PI extends ComplexDataType {
    static components = {
        IDNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 1,
        },
        TypeOfIDNumber: {
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

    static componentsByIndex = ['', 'IDNumber', 'TypeOfIDNumber', 'OtherQualifyingInfo'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get IDNumber() {
        return this.getComponent('IDNumber');
    }

    set IDNumber(value) {
        this.setComponentValue('IDNumber', value);
    }

    get TypeOfIDNumber() {
        return this.getComponent('TypeOfIDNumber');
    }

    set TypeOfIDNumber(value) {
        this.setComponentValue('TypeOfIDNumber', value);
    }

    get OtherQualifyingInfo() {
        return this.getComponent('OtherQualifyingInfo');
    }

    set OtherQualifyingInfo(value) {
        this.setComponentValue('OtherQualifyingInfo', value);
    }
}
