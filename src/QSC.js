import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { ID } from './ID';

export class QSC extends ComplexDataType {
    static components = {
        SegmentFieldName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        NameOfField: { aliasOf: 'SegmentFieldName' },
        RelationalOperator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        Value: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        RelationalConjunction: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'SegmentFieldName', 'RelationalOperator', 'Value', 'RelationalConjunction'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SegmentFieldName() {
        return this.getComponent('SegmentFieldName');
    }

    set SegmentFieldName(value) {
        this.setComponentValue('SegmentFieldName', value);
    }

    get NameOfField() {
        return this.getComponent('SegmentFieldName');
    }

    set NameOfField(value) {
        this.setComponentValue('SegmentFieldName', value);
    }

    get RelationalOperator() {
        return this.getComponent('RelationalOperator');
    }

    set RelationalOperator(value) {
        this.setComponentValue('RelationalOperator', value);
    }

    get Value() {
        return this.getComponent('Value');
    }

    set Value(value) {
        this.setComponentValue('Value', value);
    }

    get RelationalConjunction() {
        return this.getComponent('RelationalConjunction');
    }

    set RelationalConjunction(value) {
        this.setComponentValue('RelationalConjunction', value);
    }
}
