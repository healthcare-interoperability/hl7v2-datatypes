import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { DTM } from './DTM';
import { TS } from './TS';
import { CWE } from './CWE';
import { CE } from './CE';

export class DIN extends ComplexDataType {
    static components = {
        Date: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
        },
        InstitutionName: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'Date', 'InstitutionName'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Date() {
        return this.getComponent('Date');
    }

    set Date(value) {
        this.setComponentValue('Date', value);
    }

    get InstitutionName() {
        return this.getComponent('InstitutionName');
    }

    set InstitutionName(value) {
        this.setComponentValue('InstitutionName', value);
    }
}
