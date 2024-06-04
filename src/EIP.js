import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { EI } from './EI';

export class EIP extends ComplexDataType {
    static components = {
        PlacerAssignedIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        ParentSPlacerOrderNumber: { aliasOf: 'PlacerAssignedIdentifier' },
        FillerAssignedIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        ParentSFillerOrderNumber: { aliasOf: 'FillerAssignedIdentifier' },
    };

    static componentsByIndex = ['', 'PlacerAssignedIdentifier', 'FillerAssignedIdentifier'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get PlacerAssignedIdentifier() {
        return this.getComponent('PlacerAssignedIdentifier');
    }

    set PlacerAssignedIdentifier(value) {
        this.setComponentValue('PlacerAssignedIdentifier', value);
    }

    get ParentSPlacerOrderNumber() {
        return this.getComponent('PlacerAssignedIdentifier');
    }

    set ParentSPlacerOrderNumber(value) {
        this.setComponentValue('PlacerAssignedIdentifier', value);
    }

    get FillerAssignedIdentifier() {
        return this.getComponent('FillerAssignedIdentifier');
    }

    set FillerAssignedIdentifier(value) {
        this.setComponentValue('FillerAssignedIdentifier', value);
    }

    get ParentSFillerOrderNumber() {
        return this.getComponent('FillerAssignedIdentifier');
    }

    set ParentSFillerOrderNumber(value) {
        this.setComponentValue('FillerAssignedIdentifier', value);
    }
}
