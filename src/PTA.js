import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { ST } from './ST';
import { NM } from './NM';
import { MOP } from './MOP';

export class PTA extends ComplexDataType {
    static components = {
        PolicyType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        AmountClass: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
        MoneyOrPercentageQuantity: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
        },
        Amount: { aliasOf: 'MoneyOrPercentageQuantity' },
        MoneyOrPercentage: {
            defaultDataType: MOP,
            dataTypes: [{ dataType: MOP, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'PolicyType', 'AmountClass', 'MoneyOrPercentageQuantity', 'MoneyOrPercentage'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get PolicyType() {
        return this.getComponent('PolicyType');
    }

    set PolicyType(value) {
        this.setComponentValue('PolicyType', value);
    }

    get AmountClass() {
        return this.getComponent('AmountClass');
    }

    set AmountClass(value) {
        this.setComponentValue('AmountClass', value);
    }

    get MoneyOrPercentageQuantity() {
        return this.getComponent('MoneyOrPercentageQuantity');
    }

    set MoneyOrPercentageQuantity(value) {
        this.setComponentValue('MoneyOrPercentageQuantity', value);
    }

    get Amount() {
        return this.getComponent('MoneyOrPercentageQuantity');
    }

    set Amount(value) {
        this.setComponentValue('MoneyOrPercentageQuantity', value);
    }

    get MoneyOrPercentage() {
        return this.getComponent('MoneyOrPercentage');
    }

    set MoneyOrPercentage(value) {
        this.setComponentValue('MoneyOrPercentage', value);
    }
}
