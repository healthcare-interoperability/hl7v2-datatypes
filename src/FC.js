import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { DTM } from './DTM';
import { TS } from './TS';

export class FC extends ComplexDataType {
    static components = {
        FinancialClassCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        FinancialClass: { aliasOf: 'FinancialClassCode' },
        EffectiveDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'FinancialClassCode', 'EffectiveDate'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get FinancialClassCode() {
        return this.getComponent('FinancialClassCode');
    }

    set FinancialClassCode(value) {
        this.setComponentValue('FinancialClassCode', value);
    }

    get FinancialClass() {
        return this.getComponent('FinancialClassCode');
    }

    set FinancialClass(value) {
        this.setComponentValue('FinancialClassCode', value);
    }

    get EffectiveDate() {
        return this.getComponent('EffectiveDate');
    }

    set EffectiveDate(value) {
        this.setComponentValue('EffectiveDate', value);
    }
}
