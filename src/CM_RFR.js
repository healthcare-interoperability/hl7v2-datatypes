import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CM_RANGE } from './CM_RANGE';
import { IS } from './IS';
import { TX } from './TX';
import { ST } from './ST';

export class CM_RFR extends ComplexDataType {
    static components = {
        ReferenceRange: {
            defaultDataType: CM_RANGE,
            dataTypes: [{ dataType: CM_RANGE, versions: ['2.3'] }],
            position: 1,
        },
        Sex: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 2,
        },
        AgeRange: {
            defaultDataType: CM_RANGE,
            dataTypes: [{ dataType: CM_RANGE, versions: ['2.3'] }],
            position: 3,
        },
        AgeGestation: {
            defaultDataType: CM_RANGE,
            dataTypes: [{ dataType: CM_RANGE, versions: ['2.3'] }],
            position: 4,
        },
        Species: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.3'] }],
            position: 5,
        },
        RaceSubspecies: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 6,
        },
        Conditions: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.3'] }],
            position: 7,
        },
    };

    static componentsByIndex = ['', 'ReferenceRange', 'Sex', 'AgeRange', 'AgeGestation', 'Species', 'RaceSubspecies', 'Conditions'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ReferenceRange() {
        return this.getComponent('ReferenceRange');
    }

    set ReferenceRange(value) {
        this.setComponentValue('ReferenceRange', value);
    }

    get Sex() {
        return this.getComponent('Sex');
    }

    set Sex(value) {
        this.setComponentValue('Sex', value);
    }

    get AgeRange() {
        return this.getComponent('AgeRange');
    }

    set AgeRange(value) {
        this.setComponentValue('AgeRange', value);
    }

    get AgeGestation() {
        return this.getComponent('AgeGestation');
    }

    set AgeGestation(value) {
        this.setComponentValue('AgeGestation', value);
    }

    get Species() {
        return this.getComponent('Species');
    }

    set Species(value) {
        this.setComponentValue('Species', value);
    }

    get RaceSubspecies() {
        return this.getComponent('RaceSubspecies');
    }

    set RaceSubspecies(value) {
        this.setComponentValue('RaceSubspecies', value);
    }

    get Conditions() {
        return this.getComponent('Conditions');
    }

    set Conditions(value) {
        this.setComponentValue('Conditions', value);
    }
}
