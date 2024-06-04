import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { SAD } from './SAD';
import { ST } from './ST';
import { ID } from './ID';
import { CWE } from './CWE';
import { IS } from './IS';
import { DR } from './DR';
import { TS } from './TS';
import { DTM } from './DTM';
import { NM } from './NM';
import { EI } from './EI';

export class XAD extends ComplexDataType {
    static components = {
        StreetAddress: {
            defaultDataType: SAD,
            dataTypes: [
                { dataType: SAD, versions: ['2.8', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: ST, versions: ['2.3', '2.3.1'] },
            ],
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
        CountyParishCode: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 9,
        },
        CensusTract: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 10,
        },
        AddressRepresentationCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 11,
        },
        AddressValidityRange: {
            defaultDataType: DR,
            dataTypes: [
                { dataType: DR, versions: ['2.4', '2.5', '2.5.1', '2.6'] },
                { dataType: ST, versions: ['2.7', '2.7.1', '2.8'] },
            ],
            position: 12,
        },
        EffectiveDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 13,
        },
        ExpirationDate: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] },
            ],
            position: 14,
        },
        ExpirationReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 15,
        },
        TemporaryIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 16,
        },
        BadAddressIndicator: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 17,
        },
        AddressUsage: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 18,
        },
        Addressee: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 19,
        },
        Comment: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 20,
        },
        PreferenceOrder: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 21,
        },
        ProtectionCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 22,
        },
        AddressIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 23,
        },
    };

    static componentsByIndex = [
        '',
        'StreetAddress',
        'OtherDesignation',
        'City',
        'StateOrProvince',
        'ZipOrPostalCode',
        'Country',
        'AddressType',
        'OtherGeographicDesignation',
        'CountyParishCode',
        'CensusTract',
        'AddressRepresentationCode',
        'AddressValidityRange',
        'EffectiveDate',
        'ExpirationDate',
        'ExpirationReason',
        'TemporaryIndicator',
        'BadAddressIndicator',
        'AddressUsage',
        'Addressee',
        'Comment',
        'PreferenceOrder',
        'ProtectionCode',
        'AddressIdentifier',
    ];

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

    get CountyParishCode() {
        return this.getComponent('CountyParishCode');
    }

    set CountyParishCode(value) {
        this.setComponentValue('CountyParishCode', value);
    }

    get CensusTract() {
        return this.getComponent('CensusTract');
    }

    set CensusTract(value) {
        this.setComponentValue('CensusTract', value);
    }

    get AddressRepresentationCode() {
        return this.getComponent('AddressRepresentationCode');
    }

    set AddressRepresentationCode(value) {
        this.setComponentValue('AddressRepresentationCode', value);
    }

    get AddressValidityRange() {
        return this.getComponent('AddressValidityRange');
    }

    set AddressValidityRange(value) {
        this.setComponentValue('AddressValidityRange', value);
    }

    get EffectiveDate() {
        return this.getComponent('EffectiveDate');
    }

    set EffectiveDate(value) {
        this.setComponentValue('EffectiveDate', value);
    }

    get ExpirationDate() {
        return this.getComponent('ExpirationDate');
    }

    set ExpirationDate(value) {
        this.setComponentValue('ExpirationDate', value);
    }

    get ExpirationReason() {
        return this.getComponent('ExpirationReason');
    }

    set ExpirationReason(value) {
        this.setComponentValue('ExpirationReason', value);
    }

    get TemporaryIndicator() {
        return this.getComponent('TemporaryIndicator');
    }

    set TemporaryIndicator(value) {
        this.setComponentValue('TemporaryIndicator', value);
    }

    get BadAddressIndicator() {
        return this.getComponent('BadAddressIndicator');
    }

    set BadAddressIndicator(value) {
        this.setComponentValue('BadAddressIndicator', value);
    }

    get AddressUsage() {
        return this.getComponent('AddressUsage');
    }

    set AddressUsage(value) {
        this.setComponentValue('AddressUsage', value);
    }

    get Addressee() {
        return this.getComponent('Addressee');
    }

    set Addressee(value) {
        this.setComponentValue('Addressee', value);
    }

    get Comment() {
        return this.getComponent('Comment');
    }

    set Comment(value) {
        this.setComponentValue('Comment', value);
    }

    get PreferenceOrder() {
        return this.getComponent('PreferenceOrder');
    }

    set PreferenceOrder(value) {
        this.setComponentValue('PreferenceOrder', value);
    }

    get ProtectionCode() {
        return this.getComponent('ProtectionCode');
    }

    set ProtectionCode(value) {
        this.setComponentValue('ProtectionCode', value);
    }

    get AddressIdentifier() {
        return this.getComponent('AddressIdentifier');
    }

    set AddressIdentifier(value) {
        this.setComponentValue('AddressIdentifier', value);
    }
}
