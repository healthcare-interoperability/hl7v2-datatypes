import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CE } from './CE';
import { TX } from './TX';

export class CM_SPS extends ComplexDataType {
    static components = {
        SpecimenSourceNameOrCode: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 1,
        },
        Additives: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.3'] }],
            position: 2,
        },
        Freetext: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.3'] }],
            position: 3,
        },
        BodySite: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 4,
        },
        SiteModifier: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 5,
        },
        CollectionModifierMethodCode: {
            defaultDataType: CE,
            dataTypes: [{ dataType: CE, versions: ['2.3'] }],
            position: 6,
        },
    };

    static componentsByIndex = ['', 'SpecimenSourceNameOrCode', 'Additives', 'Freetext', 'BodySite', 'SiteModifier', 'CollectionModifierMethodCode'];

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
}
