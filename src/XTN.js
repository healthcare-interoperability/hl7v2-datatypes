import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';
import { TN } from './TN';
import { ID } from './ID';
import { SNM } from './SNM';
import { NM } from './NM';
import { DTM } from './DTM';
import { CWE } from './CWE';
import { EI } from './EI';

export class XTN extends ComplexDataType {
    static components = {
        TelephoneNumber: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: ST, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: TN, versions: ['2.3', '2.3.1', '2.4'] },
            ],
            position: 1,
        },
        TelecommunicationUseCode: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        TelecommunicationEquipmentType: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        CommunicationAddress: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        EmailAddress: { aliasOf: 'CommunicationAddress' },
        CountryCode: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: SNM, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 5,
        },
        AreaCityCode: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: SNM, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
        },
        LocalNumber: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: SNM, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 7,
        },
        PhoneNumber: { aliasOf: 'LocalNumber' },
        Extension: {
            defaultDataType: ST,
            dataTypes: [
                { dataType: SNM, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: NM, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
        },
        AnyText: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
        ExtensionPrefix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 10,
        },
        SpeedDialCode: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 11,
        },
        UnformattedTelephoneNumber: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 12,
        },
        EffectiveStartDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 13,
        },
        ExpirationDate: {
            defaultDataType: DTM,
            dataTypes: [{ dataType: DTM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 14,
        },
        ExpirationReason: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 15,
        },
        ProtectionCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 16,
        },
        SharedTelecommunicationIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 17,
        },
        PreferenceOrder: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.6', '2.7', '2.7.1', '2.8'] }],
            position: 18,
        },
    };

    static componentsByIndex = [
        '',
        'TelephoneNumber',
        'TelecommunicationUseCode',
        'TelecommunicationEquipmentType',
        'CommunicationAddress',
        'CountryCode',
        'AreaCityCode',
        'LocalNumber',
        'Extension',
        'AnyText',
        'ExtensionPrefix',
        'SpeedDialCode',
        'UnformattedTelephoneNumber',
        'EffectiveStartDate',
        'ExpirationDate',
        'ExpirationReason',
        'ProtectionCode',
        'SharedTelecommunicationIdentifier',
        'PreferenceOrder',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get TelephoneNumber() {
        return this.getComponent('TelephoneNumber');
    }

    set TelephoneNumber(value) {
        this.setComponentValue('TelephoneNumber', value);
    }

    get TelecommunicationUseCode() {
        return this.getComponent('TelecommunicationUseCode');
    }

    set TelecommunicationUseCode(value) {
        this.setComponentValue('TelecommunicationUseCode', value);
    }

    get TelecommunicationEquipmentType() {
        return this.getComponent('TelecommunicationEquipmentType');
    }

    set TelecommunicationEquipmentType(value) {
        this.setComponentValue('TelecommunicationEquipmentType', value);
    }

    get CommunicationAddress() {
        return this.getComponent('CommunicationAddress');
    }

    set CommunicationAddress(value) {
        this.setComponentValue('CommunicationAddress', value);
    }

    get EmailAddress() {
        return this.getComponent('CommunicationAddress');
    }

    set EmailAddress(value) {
        this.setComponentValue('CommunicationAddress', value);
    }

    get CountryCode() {
        return this.getComponent('CountryCode');
    }

    set CountryCode(value) {
        this.setComponentValue('CountryCode', value);
    }

    get AreaCityCode() {
        return this.getComponent('AreaCityCode');
    }

    set AreaCityCode(value) {
        this.setComponentValue('AreaCityCode', value);
    }

    get LocalNumber() {
        return this.getComponent('LocalNumber');
    }

    set LocalNumber(value) {
        this.setComponentValue('LocalNumber', value);
    }

    get PhoneNumber() {
        return this.getComponent('LocalNumber');
    }

    set PhoneNumber(value) {
        this.setComponentValue('LocalNumber', value);
    }

    get Extension() {
        return this.getComponent('Extension');
    }

    set Extension(value) {
        this.setComponentValue('Extension', value);
    }

    get AnyText() {
        return this.getComponent('AnyText');
    }

    set AnyText(value) {
        this.setComponentValue('AnyText', value);
    }

    get ExtensionPrefix() {
        return this.getComponent('ExtensionPrefix');
    }

    set ExtensionPrefix(value) {
        this.setComponentValue('ExtensionPrefix', value);
    }

    get SpeedDialCode() {
        return this.getComponent('SpeedDialCode');
    }

    set SpeedDialCode(value) {
        this.setComponentValue('SpeedDialCode', value);
    }

    get UnformattedTelephoneNumber() {
        return this.getComponent('UnformattedTelephoneNumber');
    }

    set UnformattedTelephoneNumber(value) {
        this.setComponentValue('UnformattedTelephoneNumber', value);
    }

    get EffectiveStartDate() {
        return this.getComponent('EffectiveStartDate');
    }

    set EffectiveStartDate(value) {
        this.setComponentValue('EffectiveStartDate', value);
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

    get ProtectionCode() {
        return this.getComponent('ProtectionCode');
    }

    set ProtectionCode(value) {
        this.setComponentValue('ProtectionCode', value);
    }

    get SharedTelecommunicationIdentifier() {
        return this.getComponent('SharedTelecommunicationIdentifier');
    }

    set SharedTelecommunicationIdentifier(value) {
        this.setComponentValue('SharedTelecommunicationIdentifier', value);
    }

    get PreferenceOrder() {
        return this.getComponent('PreferenceOrder');
    }

    set PreferenceOrder(value) {
        this.setComponentValue('PreferenceOrder', value);
    }
}
