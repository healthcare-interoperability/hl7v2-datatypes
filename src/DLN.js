import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { CWE } from './CWE';
import { IS } from './IS';
import { DT } from './DT';

export class DLN extends ComplexDataType {
    static components = {
        LicenseNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        DriverSLicenseNumber: { aliasOf: 'LicenseNumber' },
        DriversLicenseNumber: { aliasOf: 'LicenseNumber' },
        IssuingStateProvinceCountry: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
        ExpirationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'LicenseNumber', 'IssuingStateProvinceCountry', 'ExpirationDate'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get LicenseNumber() {
        return this.getComponent('LicenseNumber');
    }

    set LicenseNumber(value) {
        this.setComponentValue('LicenseNumber', value);
    }

    get DriverSLicenseNumber() {
        return this.getComponent('LicenseNumber');
    }

    set DriverSLicenseNumber(value) {
        this.setComponentValue('LicenseNumber', value);
    }

    get DriversLicenseNumber() {
        return this.getComponent('LicenseNumber');
    }

    set DriversLicenseNumber(value) {
        this.setComponentValue('LicenseNumber', value);
    }

    get IssuingStateProvinceCountry() {
        return this.getComponent('IssuingStateProvinceCountry');
    }

    set IssuingStateProvinceCountry(value) {
        this.setComponentValue('IssuingStateProvinceCountry', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }
}
