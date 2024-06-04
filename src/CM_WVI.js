import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';
import { ST } from './ST';

export class CM_WVI extends ComplexDataType {
    static components = {
        ChannelNumber: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3'] }],
            position: 1,
        },
        ChannelName: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'ChannelNumber', 'ChannelName'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ChannelNumber() {
        return this.getComponent('ChannelNumber');
    }

    set ChannelNumber(value) {
        this.setComponentValue('ChannelNumber', value);
    }

    get ChannelName() {
        return this.getComponent('ChannelName');
    }

    set ChannelName(value) {
        this.setComponentValue('ChannelName', value);
    }
}
