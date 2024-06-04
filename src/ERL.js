import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { NM } from './NM';

export class ERL extends ComplexDataType {
    static components = {
        SegmentId: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        SegmentSequence: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        FieldPosition: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        FieldRepetition: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        ComponentNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        SubComponentNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
    };

    static componentsByIndex = ['', 'SegmentId', 'SegmentSequence', 'FieldPosition', 'FieldRepetition', 'ComponentNumber', 'SubComponentNumber'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SegmentId() {
        return this.getComponent('SegmentId');
    }

    set SegmentId(value) {
        this.setComponentValue('SegmentId', value);
    }

    get SegmentSequence() {
        return this.getComponent('SegmentSequence');
    }

    set SegmentSequence(value) {
        this.setComponentValue('SegmentSequence', value);
    }

    get FieldPosition() {
        return this.getComponent('FieldPosition');
    }

    set FieldPosition(value) {
        this.setComponentValue('FieldPosition', value);
    }

    get FieldRepetition() {
        return this.getComponent('FieldRepetition');
    }

    set FieldRepetition(value) {
        this.setComponentValue('FieldRepetition', value);
    }

    get ComponentNumber() {
        return this.getComponent('ComponentNumber');
    }

    set ComponentNumber(value) {
        this.setComponentValue('ComponentNumber', value);
    }

    get SubComponentNumber() {
        return this.getComponent('SubComponentNumber');
    }

    set SubComponentNumber(value) {
        this.setComponentValue('SubComponentNumber', value);
    }
}
