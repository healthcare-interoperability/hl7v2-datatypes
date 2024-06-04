import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { IS } from './IS';
import { NM } from './NM';

export class MOP extends ComplexDataType {
    static components = {
        MoneyOrPercentageIndicator: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4'] },
            ],
            position: 1,
        },
        MoneyOrPercentageQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        CurrencyDenomination: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 3,
        },
        MonetaryDenomination: { aliasOf: 'CurrencyDenomination' },
    };

    static componentsByIndex = ['', 'MoneyOrPercentageIndicator', 'MoneyOrPercentageQuantity', 'CurrencyDenomination'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get MoneyOrPercentageIndicator() {
        return this.getComponent('MoneyOrPercentageIndicator');
    }

    set MoneyOrPercentageIndicator(value) {
        this.setComponentValue('MoneyOrPercentageIndicator', value);
    }

    get MoneyOrPercentageQuantity() {
        return this.getComponent('MoneyOrPercentageQuantity');
    }

    set MoneyOrPercentageQuantity(value) {
        this.setComponentValue('MoneyOrPercentageQuantity', value);
    }

    get CurrencyDenomination() {
        return this.getComponent('CurrencyDenomination');
    }

    set CurrencyDenomination(value) {
        this.setComponentValue('CurrencyDenomination', value);
    }

    get MonetaryDenomination() {
        return this.getComponent('CurrencyDenomination');
    }

    set MonetaryDenomination(value) {
        this.setComponentValue('CurrencyDenomination', value);
    }
}
