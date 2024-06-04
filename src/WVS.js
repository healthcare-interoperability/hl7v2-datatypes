import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';

export class WVS extends ComplexDataType {
    static components = {
        SourceOneName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        SourceName1: { aliasOf: 'SourceOneName' },
        SourceTwoName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        SourceName2: { aliasOf: 'SourceTwoName' },
    };

    static componentsByIndex = ['', 'SourceOneName', 'SourceTwoName'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SourceOneName() {
        return this.getComponent('SourceOneName');
    }

    set SourceOneName(value) {
        this.setComponentValue('SourceOneName', value);
    }

    get SourceName1() {
        return this.getComponent('SourceOneName');
    }

    set SourceName1(value) {
        this.setComponentValue('SourceOneName', value);
    }

    get SourceTwoName() {
        return this.getComponent('SourceTwoName');
    }

    set SourceTwoName(value) {
        this.setComponentValue('SourceTwoName', value);
    }

    get SourceName2() {
        return this.getComponent('SourceTwoName');
    }

    set SourceName2(value) {
        this.setComponentValue('SourceTwoName', value);
    }
}
