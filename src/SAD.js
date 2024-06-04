import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';

export class SAD extends ComplexDataType {
    static components = {
        StreetOrMailingAddress: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        StreetName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        DwellingNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'StreetOrMailingAddress', 'StreetName', 'DwellingNumber'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get StreetOrMailingAddress() {
        return this.getComponent('StreetOrMailingAddress');
    }

    set StreetOrMailingAddress(value) {
        this.setComponentValue('StreetOrMailingAddress', value);
    }

    get StreetName() {
        return this.getComponent('StreetName');
    }

    set StreetName(value) {
        this.setComponentValue('StreetName', value);
    }

    get DwellingNumber() {
        return this.getComponent('DwellingNumber');
    }

    set DwellingNumber(value) {
        this.setComponentValue('DwellingNumber', value);
    }
}
