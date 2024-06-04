import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CN } from './CN';
import { TS } from './TS';
import { IS } from './IS';
import { HD } from './HD';
import { ST } from './ST';

export class CM_NDL extends ComplexDataType {
    static components = {
        OpName: {
            defaultDataType: CN,
            dataTypes: [{ dataType: CN, versions: ['2.3'] }],
            position: 1,
        },
        StartDateTime: {
            defaultDataType: TS,
            dataTypes: [{ dataType: TS, versions: ['2.3'] }],
            position: 2,
        },
        EndDateTime: {
            defaultDataType: TS,
            dataTypes: [{ dataType: TS, versions: ['2.3'] }],
            position: 3,
        },
        PointOfCare: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 4,
        },
        Room: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 5,
        },
        Bed: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 6,
        },
        Facility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.3'] }],
            position: 7,
        },
        LocationStatus: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 8,
        },
        PersonLocationType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 9,
        },
        Building: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3'] }],
            position: 10,
        },
        Floor: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3'] }],
            position: 11,
        },
    };

    static componentsByIndex = ['', 'OpName', 'StartDateTime', 'EndDateTime', 'PointOfCare', 'Room', 'Bed', 'Facility', 'LocationStatus', 'PersonLocationType', 'Building', 'Floor'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get OpName() {
        return this.getComponent('OpName');
    }

    set OpName(value) {
        this.setComponentValue('OpName', value);
    }

    get StartDateTime() {
        return this.getComponent('StartDateTime');
    }

    set StartDateTime(value) {
        this.setComponentValue('StartDateTime', value);
    }

    get EndDateTime() {
        return this.getComponent('EndDateTime');
    }

    set EndDateTime(value) {
        this.setComponentValue('EndDateTime', value);
    }

    get PointOfCare() {
        return this.getComponent('PointOfCare');
    }

    set PointOfCare(value) {
        this.setComponentValue('PointOfCare', value);
    }

    get Room() {
        return this.getComponent('Room');
    }

    set Room(value) {
        this.setComponentValue('Room', value);
    }

    get Bed() {
        return this.getComponent('Bed');
    }

    set Bed(value) {
        this.setComponentValue('Bed', value);
    }

    get Facility() {
        return this.getComponent('Facility');
    }

    set Facility(value) {
        this.setComponentValue('Facility', value);
    }

    get LocationStatus() {
        return this.getComponent('LocationStatus');
    }

    set LocationStatus(value) {
        this.setComponentValue('LocationStatus', value);
    }

    get PersonLocationType() {
        return this.getComponent('PersonLocationType');
    }

    set PersonLocationType(value) {
        this.setComponentValue('PersonLocationType', value);
    }

    get Building() {
        return this.getComponent('Building');
    }

    set Building(value) {
        this.setComponentValue('Building', value);
    }

    get Floor() {
        return this.getComponent('Floor');
    }

    set Floor(value) {
        this.setComponentValue('Floor', value);
    }
}
