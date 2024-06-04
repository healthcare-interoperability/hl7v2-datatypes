import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';

export class MA extends ComplexDataType {
    static components = {
        SampleYFromChannel1: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Sample1FromChannel1: { aliasOf: 'SampleYFromChannel1' },
        SampleYFromChannel2: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        Sample1FromChannel2: { aliasOf: 'SampleYFromChannel2' },
        SampleYFromChannel3: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        Sample1FromChannel3: { aliasOf: 'SampleYFromChannel3' },
        Sample1FromChannelN: { aliasOf: 'SampleYFromChannel3' },
        SampleYFromChannel4: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        Sample2FromChannel1: { aliasOf: 'SampleYFromChannel4' },
        Sample1FromChannel4: { aliasOf: 'SampleYFromChannel4' },
    };

    static componentsByIndex = ['', 'SampleYFromChannel1', 'SampleYFromChannel2', 'SampleYFromChannel3', 'SampleYFromChannel4'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get SampleYFromChannel1() {
        return this.getComponent('SampleYFromChannel1');
    }

    set SampleYFromChannel1(value) {
        this.setComponentValue('SampleYFromChannel1', value);
    }

    get Sample1FromChannel1() {
        return this.getComponent('SampleYFromChannel1');
    }

    set Sample1FromChannel1(value) {
        this.setComponentValue('SampleYFromChannel1', value);
    }

    get SampleYFromChannel2() {
        return this.getComponent('SampleYFromChannel2');
    }

    set SampleYFromChannel2(value) {
        this.setComponentValue('SampleYFromChannel2', value);
    }

    get Sample1FromChannel2() {
        return this.getComponent('SampleYFromChannel2');
    }

    set Sample1FromChannel2(value) {
        this.setComponentValue('SampleYFromChannel2', value);
    }

    get SampleYFromChannel3() {
        return this.getComponent('SampleYFromChannel3');
    }

    set SampleYFromChannel3(value) {
        this.setComponentValue('SampleYFromChannel3', value);
    }

    get Sample1FromChannel3() {
        return this.getComponent('SampleYFromChannel3');
    }

    set Sample1FromChannel3(value) {
        this.setComponentValue('SampleYFromChannel3', value);
    }

    get Sample1FromChannelN() {
        return this.getComponent('SampleYFromChannel3');
    }

    set Sample1FromChannelN(value) {
        this.setComponentValue('SampleYFromChannel3', value);
    }

    get SampleYFromChannel4() {
        return this.getComponent('SampleYFromChannel4');
    }

    set SampleYFromChannel4(value) {
        this.setComponentValue('SampleYFromChannel4', value);
    }

    get Sample2FromChannel1() {
        return this.getComponent('SampleYFromChannel4');
    }

    set Sample2FromChannel1(value) {
        this.setComponentValue('SampleYFromChannel4', value);
    }

    get Sample1FromChannel4() {
        return this.getComponent('SampleYFromChannel4');
    }

    set Sample1FromChannel4(value) {
        this.setComponentValue('SampleYFromChannel4', value);
    }
}
