import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { HD } from './HD';
import { ID } from './ID';
import { TX } from './TX';
import { ST } from './ST';

export class ED extends ComplexDataType {
    static components = {
        SourceApplication: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        TypeOfData: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        DataSubtype: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        Encoding: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        Data: {
            defaultDataType: TX,
            dataTypes: [
                { dataType: TX, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 5,
        },
    };

    static componentsByIndex = ['', 'SourceApplication', 'TypeOfData', 'DataSubtype', 'Encoding', 'Data'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SourceApplication() {
        return this.getComponent('SourceApplication');
    }

    set SourceApplication(value) {
        this.setComponentValue('SourceApplication', value);
    }

    get TypeOfData() {
        return this.getComponent('TypeOfData');
    }

    set TypeOfData(value) {
        this.setComponentValue('TypeOfData', value);
    }

    get DataSubtype() {
        return this.getComponent('DataSubtype');
    }

    set DataSubtype(value) {
        this.setComponentValue('DataSubtype', value);
    }

    get Encoding() {
        return this.getComponent('Encoding');
    }

    set Encoding(value) {
        this.setComponentValue('Encoding', value);
    }

    get Data() {
        return this.getComponent('Data');
    }

    set Data(value) {
        this.setComponentValue('Data', value);
    }
}
