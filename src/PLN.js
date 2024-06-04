import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { CWE } from './CWE';
import { IS } from './IS';
import { DT } from './DT';

export class PLN extends ComplexDataType {
    static components = {
        IdNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        TypeOfIdNumber: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
        StateOtherQualifyingInformation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        StateOtherQualifyingInfo: { aliasOf: 'StateOtherQualifyingInformation' },
        ExpirationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'IdNumber', 'TypeOfIdNumber', 'StateOtherQualifyingInformation', 'ExpirationDate'];

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

    get StateOtherQualifyingInformation() {
        return this.getComponent('StateOtherQualifyingInformation');
    }

    set StateOtherQualifyingInformation(value) {
        this.setComponentValue('StateOtherQualifyingInformation', value);
    }

    get StateOtherQualifyingInfo() {
        return this.getComponent('StateOtherQualifyingInformation');
    }

    set StateOtherQualifyingInfo(value) {
        this.setComponentValue('StateOtherQualifyingInformation', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }
}
