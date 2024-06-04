import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { IS } from './IS';
import { DT } from './DT';

export class CM_PLN extends ComplexDataType {
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
        StateOtherQualifyingInfo: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 3,
        },
        ExpirationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.3'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'IDNumber', 'TypeOfIDNumber', 'StateOtherQualifyingInfo', 'ExpirationDate'];

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

    get StateOtherQualifyingInfo() {
        return this.getComponent('StateOtherQualifyingInfo');
    }

    set StateOtherQualifyingInfo(value) {
        this.setComponentValue('StateOtherQualifyingInfo', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }
}
