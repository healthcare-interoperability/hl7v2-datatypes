import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { NM } from './NM';
import { CE } from './CE';

export class CM_ELD extends ComplexDataType {
    static components = {
        SegmentID: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 1,
        },
        Sequence: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 2,
        },
        FieldPosition: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 3,
        },
        CodeIdentifyingError: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'SegmentID', 'Sequence', 'FieldPosition', 'CodeIdentifyingError'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SegmentID() {
        return this.getComponent('SegmentID');
    }

    set SegmentID(value) {
        this.setComponentValue('SegmentID', value);
    }

    get Sequence() {
        return this.getComponent('Sequence');
    }

    set Sequence(value) {
        this.setComponentValue('Sequence', value);
    }

    get FieldPosition() {
        return this.getComponent('FieldPosition');
    }

    set FieldPosition(value) {
        this.setComponentValue('FieldPosition', value);
    }

    get CodeIdentifyingError() {
        return this.getComponent('CodeIdentifyingError');
    }

    set CodeIdentifyingError(value) {
        this.setComponentValue('CodeIdentifyingError', value);
    }
}
