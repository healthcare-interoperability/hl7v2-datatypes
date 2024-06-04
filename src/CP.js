import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { MO } from './MO';
import { ID } from './ID';
import { NM } from './NM';
import { CWE } from './CWE';
import { CE } from './CE';

export class CP extends ComplexDataType {
    static components = {
        Price: {
            defaultDataType: MO,
            dataTypes: [{ dataType: MO, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        PriceType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        FromValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        ToValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        RangeUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 5,
        },
        RangeType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
    };

    static componentsByIndex = ['', 'Price', 'PriceType', 'FromValue', 'ToValue', 'RangeUnits', 'RangeType'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Price() {
        return this.getComponent('Price');
    }

    set Price(value) {
        this.setComponentValue('Price', value);
    }

    get PriceType() {
        return this.getComponent('PriceType');
    }

    set PriceType(value) {
        this.setComponentValue('PriceType', value);
    }

    get FromValue() {
        return this.getComponent('FromValue');
    }

    set FromValue(value) {
        this.setComponentValue('FromValue', value);
    }

    get ToValue() {
        return this.getComponent('ToValue');
    }

    set ToValue(value) {
        this.setComponentValue('ToValue', value);
    }

    get RangeUnits() {
        return this.getComponent('RangeUnits');
    }

    set RangeUnits(value) {
        this.setComponentValue('RangeUnits', value);
    }

    get RangeType() {
        return this.getComponent('RangeType');
    }

    set RangeType(value) {
        this.setComponentValue('RangeType', value);
    }
}
