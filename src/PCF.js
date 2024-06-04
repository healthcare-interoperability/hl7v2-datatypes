import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { ID } from './ID';
import { TS } from './TS';

export class PCF extends ComplexDataType {
    static components = {
        PreCertificationPatientType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3.1', '2.4'] }],
            position: 1,
        },
        PreCertificationRequired: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3.1', '2.4'] }],
            position: 2,
        },
        PreCertificationWindow: {
            defaultDataType: TS,
            dataTypes: [{ dataType: TS, versions: ['2.3.1', '2.4'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'PreCertificationPatientType', 'PreCertificationRequired', 'PreCertificationWindow'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get PreCertificationPatientType() {
        return this.getComponent('PreCertificationPatientType');
    }

    set PreCertificationPatientType(value) {
        this.setComponentValue('PreCertificationPatientType', value);
    }

    get PreCertificationRequired() {
        return this.getComponent('PreCertificationRequired');
    }

    set PreCertificationRequired(value) {
        this.setComponentValue('PreCertificationRequired', value);
    }

    get PreCertificationWindow() {
        return this.getComponent('PreCertificationWindow');
    }

    set PreCertificationWindow(value) {
        this.setComponentValue('PreCertificationWindow', value);
    }
}
