import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CNN } from './CNN';
import { CN } from './CN';
import { DTM } from './DTM';
import { TS } from './TS';
import { IS } from './IS';
import { HD } from './HD';

export class NDL extends ComplexDataType {
    static components = {
        Name: {
            defaultDataType: CNN,
            dataTypes: [
                { dataType: CNN, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CN, versions: ['2.3.1'] },
            ],
            position: 1,
        },
        OPName: { aliasOf: 'Name' },
        StartDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 2,
        },
        EndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: DTM, versions: ['2.8', '2.6', '2.7', '2.7.1'] },
                { dataType: TS, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
            ],
            position: 3,
        },
        PointOfCare: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        Room: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        Bed: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        Facility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
        },
        LocationStatus: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
        },
        PatientLocationType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
        PersonLocationType: { aliasOf: 'PatientLocationType' },
        Building: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
        },
        Floor: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
        },
    };

    static componentsByIndex = ['', 'Name', 'StartDateTime', 'EndDateTime', 'PointOfCare', 'Room', 'Bed', 'Facility', 'LocationStatus', 'PatientLocationType', 'Building', 'Floor'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Name() {
        return this.getComponent('Name');
    }

    set Name(value) {
        this.setComponentValue('Name', value);
    }

    get OPName() {
        return this.getComponent('Name');
    }

    set OPName(value) {
        this.setComponentValue('Name', value);
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

    get PatientLocationType() {
        return this.getComponent('PatientLocationType');
    }

    set PatientLocationType(value) {
        this.setComponentValue('PatientLocationType', value);
    }

    get PersonLocationType() {
        return this.getComponent('PatientLocationType');
    }

    set PersonLocationType(value) {
        this.setComponentValue('PatientLocationType', value);
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
