import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { HD } from './HD';
import { IS } from './IS';
import { ST } from './ST';
import { EI } from './EI';

export class PL extends ComplexDataType {
    static components = {
        PointOfCare: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 1,
        },
        Room: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 2,
        },
        Bed: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 3,
        },
        Facility: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        LocationStatus: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        PersonLocationType: {
            defaultDataType: IS,
            dataTypes: [{ dataType: IS, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 6,
        },
        Building: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 7,
        },
        Floor: {
            defaultDataType: HD,
            dataTypes: [
                { dataType: HD, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6'] },
            ],
            position: 8,
        },
        LocationDescription: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
        LocationType: { aliasOf: 'LocationDescription' },
        ComprehensiveLocationIdentifier: {
            defaultDataType: EI,
            dataTypes: [{ dataType: EI, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 10,
        },
        AssigningAuthorityForLocation: {
            defaultDataType: HD,
            dataTypes: [{ dataType: HD, versions: ['2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8'] }],
            position: 11,
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
        'LocationDescription',
        'ComprehensiveLocationIdentifier',
        'AssigningAuthorityForLocation',
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

    get LocationDescription() {
        return this.getComponent('LocationDescription');
    }

    set LocationDescription(value) {
        this.setComponentValue('LocationDescription', value);
    }

    get LocationType() {
        return this.getComponent('LocationDescription');
    }

    set LocationType(value) {
        this.setComponentValue('LocationDescription', value);
    }

    get ComprehensiveLocationIdentifier() {
        return this.getComponent('ComprehensiveLocationIdentifier');
    }

    set ComprehensiveLocationIdentifier(value) {
        this.setComponentValue('ComprehensiveLocationIdentifier', value);
    }

    get AssigningAuthorityForLocation() {
        return this.getComponent('AssigningAuthorityForLocation');
    }

    set AssigningAuthorityForLocation(value) {
        this.setComponentValue('AssigningAuthorityForLocation', value);
    }
}
