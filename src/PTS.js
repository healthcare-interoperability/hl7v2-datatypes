import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { XCN } from './XCN';
import { TS } from './TS';

export class PTS extends ComplexDataType {
    static components = {
        AuthenticationPerson: {
            defaultDataType: XCN,
            dataTypes: [{ dataType: XCN, versions: ['2.3'] }],
            position: 1,
        },
        AuthenticationTimeStamp: {
            defaultDataType: TS,
            dataTypes: [{ dataType: TS, versions: ['2.3'] }],
            position: 2,
        },
    };

    static componentsByIndex = ['', 'AuthenticationPerson', 'AuthenticationTimeStamp'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get AuthenticationPerson() {
        return this.getComponent('AuthenticationPerson');
    }

    set AuthenticationPerson(value) {
        this.setComponentValue('AuthenticationPerson', value);
    }

    get AuthenticationTimeStamp() {
        return this.getComponent('AuthenticationTimeStamp');
    }

    set AuthenticationTimeStamp(value) {
        this.setComponentValue('AuthenticationTimeStamp', value);
    }
}
