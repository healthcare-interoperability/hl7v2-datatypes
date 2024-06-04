import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { CWE } from './CWE';
import { CE } from './CE';

export class VID extends ComplexDataType {
    static components = {
        VersionId: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        InternationalizationCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
        InternationalVersionId: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'VersionId', 'InternationalizationCode', 'InternationalVersionId'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get VersionId() {
        return this.getComponent('VersionId');
    }

    set VersionId(value) {
        this.setComponentValue('VersionId', value);
    }

    get InternationalizationCode() {
        return this.getComponent('InternationalizationCode');
    }

    set InternationalizationCode(value) {
        this.setComponentValue('InternationalizationCode', value);
    }

    get InternationalVersionId() {
        return this.getComponent('InternationalVersionId');
    }

    set InternationalVersionId(value) {
        this.setComponentValue('InternationalVersionId', value);
    }
}
