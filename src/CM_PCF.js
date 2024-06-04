import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { ID } from './ID';
import { TS } from './TS';

export class CM_PCF extends ComplexDataType {
    static components = {
        PreCertificationPatientType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 1,
        },
        PreCertificationRequired: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3'] }],
            position: 2,
        },
        PreCertificationWindwow: {
            defaultDataType: TS,
            dataTypes: [{ dataType: TS, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'PreCertificationPatientType', 'PreCertificationRequired', 'PreCertificationWindwow'];

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

    get PreCertificationWindwow() {
        return this.getComponent('PreCertificationWindwow');
    }

    set PreCertificationWindwow(value) {
        this.setComponentValue('PreCertificationWindwow', value);
    }
}
