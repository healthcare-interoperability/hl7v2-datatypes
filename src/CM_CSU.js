import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';
import { ID } from './ID';
import { ST } from './ST';

export class CM_CSU extends ComplexDataType {
    static components = {
        Sensitivity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 1,
        },
        UnitIdentifier: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3'] }],
            position: 2,
        },
        UnitText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 3,
        },
        UnitsNameOfCodingSystem: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 4,
        },
        UnitsAlternateIdentifier: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3'] }],
            position: 5,
        },
        UnitsAlternateText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 6,
        },
        UnitsNameOfAlternateCodingSystem: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 7,
        },
    };

    static componentsByIndex = ['', 'Sensitivity', 'UnitIdentifier', 'UnitText', 'UnitsNameOfCodingSystem', 'UnitsAlternateIdentifier', 'UnitsAlternateText', 'UnitsNameOfAlternateCodingSystem'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Sensitivity() {
        return this.getComponent('Sensitivity');
    }

    set Sensitivity(value) {
        this.setComponentValue('Sensitivity', value);
    }

    get UnitIdentifier() {
        return this.getComponent('UnitIdentifier');
    }

    set UnitIdentifier(value) {
        this.setComponentValue('UnitIdentifier', value);
    }

    get UnitText() {
        return this.getComponent('UnitText');
    }

    set UnitText(value) {
        this.setComponentValue('UnitText', value);
    }

    get UnitsNameOfCodingSystem() {
        return this.getComponent('UnitsNameOfCodingSystem');
    }

    set UnitsNameOfCodingSystem(value) {
        this.setComponentValue('UnitsNameOfCodingSystem', value);
    }

    get UnitsAlternateIdentifier() {
        return this.getComponent('UnitsAlternateIdentifier');
    }

    set UnitsAlternateIdentifier(value) {
        this.setComponentValue('UnitsAlternateIdentifier', value);
    }

    get UnitsAlternateText() {
        return this.getComponent('UnitsAlternateText');
    }

    set UnitsAlternateText(value) {
        this.setComponentValue('UnitsAlternateText', value);
    }

    get UnitsNameOfAlternateCodingSystem() {
        return this.getComponent('UnitsNameOfAlternateCodingSystem');
    }

    set UnitsNameOfAlternateCodingSystem(value) {
        this.setComponentValue('UnitsNameOfAlternateCodingSystem', value);
    }
}
