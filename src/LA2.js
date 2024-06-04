import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { IS } from './IS';
import { HD } from './HD';
import { ST } from './ST';
import { ID } from './ID';

export class LA2 extends ComplexDataType {
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
        StreetAddress: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
        OtherDesignation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 10,
        },
        City: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
        },
        StateOrProvince: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 12,
        },
        ZipOrPostalCode: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 13,
        },
        Country: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 14,
        },
        AddressType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 15,
        },
        OtherGeographicDesignation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 16,
        },
    };

    static componentsByIndex = [
        '',
        'PointOfCare',
        'Room',
        'Bed',
        'Facility',
        'LocationStatus',
        'PersonLocationType',
        'Building',
        'Floor',
        'StreetAddress',
        'OtherDesignation',
        'City',
        'StateOrProvince',
        'ZipOrPostalCode',
        'Country',
        'AddressType',
        'OtherGeographicDesignation',
    ];

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

    get StreetAddress() {
        return this.getComponent('StreetAddress');
    }

    set StreetAddress(value) {
        this.setComponentValue('StreetAddress', value);
    }

    get OtherDesignation() {
        return this.getComponent('OtherDesignation');
    }

    set OtherDesignation(value) {
        this.setComponentValue('OtherDesignation', value);
    }

    get City() {
        return this.getComponent('City');
    }

    set City(value) {
        this.setComponentValue('City', value);
    }

    get StateOrProvince() {
        return this.getComponent('StateOrProvince');
    }

    set StateOrProvince(value) {
        this.setComponentValue('StateOrProvince', value);
    }

    get ZipOrPostalCode() {
        return this.getComponent('ZipOrPostalCode');
    }

    set ZipOrPostalCode(value) {
        this.setComponentValue('ZipOrPostalCode', value);
    }

    get Country() {
        return this.getComponent('Country');
    }

    set Country(value) {
        this.setComponentValue('Country', value);
    }

    get AddressType() {
        return this.getComponent('AddressType');
    }

    set AddressType(value) {
        this.setComponentValue('AddressType', value);
    }

    get OtherGeographicDesignation() {
        return this.getComponent('OtherGeographicDesignation');
    }

    set OtherGeographicDesignation(value) {
        this.setComponentValue('OtherGeographicDesignation', value);
    }
}
