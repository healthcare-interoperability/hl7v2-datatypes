import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { IS } from './IS';
import { ST } from './ST';
import { NM } from './NM';
import { MOP } from './MOP';

export class RMC extends ComplexDataType {
    static components = {
        RoomType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        AmountType: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
        CoverageAmount: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
        },
        MoneyOrPercentage: {
            defaultDataType: MOP,
            dataTypes: [{ dataType: MOP, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'RoomType', 'AmountType', 'CoverageAmount', 'MoneyOrPercentage'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get RoomType() {
        return this.getComponent('RoomType');
    }

    set RoomType(value) {
        this.setComponentValue('RoomType', value);
    }

    get AmountType() {
        return this.getComponent('AmountType');
    }

    set AmountType(value) {
        this.setComponentValue('AmountType', value);
    }

    get CoverageAmount() {
        return this.getComponent('CoverageAmount');
    }

    set CoverageAmount(value) {
        this.setComponentValue('CoverageAmount', value);
    }

    get MoneyOrPercentage() {
        return this.getComponent('MoneyOrPercentage');
    }

    set MoneyOrPercentage(value) {
        this.setComponentValue('MoneyOrPercentage', value);
    }
}
