import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { DT } from './DT';

export class CM_AUI extends ComplexDataType {
    static components = {
        AuthorizationNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 1,
        },
        Date: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.3'] }],
            position: 2,
        },
        Source: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'AuthorizationNumber', 'Date', 'Source'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get AuthorizationNumber() {
        return this.getComponent('AuthorizationNumber');
    }

    set AuthorizationNumber(value) {
        this.setComponentValue('AuthorizationNumber', value);
    }

    get Date() {
        return this.getComponent('Date');
    }

    set Date(value) {
        this.setComponentValue('Date', value);
    }

    get Source() {
        return this.getComponent('Source');
    }

    set Source(value) {
        this.setComponentValue('Source', value);
    }
}
