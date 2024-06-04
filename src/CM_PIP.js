import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CE } from './CE';
import { DT } from './DT';

export class CM_PIP extends ComplexDataType {
    static components = {
        Privilege: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 1,
        },
        PrivilegeClass: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 2,
        },
        ExpirationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.3'] }],
            position: 3,
        },
        ActivationDate: {
            defaultDataType: DT,
            dataTypes: [{ dataType: DT, versions: ['2.3'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'Privilege', 'PrivilegeClass', 'ExpirationDate', 'ActivationDate'];

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
}
