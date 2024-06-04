import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';

export class QIP extends ComplexDataType {
    static components = {
        SegmentFieldName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        FieldName: { aliasOf: 'SegmentFieldName' },
        Values: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        Value1Value2Value3: { aliasOf: 'Values' },
    };

    static componentsByIndex = ['', 'SegmentFieldName', 'Values'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SegmentFieldName() {
        return this.getComponent('SegmentFieldName');
    }

    set SegmentFieldName(value) {
        this.setComponentValue('SegmentFieldName', value);
    }

    get FieldName() {
        return this.getComponent('SegmentFieldName');
    }

    set FieldName(value) {
        this.setComponentValue('SegmentFieldName', value);
    }

    get Values() {
        return this.getComponent('Values');
    }

    set Values(value) {
        this.setComponentValue('Values', value);
    }

    get Value1Value2Value3() {
        return this.getComponent('Values');
    }

    set Value1Value2Value3(value) {
        this.setComponentValue('Values', value);
    }
}
