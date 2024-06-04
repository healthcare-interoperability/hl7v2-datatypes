import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { FN } from './FN';
import { IS } from './IS';
import { ID } from './ID';
import { HD } from './HD';

export class CN extends ComplexDataType {
    static components = {
        IdNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 1,
        },
        FamilyName: {
            defaultDataType: FN,
            dataTypes: [
                { dataType: ST, versions: ['2.3', '2.3.1'] },
                { dataType: FN, versions: ['2.4'] },
            ],
            position: 2,
        },
        GivenName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 3,
        },
        MiddleInitialOrName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 4,
        },
        SecondAndFurtherGivenNamesOrInitialsThereof: { aliasOf: 'MiddleInitialOrName' },
        Suffix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 5,
        },
        Prefix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4'] }],
            position: 6,
        },
        Degree: {
            defaultDataType: IS,
            dataTypes: [
                { dataType: ST, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4'] },
            ],
            position: 7,
        },
        SourceTable: {
            defaultDataType: IS,
            dataTypes: [
                { dataType: ID, versions: ['2.3'] },
                { dataType: IS, versions: ['2.3.1', '2.4'] },
            ],
            position: 8,
        },
        AssigningAuthority: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: ST, versions: ['2.3'] },
                { dataType: HD, versions: ['2.3.1', '2.4'] },
            ],
            position: 9,
        },
    };

    static componentsByIndex = ['', 'IdNumber', 'FamilyName', 'GivenName', 'MiddleInitialOrName', 'Suffix', 'Prefix', 'Degree', 'SourceTable', 'AssigningAuthority'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get IdNumber() {
        return this.getComponent('IdNumber');
    }

    set IdNumber(value) {
        this.setComponentValue('IdNumber', value);
    }

    get FamilyName() {
        return this.getComponent('FamilyName');
    }

    set FamilyName(value) {
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

    get SourceTable() {
        return this.getComponent('SourceTable');
    }

    set SourceTable(value) {
        this.setComponentValue('SourceTable', value);
    }

    get AssigningAuthority() {
        return this.getComponent('AssigningAuthority');
    }

    set AssigningAuthority(value) {
        this.setComponentValue('AssigningAuthority', value);
    }
}
