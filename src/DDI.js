import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';
import { MO } from './MO';

export class DDI extends ComplexDataType {
    static components = {
        DelayDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        MonetaryAmount: {
            defaultDataType: MO,
            dataTypes: [
                { dataType: MO, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3.1', '2.4'] },
            ],
            position: 2,
        },
        Amount: { aliasOf: 'MonetaryAmount' },
        NumberOfDays: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'DelayDays', 'MonetaryAmount', 'NumberOfDays'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get DelayDays() {
        return this.getComponent('DelayDays');
    }

    set DelayDays(value) {
        this.setComponentValue('DelayDays', value);
    }

    get MonetaryAmount() {
        return this.getComponent('MonetaryAmount');
    }

    set MonetaryAmount(value) {
        this.setComponentValue('MonetaryAmount', value);
    }

    get Amount() {
        return this.getComponent('MonetaryAmount');
    }

    set Amount(value) {
        this.setComponentValue('MonetaryAmount', value);
    }

    get NumberOfDays() {
        return this.getComponent('NumberOfDays');
    }

    set NumberOfDays(value) {
        this.setComponentValue('NumberOfDays', value);
    }
}
