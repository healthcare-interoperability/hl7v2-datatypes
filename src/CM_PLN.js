import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { IS } from './IS';
import { DT } from './DT';

export class CM_PLN extends ComplexDataType {
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

    static componentsByIndex = ['', 'IdNumber', 'TypeOfIdNumber', 'StateOtherQualifyingInfo', 'ExpirationDate'];

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
