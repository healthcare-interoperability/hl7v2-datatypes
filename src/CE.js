import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { IS } from './IS';
import { ID } from './ID';

export class CE extends ComplexDataType {
    static components = {
        Identifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5.1', '2.6', '2.7'] }],
            position: 1,
        },
        Text: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5.1', '2.6', '2.7'] }],
            position: 2,
        },
        NameOfCodingSystem: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ST, versions: ['2.3', '2.3.1'] },
                { dataType: IS, versions: ['2.4'] },
                { dataType: ID, versions: ['2.5.1', '2.6', '2.7'] },
            ],
            position: 3,
        },
        AlternateIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5.1', '2.6', '2.7'] }],
            position: 4,
        },
        AlternateComponents: { aliasOf: 'AlternateIdentifier' },
        AlternateText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5.1', '2.6', '2.7'] }],
            position: 5,
        },
        NameOfAlternateCodingSystem: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ST, versions: ['2.3', '2.3.1'] },
                { dataType: IS, versions: ['2.4'] },
                { dataType: ID, versions: ['2.5.1', '2.6', '2.7'] },
            ],
            position: 6,
        },
    };

    static componentsByIndex = ['', 'Identifier', 'Text', 'NameOfCodingSystem', 'AlternateIdentifier', 'AlternateText', 'NameOfAlternateCodingSystem'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Identifier() {
        return this.getComponent('Identifier');
    }

    set Identifier(value) {
        this.setComponentValue('Identifier', value);
    }

    get Text() {
        return this.getComponent('Text');
    }

    set Text(value) {
        this.setComponentValue('Text', value);
    }

    get NameOfCodingSystem() {
        return this.getComponent('NameOfCodingSystem');
    }

    set NameOfCodingSystem(value) {
        this.setComponentValue('NameOfCodingSystem', value);
    }

    get AlternateIdentifier() {
        return this.getComponent('AlternateIdentifier');
    }

    set AlternateIdentifier(value) {
        this.setComponentValue('AlternateIdentifier', value);
    }

    get AlternateComponents() {
        return this.getComponent('AlternateIdentifier');
    }

    set AlternateComponents(value) {
        this.setComponentValue('AlternateIdentifier', value);
    }

    get AlternateText() {
        return this.getComponent('AlternateText');
    }

    set AlternateText(value) {
        this.setComponentValue('AlternateText', value);
    }

    get NameOfAlternateCodingSystem() {
        return this.getComponent('NameOfAlternateCodingSystem');
    }

    set NameOfAlternateCodingSystem(value) {
        this.setComponentValue('NameOfAlternateCodingSystem', value);
    }
}
