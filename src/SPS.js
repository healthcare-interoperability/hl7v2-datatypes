import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CE } from './CE';
import { CWE } from './CWE';
import { TX } from './TX';

export class SPS extends ComplexDataType {
    static components = {
        SpecimenSourceNameOrCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4'] },
                { dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 1,
        },
        Additives: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: TX, versions: ['2.3.1', '2.4'] },
                { dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 2,
        },
        Freetext: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 3,
        },
        SpecimenCollectionMethod: { aliasOf: 'Freetext' },
        BodySite: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4'] },
                { dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 4,
        },
        SiteModifier: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4'] },
                { dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 5,
        },
        CollectionModifierMethodCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4'] },
                { dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 6,
        },
        CollectionMethodModifierCode: { aliasOf: 'CollectionModifierMethodCode' },
        SpecimenRole: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4'] },
                { dataType: CWE, versions: ['2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 7,
        },
    };

    static componentsByIndex = ['', 'SpecimenSourceNameOrCode', 'Additives', 'Freetext', 'BodySite', 'SiteModifier', 'CollectionModifierMethodCode', 'SpecimenRole'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SpecimenSourceNameOrCode() {
        return this.getComponent('SpecimenSourceNameOrCode');
    }

    set SpecimenSourceNameOrCode(value) {
        this.setComponentValue('SpecimenSourceNameOrCode', value);
    }

    get Additives() {
        return this.getComponent('Additives');
    }

    set Additives(value) {
        this.setComponentValue('Additives', value);
    }

    get Freetext() {
        return this.getComponent('Freetext');
    }

    set Freetext(value) {
        this.setComponentValue('Freetext', value);
    }

    get SpecimenCollectionMethod() {
        return this.getComponent('Freetext');
    }

    set SpecimenCollectionMethod(value) {
        this.setComponentValue('Freetext', value);
    }

    get BodySite() {
        return this.getComponent('BodySite');
    }

    set BodySite(value) {
        this.setComponentValue('BodySite', value);
    }

    get SiteModifier() {
        return this.getComponent('SiteModifier');
    }

    set SiteModifier(value) {
        this.setComponentValue('SiteModifier', value);
    }

    get CollectionModifierMethodCode() {
        return this.getComponent('CollectionModifierMethodCode');
    }

    set CollectionModifierMethodCode(value) {
        this.setComponentValue('CollectionModifierMethodCode', value);
    }

    get CollectionMethodModifierCode() {
        return this.getComponent('CollectionModifierMethodCode');
    }

    set CollectionMethodModifierCode(value) {
        this.setComponentValue('CollectionModifierMethodCode', value);
    }

    get SpecimenRole() {
        return this.getComponent('SpecimenRole');
    }

    set SpecimenRole(value) {
        this.setComponentValue('SpecimenRole', value);
    }
}
