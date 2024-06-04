import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { ST } from './ST';

export class FN extends ComplexDataType {
    static components = {
        Surname: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        FamilyName: { aliasOf: 'Surname' },
        OwnSurnamePrefix: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        LastNamePrefix: { aliasOf: 'OwnSurnamePrefix' },
        OwnSurname: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 3,
        },
        SurnamePrefixFromPartnerSpouse: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 4,
        },
        SurnameFromPartnerSpouse: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 5,
        },
    };

    static componentsByIndex = ['', 'Surname', 'OwnSurnamePrefix', 'OwnSurname', 'SurnamePrefixFromPartnerSpouse', 'SurnameFromPartnerSpouse'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Surname() {
        return this.getComponent('Surname');
    }

    set Surname(value) {
        this.setComponentValue('Surname', value);
    }

    get FamilyName() {
        return this.getComponent('Surname');
    }

    set FamilyName(value) {
        this.setComponentValue('Surname', value);
    }

    get OwnSurnamePrefix() {
        return this.getComponent('OwnSurnamePrefix');
    }

    set OwnSurnamePrefix(value) {
        this.setComponentValue('OwnSurnamePrefix', value);
    }

    get LastNamePrefix() {
        return this.getComponent('OwnSurnamePrefix');
    }

    set LastNamePrefix(value) {
        this.setComponentValue('OwnSurnamePrefix', value);
    }

    get OwnSurname() {
        return this.getComponent('OwnSurname');
    }

    set OwnSurname(value) {
        this.setComponentValue('OwnSurname', value);
    }

    get SurnamePrefixFromPartnerSpouse() {
        return this.getComponent('SurnamePrefixFromPartnerSpouse');
    }

    set SurnamePrefixFromPartnerSpouse(value) {
        this.setComponentValue('SurnamePrefixFromPartnerSpouse', value);
    }

    get SurnameFromPartnerSpouse() {
        return this.getComponent('SurnameFromPartnerSpouse');
    }

    set SurnameFromPartnerSpouse(value) {
        this.setComponentValue('SurnameFromPartnerSpouse', value);
    }
}
