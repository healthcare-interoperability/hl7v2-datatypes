import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ID } from './ID';
import { TM } from './TM';

export class VH extends ComplexDataType {
    static components = {
        StartDayRange: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        EndDayRange: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        StartHourRange: {
            defaultDataType: TM,
            dataTypes: [{ dataType: TM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        EndHourRange: {
            defaultDataType: TM,
            dataTypes: [{ dataType: TM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
    };

    static componentsByIndex = ['', 'StartDayRange', 'EndDayRange', 'StartHourRange', 'EndHourRange'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get StartDayRange() {
        return this.getComponent('StartDayRange');
    }

    set StartDayRange(value) {
        this.setComponentValue('StartDayRange', value);
    }

    get EndDayRange() {
        return this.getComponent('EndDayRange');
    }

    set EndDayRange(value) {
        this.setComponentValue('EndDayRange', value);
    }

    get StartHourRange() {
        return this.getComponent('StartHourRange');
    }

    set StartHourRange(value) {
        this.setComponentValue('StartHourRange', value);
    }

    get EndHourRange() {
        return this.getComponent('EndHourRange');
    }

    set EndHourRange(value) {
        this.setComponentValue('EndHourRange', value);
    }
}
