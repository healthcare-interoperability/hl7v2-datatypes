import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';

export class CM_CD_ELECTRODE extends ComplexDataType {
    static components = {
        SourceName1: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 1,
        },
        SourceName2: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'SourceName1', 'SourceName2'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SourceName1() {
        return this.getComponent('SourceName1');
    }

    set SourceName1(value) {
        this.setComponentValue('SourceName1', value);
    }

    get SourceName2() {
        return this.getComponent('SourceName2');
    }

    set SourceName2(value) {
        this.setComponentValue('SourceName2', value);
    }
}
