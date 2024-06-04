import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { ID } from './ID';
import { DT } from './DT';

export class CM_SPD extends ComplexDataType {
    static components = {
        SpecialtyName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 1,
        },
        GoverningBoard: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 2,
        },
        EligibleOrCertified: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3'] }],
            position: 3,
        },
        DateOfCertification: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.3'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'SpecialtyName', 'GoverningBoard', 'EligibleOrCertified', 'DateOfCertification'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SpecialtyName() {
        return this.getComponent('SpecialtyName');
    }

    set SpecialtyName(value) {
        this.setComponentValue('SpecialtyName', value);
    }

    get GoverningBoard() {
        return this.getComponent('GoverningBoard');
    }

    set GoverningBoard(value) {
        this.setComponentValue('GoverningBoard', value);
    }

    get EligibleOrCertified() {
        return this.getComponent('EligibleOrCertified');
    }

    set EligibleOrCertified(value) {
        this.setComponentValue('EligibleOrCertified', value);
    }

    get DateOfCertification() {
        return this.getComponent('DateOfCertification');
    }

    set DateOfCertification(value) {
        this.setComponentValue('DateOfCertification', value);
    }
}
