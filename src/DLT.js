import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NR } from './NR';
import { NM } from './NM';
import { ID } from './ID';
import { ST } from './ST';

export class DLT extends ComplexDataType {
    static components = {
        NormalRange: {
            defaultDataType: NR,
            dataTypes: [{ dataType: NR, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Range: { aliasOf: 'NormalRange' },
        NumericThreshold: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        ChangeComputation: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3.1', '2.4'] },
            ],
            position: 3,
        },
        DaysRetained: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        LengthOfTimeDays: { aliasOf: 'DaysRetained' },
    };

    static componentsByIndex = ['', 'NormalRange', 'NumericThreshold', 'ChangeComputation', 'DaysRetained'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get NormalRange() {
        return this.getComponent('NormalRange');
    }

    set NormalRange(value) {
        this.setComponentValue('NormalRange', value);
    }

    get Range() {
        return this.getComponent('NormalRange');
    }

    set Range(value) {
        this.setComponentValue('NormalRange', value);
    }

    get NumericThreshold() {
        return this.getComponent('NumericThreshold');
    }

    set NumericThreshold(value) {
        this.setComponentValue('NumericThreshold', value);
    }

    get ChangeComputation() {
        return this.getComponent('ChangeComputation');
    }

    set ChangeComputation(value) {
        this.setComponentValue('ChangeComputation', value);
    }

    get DaysRetained() {
        return this.getComponent('DaysRetained');
    }

    set DaysRetained(value) {
        this.setComponentValue('DaysRetained', value);
    }

    get LengthOfTimeDays() {
        return this.getComponent('DaysRetained');
    }

    set LengthOfTimeDays(value) {
        this.setComponentValue('DaysRetained', value);
    }
}
