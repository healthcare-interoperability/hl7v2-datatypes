import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { ID } from './ID';
import { NM } from './NM';

export class RCD extends ComplexDataType {
    static components = {
        SegmentFieldName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Hl7ItemNumber: { aliasOf: 'SegmentFieldName' },
        Hl7DataType: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 2,
        },
        Hl7DateType: { aliasOf: 'Hl7DataType' },
        MaximumColumnWidth: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'SegmentFieldName', 'Hl7DataType', 'MaximumColumnWidth'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SegmentFieldName() {
        return this.getComponent('SegmentFieldName');
    }

    set SegmentFieldName(value) {
        this.setComponentValue('SegmentFieldName', value);
    }

    get Hl7ItemNumber() {
        return this.getComponent('SegmentFieldName');
    }

    set Hl7ItemNumber(value) {
        this.setComponentValue('SegmentFieldName', value);
    }

    get Hl7DataType() {
        return this.getComponent('Hl7DataType');
    }

    set Hl7DataType(value) {
        this.setComponentValue('Hl7DataType', value);
    }

    get Hl7DateType() {
        return this.getComponent('Hl7DataType');
    }

    set Hl7DateType(value) {
        this.setComponentValue('Hl7DataType', value);
    }

    get MaximumColumnWidth() {
        return this.getComponent('MaximumColumnWidth');
    }

    set MaximumColumnWidth(value) {
        this.setComponentValue('MaximumColumnWidth', value);
    }
}
