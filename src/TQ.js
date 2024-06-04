import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CQ } from './CQ';
import { RI } from './RI';
import { ST } from './ST';
import { TS } from './TS';
import { DTM } from './DTM';
import { TX } from './TX';
import { ID } from './ID';
import { CM_OSD } from './CM_OSD';
import { OSD } from './OSD';
import { CE } from './CE';
import { CWE } from './CWE';
import { NM } from './NM';

export class TQ extends ComplexDataType {
    static components = {
        Quantity: {
            defaultDataType: CQ,
            dataTypes: [{ dataType: CQ, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 1,
        },
        Interval: {
            defaultDataType: RI,
            dataTypes: [{ dataType: RI, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 2,
        },
        Duration: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 3,
        },
        StartDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7'] },
            ],
            position: 4,
        },
        EndDateTime: {
            defaultDataType: TS,
            dataTypes: [
                { dataType: TS, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: DTM, versions: ['2.6', '2.7'] },
            ],
            position: 5,
        },
        Priority: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 6,
        },
        Condition: {
            defaultDataType: ST,
            dataTypes: [{ dataType: ST, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 7,
        },
        Text: {
            defaultDataType: TX,
            dataTypes: [{ dataType: TX, versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 8,
        },
        Conjunction: {
            defaultDataType: ID,
            dataTypes: [
                { dataType: ST, versions: ['2.3', '2.3.1'] },
                { dataType: ID, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 9,
        },
        ConjunctionComponent: { aliasOf: 'Conjunction' },
        OrderSequencing: {
            defaultDataType: OSD,
            dataTypes: [
                { dataType: CM_OSD, versions: ['2.3', '2.3.1'] },
                { dataType: OSD, versions: ['2.4', '2.5', '2.5.1', '2.6', '2.7'] },
            ],
            position: 10,
        },
        OccurrenceDuration: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CE, versions: ['2.3.1', '2.4', '2.5', '2.5.1'] },
                { dataType: CWE, versions: ['2.6', '2.7'] },
            ],
            position: 11,
        },
        TotalOccurences: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7'] }],
            position: 12,
        },
        TotalOccurrences: { aliasOf: 'TotalOccurences' },
    };

    static componentsByIndex = [
        '',
        'Quantity',
        'Interval',
        'Duration',
        'StartDateTime',
        'EndDateTime',
        'Priority',
        'Condition',
        'Text',
        'Conjunction',
        'OrderSequencing',
        'OccurrenceDuration',
        'TotalOccurences',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get Quantity() {
        return this.getComponent('Quantity');
    }

    set Quantity(value) {
        this.setComponentValue('Quantity', value);
    }

    get Interval() {
        return this.getComponent('Interval');
    }

    set Interval(value) {
        this.setComponentValue('Interval', value);
    }

    get Duration() {
        return this.getComponent('Duration');
    }

    set Duration(value) {
        this.setComponentValue('Duration', value);
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

    get Priority() {
        return this.getComponent('Priority');
    }

    set Priority(value) {
        this.setComponentValue('Priority', value);
    }

    get Condition() {
        return this.getComponent('Condition');
    }

    set Condition(value) {
        this.setComponentValue('Condition', value);
    }

    get Text() {
        return this.getComponent('Text');
    }

    set Text(value) {
        this.setComponentValue('Text', value);
    }

    get Conjunction() {
        return this.getComponent('Conjunction');
    }

    set Conjunction(value) {
        this.setComponentValue('Conjunction', value);
    }

    get ConjunctionComponent() {
        return this.getComponent('Conjunction');
    }

    set ConjunctionComponent(value) {
        this.setComponentValue('Conjunction', value);
    }

    get OrderSequencing() {
        return this.getComponent('OrderSequencing');
    }

    set OrderSequencing(value) {
        this.setComponentValue('OrderSequencing', value);
    }

    get OccurrenceDuration() {
        return this.getComponent('OccurrenceDuration');
    }

    set OccurrenceDuration(value) {
        this.setComponentValue('OccurrenceDuration', value);
    }

    get TotalOccurences() {
        return this.getComponent('TotalOccurences');
    }

    set TotalOccurences(value) {
        this.setComponentValue('TotalOccurences', value);
    }

    get TotalOccurrences() {
        return this.getComponent('TotalOccurences');
    }

    set TotalOccurrences(value) {
        this.setComponentValue('TotalOccurences', value);
    }
}
