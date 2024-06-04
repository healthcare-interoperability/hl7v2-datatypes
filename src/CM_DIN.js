import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { TS } from './TS';
import { CE } from './CE';

export class CM_DIN extends ComplexDataType {
    static components = {
        Date: {
            defaultDataType: TS,
            dataTypes: [{ dataType: TS, versions: ['2.3'] }],
            position: 1,
        },
        InstitutionName: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
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
