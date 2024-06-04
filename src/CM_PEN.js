import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { NM } from './NM';

export class CM_PEN extends ComplexDataType {
    static components = {
        PenaltyType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1'] }],
            position: 1,
        },
        PenaltyAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3', '2.3.1'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'PenaltyType', 'PenaltyAmount'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get PenaltyType() {
        return this.getComponent('PenaltyType');
    }

    set PenaltyType(value) {
        this.setComponentValue('PenaltyType', value);
    }

    get PenaltyAmount() {
        return this.getComponent('PenaltyAmount');
    }

    set PenaltyAmount(value) {
        this.setComponentValue('PenaltyAmount', value);
    }
}
