import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { ID } from './ID';
import { DTM } from './DTM';
import { TS } from './TS';

export class DLD extends ComplexDataType {
    static components = {
        DischargeToLocation: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.5', '2.5.1'] },
                { dataType: ID, versions: ['2.4'] },
            ],
            position: 1,
        },
        DischargeLocation: { aliasOf: 'DischargeToLocation' },
        EffectiveDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'DischargeToLocation', 'EffectiveDate'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get DischargeToLocation() {
        return this.getComponent('DischargeToLocation');
    }

    set DischargeToLocation(value) {
        this.setComponentValue('DischargeToLocation', value);
    }

    get DischargeLocation() {
        return this.getComponent('DischargeToLocation');
    }

    set DischargeLocation(value) {
        this.setComponentValue('DischargeToLocation', value);
    }

    get EffectiveDate() {
        return this.getComponent('EffectiveDate');
    }

    set EffectiveDate(value) {
        this.setComponentValue('EffectiveDate', value);
    }
}
