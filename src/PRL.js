import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { CE } from './CE';
import { ST } from './ST';
import { TX } from './TX';

export class PRL extends ComplexDataType {
    static components = {
        ParentObservationIdentifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 1,
        },
        Obx3ObservationIdentifierOfParentResult: { aliasOf: 'ParentObservationIdentifier' },
        ParentObservationSubIdentifier: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        Obx4SubIdOfParentResult: { aliasOf: 'ParentObservationSubIdentifier' },
        ParentObservationValueDescriptor: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        PartOfObx5ObservationResultFromParent: { aliasOf: 'ParentObservationValueDescriptor' },
    };

    static componentsByIndex = ['', 'ParentObservationIdentifier', 'ParentObservationSubIdentifier', 'ParentObservationValueDescriptor'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ParentObservationIdentifier() {
        return this.getComponent('ParentObservationIdentifier');
    }

    set ParentObservationIdentifier(value) {
        this.setComponentValue('ParentObservationIdentifier', value);
    }

    get Obx3ObservationIdentifierOfParentResult() {
        return this.getComponent('ParentObservationIdentifier');
    }

    set Obx3ObservationIdentifierOfParentResult(value) {
        this.setComponentValue('ParentObservationIdentifier', value);
    }

    get ParentObservationSubIdentifier() {
        return this.getComponent('ParentObservationSubIdentifier');
    }

    set ParentObservationSubIdentifier(value) {
        this.setComponentValue('ParentObservationSubIdentifier', value);
    }

    get Obx4SubIdOfParentResult() {
        return this.getComponent('ParentObservationSubIdentifier');
    }

    set Obx4SubIdOfParentResult(value) {
        this.setComponentValue('ParentObservationSubIdentifier', value);
    }

    get ParentObservationValueDescriptor() {
        return this.getComponent('ParentObservationValueDescriptor');
    }

    set ParentObservationValueDescriptor(value) {
        this.setComponentValue('ParentObservationValueDescriptor', value);
    }

    get PartOfObx5ObservationResultFromParent() {
        return this.getComponent('ParentObservationValueDescriptor');
    }

    set PartOfObx5ObservationResultFromParent(value) {
        this.setComponentValue('ParentObservationValueDescriptor', value);
    }
}
