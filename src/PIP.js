import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { CE } from './CE';
import { DT } from './DT';
import { EI } from './EI';

export class PIP extends ComplexDataType {
    static components = {
        Privilege: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
        },
        PrivilegeClass: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
        ExpirationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        ActivationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        Facility: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
    };

    static componentsByIndex = ['', 'Privilege', 'PrivilegeClass', 'ExpirationDate', 'ActivationDate', 'Facility'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Privilege() {
        return this.getComponent('Privilege');
    }

    set Privilege(value) {
        this.setComponentValue('Privilege', value);
    }

    get PrivilegeClass() {
        return this.getComponent('PrivilegeClass');
    }

    set PrivilegeClass(value) {
        this.setComponentValue('PrivilegeClass', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }

    get ActivationDate() {
        return this.getComponent('ActivationDate');
    }

    set ActivationDate(value) {
        this.setComponentValue('ActivationDate', value);
    }

    get Facility() {
        return this.getComponent('Facility');
    }

    set Facility(value) {
        this.setComponentValue('Facility', value);
    }
}
