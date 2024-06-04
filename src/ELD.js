import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { NM } from './NM';
import { CE } from './CE';
import { CWE } from './CWE';

export class ELD extends ComplexDataType {
    static components = {
        SegmentID: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 1,
        },
        SegmentId: { aliasOf: 'SegmentID' },
        Sequence: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 2,
        },
        SegmentSequence: { aliasOf: 'Sequence' },
        FieldPosition: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 3,
        },
        CodeIdentifyingError: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7'] },
            ],
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

    get SegmentId() {
        return this.getComponent('SegmentID');
    }

    set SegmentId(value) {
        this.setComponentValue('SegmentID', value);
    }

    get Sequence() {
        return this.getComponent('Sequence');
    }

    set Sequence(value) {
        this.setComponentValue('Sequence', value);
    }

    get SegmentSequence() {
        return this.getComponent('Sequence');
    }

    set SegmentSequence(value) {
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
