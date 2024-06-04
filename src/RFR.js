import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NR } from './NR';
import { CWE } from './CWE';
import { IS } from './IS';
import { ST } from './ST';
import { TX } from './TX';

export class RFR extends ComplexDataType {
    static components = {
        NumericRange: {
            defaultDataType: NR,
            dataTypes: [{ dataType: NR, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        AdministrativeSex: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
        AgeRange: {
            defaultDataType: NR,
            dataTypes: [{ dataType: NR, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        GestationalAgeRange: {
            defaultDataType: NR,
            dataTypes: [{ dataType: NR, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        GestationalRange: { aliasOf: 'GestationalAgeRange' },
        Species: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: TX, versions: ['2.3.1', '2.4'] },
            ],
            position: 5,
        },
        RaceSubspecies: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        Conditions: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
        },
    };

    static componentsByIndex = ['', 'NumericRange', 'AdministrativeSex', 'AgeRange', 'GestationalAgeRange', 'Species', 'RaceSubspecies', 'Conditions'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get NumericRange() {
        return this.getComponent('NumericRange');
    }

    set NumericRange(value) {
        this.setComponentValue('NumericRange', value);
    }

    get AdministrativeSex() {
        return this.getComponent('AdministrativeSex');
    }

    set AdministrativeSex(value) {
        this.setComponentValue('AdministrativeSex', value);
    }

    get AgeRange() {
        return this.getComponent('AgeRange');
    }

    set AgeRange(value) {
        this.setComponentValue('AgeRange', value);
    }

    get GestationalAgeRange() {
        return this.getComponent('GestationalAgeRange');
    }

    set GestationalAgeRange(value) {
        this.setComponentValue('GestationalAgeRange', value);
    }

    get GestationalRange() {
        return this.getComponent('GestationalAgeRange');
    }

    set GestationalRange(value) {
        this.setComponentValue('GestationalAgeRange', value);
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
