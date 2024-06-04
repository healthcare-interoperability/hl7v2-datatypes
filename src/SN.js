import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { NM } from './NM';

export class SN extends ComplexDataType {
    static components = {
        Comparator: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Num1: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        SeparatorSuffix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        SeparatorOrSuffix: { aliasOf: 'SeparatorSuffix' },
        Num2: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'Comparator', 'Num1', 'SeparatorSuffix', 'Num2'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Comparator() {
        return this.getComponent('Comparator');
    }

    set Comparator(value) {
        this.setComponentValue('Comparator', value);
    }

    get Num1() {
        return this.getComponent('Num1');
    }

    set Num1(value) {
        this.setComponentValue('Num1', value);
    }

    get SeparatorSuffix() {
        return this.getComponent('SeparatorSuffix');
    }

    set SeparatorSuffix(value) {
        this.setComponentValue('SeparatorSuffix', value);
    }

    get SeparatorOrSuffix() {
        return this.getComponent('SeparatorSuffix');
    }

    set SeparatorOrSuffix(value) {
        this.setComponentValue('SeparatorSuffix', value);
    }

    get Num2() {
        return this.getComponent('Num2');
    }

    set Num2(value) {
        this.setComponentValue('Num2', value);
    }
}
