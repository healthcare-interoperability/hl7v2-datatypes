import { PrimitiveDataType } from '@healthcare-interoperability/hl7v2-core';

export class ID extends PrimitiveDataType {
    static components = {};

    static componentsByIndex = [''];

    constructor(value, configs, isSubComponent = false) {
        super(value, configs, isSubComponent);
    }
}
