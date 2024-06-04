import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { FN } from './FN';
import { IS } from './IS';

export class PN extends ComplexDataType {
    static components = {
        FamilyName: {
            defaultDataType: FN,
            dataTypes: [
                { dataType: ST, versions: ['2.3'] },
                { dataType: FN, versions: ['2.3.1', '2.4'] },
            ],
            position: 1,
        },
        FamilyNameAndLastNamePrefix: { aliasOf: 'FamilyName' },
        GivenName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 2,
        },
        MiddleInitialOrName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 3,
        },
        SecondAndFurtherGivenNamesOrInitialsThereof: { aliasOf: 'MiddleInitialOrName' },
        Suffix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 4,
        },
        Prefix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 5,
        },
        Degree: {
            defaultDataType: IS,
            dataTypes: [
                { dataType: ST, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4'] },
            ],
            position: 6,
        },
    };

    static componentsByIndex = ['', 'FamilyName', 'GivenName', 'MiddleInitialOrName', 'Suffix', 'Prefix', 'Degree'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get FamilyName() {
        return this.getComponent('FamilyName');
    }

    set FamilyName(value) {
        this.setComponentValue('FamilyName', value);
    }

    get FamilyNameAndLastNamePrefix() {
        return this.getComponent('FamilyName');
    }

    set FamilyNameAndLastNamePrefix(value) {
        this.setComponentValue('FamilyName', value);
    }

    get GivenName() {
        return this.getComponent('GivenName');
    }

    set GivenName(value) {
        this.setComponentValue('GivenName', value);
    }

    get MiddleInitialOrName() {
        return this.getComponent('MiddleInitialOrName');
    }

    set MiddleInitialOrName(value) {
        this.setComponentValue('MiddleInitialOrName', value);
    }

    get SecondAndFurtherGivenNamesOrInitialsThereof() {
        return this.getComponent('MiddleInitialOrName');
    }

    set SecondAndFurtherGivenNamesOrInitialsThereof(value) {
        this.setComponentValue('MiddleInitialOrName', value);
    }

    get Suffix() {
        return this.getComponent('Suffix');
    }

    set Suffix(value) {
        this.setComponentValue('Suffix', value);
    }

    get Prefix() {
        return this.getComponent('Prefix');
    }

    set Prefix(value) {
        this.setComponentValue('Prefix', value);
    }

    get Degree() {
        return this.getComponent('Degree');
    }

    set Degree(value) {
        this.setComponentValue('Degree', value);
    }
}
