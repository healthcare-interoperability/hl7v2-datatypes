import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CE } from './CE';
import { ST } from './ST';
import { TX } from './TX';

export class CM_PRL extends ComplexDataType {
    static components = {
        Obx3ObservationIdentifierOfParentResult: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 1,
        },
        Obx4SubIdOfParentResult: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 2,
        },
        PartOfObx5ObservationResultFromParent: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.3'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'Obx3ObservationIdentifierOfParentResult', 'Obx4SubIdOfParentResult', 'PartOfObx5ObservationResultFromParent'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Obx3ObservationIdentifierOfParentResult() {
        return this.getComponent('Obx3ObservationIdentifierOfParentResult');
    }

    set Obx3ObservationIdentifierOfParentResult(value) {
        this.setComponentValue('Obx3ObservationIdentifierOfParentResult', value);
    }

    get Obx4SubIdOfParentResult() {
        return this.getComponent('Obx4SubIdOfParentResult');
    }

    set Obx4SubIdOfParentResult(value) {
        this.setComponentValue('Obx4SubIdOfParentResult', value);
    }

    get PartOfObx5ObservationResultFromParent() {
        return this.getComponent('PartOfObx5ObservationResultFromParent');
    }

    set PartOfObx5ObservationResultFromParent(value) {
        this.setComponentValue('PartOfObx5ObservationResultFromParent', value);
    }
}
