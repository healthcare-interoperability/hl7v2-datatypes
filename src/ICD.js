import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { ID } from './ID';
import { DTM } from './DTM';
import { TS } from './TS';

export class ICD extends ComplexDataType {
    static components = {
        CertificationPatientType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        CertificationRequired: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        DateTimeCertificationRequired: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.5', '2.5.1'] },
            ],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'CertificationPatientType', 'CertificationRequired', 'DateTimeCertificationRequired'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get CertificationPatientType() {
        return this.getComponent('CertificationPatientType');
    }

    set CertificationPatientType(value) {
        this.setComponentValue('CertificationPatientType', value);
    }

    get CertificationRequired() {
        return this.getComponent('CertificationRequired');
    }

    set CertificationRequired(value) {
        this.setComponentValue('CertificationRequired', value);
    }

    get DateTimeCertificationRequired() {
        return this.getComponent('DateTimeCertificationRequired');
    }

    set DateTimeCertificationRequired(value) {
        this.setComponentValue('DateTimeCertificationRequired', value);
    }
}
