import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { HD } from './HD';
import { AD } from './AD';

export class LA1 extends ComplexDataType {
    static components = {
        PointOfCare: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        Room: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        Bed: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        Facility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        LocationStatus: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        PersonLocationType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        PatientLocationType: { aliasOf: 'PersonLocationType' },
        Building: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
        },
        Floor: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
        },
        Address: {
            defaultDataType: AD,
            dataTypes: [{ dataType: AD, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
    };

    static componentsByIndex = ['', 'PointOfCare', 'Room', 'Bed', 'Facility', 'LocationStatus', 'PersonLocationType', 'Building', 'Floor', 'Address'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
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

    get PatientLocationType() {
        return this.getComponent('PersonLocationType');
    }

    set PatientLocationType(value) {
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

    get Address() {
        return this.getComponent('Address');
    }

    set Address(value) {
        this.setComponentValue('Address', value);
    }
}
