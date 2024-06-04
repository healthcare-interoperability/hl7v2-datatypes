import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { TX } from './TX';

export class JCC extends ComplexDataType {
    static components = {
        JobCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        JobClass: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
        JobDescriptionText: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'JobCode', 'JobClass', 'JobDescriptionText'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get JobCode() {
        return this.getComponent('JobCode');
    }

    set JobCode(value) {
        this.setComponentValue('JobCode', value);
    }

    get JobClass() {
        return this.getComponent('JobClass');
    }

    set JobClass(value) {
        this.setComponentValue('JobClass', value);
    }

    get JobDescriptionText() {
        return this.getComponent('JobDescriptionText');
    }

    set JobDescriptionText(value) {
        this.setComponentValue('JobDescriptionText', value);
    }
}
