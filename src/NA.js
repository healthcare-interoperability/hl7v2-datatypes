import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';

export class NA extends ComplexDataType {
    static components = {
        Value1: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Value2: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        Value3: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        Value4: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'Value1', 'Value2', 'Value3', 'Value4'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Value1() {
        return this.getComponent('Value1');
    }

    set Value1(value) {
        this.setComponentValue('Value1', value);
    }

    get Value2() {
        return this.getComponent('Value2');
    }

    set Value2(value) {
        this.setComponentValue('Value2', value);
    }

    get Value3() {
        return this.getComponent('Value3');
    }

    set Value3(value) {
        this.setComponentValue('Value3', value);
    }

    get Value4() {
        return this.getComponent('Value4');
    }

    set Value4(value) {
        this.setComponentValue('Value4', value);
    }
}
