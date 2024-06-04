import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { CNE } from './CNE';
import { MO } from './MO';
import { NM } from './NM';

export class UVC extends ComplexDataType {
    static components = {
        ValueCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4'] },
                { dataType: CNE, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        ValueAmount: {
            defaultDataType: MO,
            dataTypes: [
                { dataType: MO, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3.1', '2.4'] },
            ],
            position: 2,
        },
        NonMonetaryValueAmountQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 3,
        },
        NonMonetaryValueAmountUnits: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.7', '2.7.1', '2.8'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'ValueCode', 'ValueAmount', 'NonMonetaryValueAmountQuantity', 'NonMonetaryValueAmountUnits'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ValueCode() {
        return this.getComponent('ValueCode');
    }

    set ValueCode(value) {
        this.setComponentValue('ValueCode', value);
    }

    get ValueAmount() {
        return this.getComponent('ValueAmount');
    }

    set ValueAmount(value) {
        this.setComponentValue('ValueAmount', value);
    }

    get NonMonetaryValueAmountQuantity() {
        return this.getComponent('NonMonetaryValueAmountQuantity');
    }

    set NonMonetaryValueAmountQuantity(value) {
        this.setComponentValue('NonMonetaryValueAmountQuantity', value);
    }

    get NonMonetaryValueAmountUnits() {
        return this.getComponent('NonMonetaryValueAmountUnits');
    }

    set NonMonetaryValueAmountUnits(value) {
        this.setComponentValue('NonMonetaryValueAmountUnits', value);
    }
}
