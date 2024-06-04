import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { NM } from './NM';

export class CM_RMC extends ComplexDataType {
    static components = {
        RoomType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 1,
        },
        AmountType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 2,
        },
        CoverageAmount: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'RoomType', 'AmountType', 'CoverageAmount'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get RoomType() {
        return this.getComponent('RoomType');
    }

    set RoomType(value) {
        this.setComponentValue('RoomType', value);
    }

    get AmountType() {
        return this.getComponent('AmountType');
    }

    set AmountType(value) {
        this.setComponentValue('AmountType', value);
    }

    get CoverageAmount() {
        return this.getComponent('CoverageAmount');
    }

    set CoverageAmount(value) {
        this.setComponentValue('CoverageAmount', value);
    }
}
