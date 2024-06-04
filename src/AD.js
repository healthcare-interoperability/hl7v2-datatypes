import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { ID } from './ID';

export class AD extends ComplexDataType {
    static components = {
        StreetAddress: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        OtherDesignation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        City: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        StateOrProvince: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        ZipOrPostalCode: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        Country: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        AddressType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
        },
        OtherGeographicDesignation: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
        },
    };

    static componentsByIndex = ['', 'StreetAddress', 'OtherDesignation', 'City', 'StateOrProvince', 'ZipOrPostalCode', 'Country', 'AddressType', 'OtherGeographicDesignation'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
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
