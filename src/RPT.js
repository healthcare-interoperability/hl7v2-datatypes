import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { CWE } from './CWE';
import { ID } from './ID';
import { NM } from './NM';
import { IS } from './IS';
import { GTS } from './GTS';

export class RPT extends ComplexDataType {
    static components = {
        RepeatPatternCode: {
            defaultDataType: CWE,
            dataTypes: [{ dataType: CWE, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        CalendarAlignment: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        PhaseRangeBeginValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
        PhaseRangeEndValue: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 4,
        },
        PeriodQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        PeriodUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 6,
        },
        InstitutionSpecifiedTime: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 7,
        },
        Event: {
            defaultDataType: ID,
            dataTypes: [{ dataType: ID, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 8,
        },
        EventOffsetQuantity: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 9,
        },
        EventOffsetUnits: {
            defaultDataType: CWE,
            dataTypes: [
                { dataType: CWE, versions: ['2.8', '2.7', '2.7.1'] },
                { dataType: IS, versions: ['2.5', '2.5.1', '2.6'] },
            ],
            position: 10,
        },
        GeneralTimingSpecification: {
            defaultDataType: GTS,
            dataTypes: [{ dataType: GTS, versions: ['2.8', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 11,
        },
    };

    static componentsByIndex = [
        '',
        'RepeatPatternCode',
        'CalendarAlignment',
        'PhaseRangeBeginValue',
        'PhaseRangeEndValue',
        'PeriodQuantity',
        'PeriodUnits',
        'InstitutionSpecifiedTime',
        'Event',
        'EventOffsetQuantity',
        'EventOffsetUnits',
        'GeneralTimingSpecification',
    ];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get RepeatPatternCode() {
        return this.getComponent('RepeatPatternCode');
    }

    set RepeatPatternCode(value) {
        this.setComponentValue('RepeatPatternCode', value);
    }

    get CalendarAlignment() {
        return this.getComponent('CalendarAlignment');
    }

    set CalendarAlignment(value) {
        this.setComponentValue('CalendarAlignment', value);
    }

    get PhaseRangeBeginValue() {
        return this.getComponent('PhaseRangeBeginValue');
    }

    set PhaseRangeBeginValue(value) {
        this.setComponentValue('PhaseRangeBeginValue', value);
    }

    get PhaseRangeEndValue() {
        return this.getComponent('PhaseRangeEndValue');
    }

    set PhaseRangeEndValue(value) {
        this.setComponentValue('PhaseRangeEndValue', value);
    }

    get PeriodQuantity() {
        return this.getComponent('PeriodQuantity');
    }

    set PeriodQuantity(value) {
        this.setComponentValue('PeriodQuantity', value);
    }

    get PeriodUnits() {
        return this.getComponent('PeriodUnits');
    }

    set PeriodUnits(value) {
        this.setComponentValue('PeriodUnits', value);
    }

    get InstitutionSpecifiedTime() {
        return this.getComponent('InstitutionSpecifiedTime');
    }

    set InstitutionSpecifiedTime(value) {
        this.setComponentValue('InstitutionSpecifiedTime', value);
    }

    get Event() {
        return this.getComponent('Event');
    }

    set Event(value) {
        this.setComponentValue('Event', value);
    }

    get EventOffsetQuantity() {
        return this.getComponent('EventOffsetQuantity');
    }

    set EventOffsetQuantity(value) {
        this.setComponentValue('EventOffsetQuantity', value);
    }

    get EventOffsetUnits() {
        return this.getComponent('EventOffsetUnits');
    }

    set EventOffsetUnits(value) {
        this.setComponentValue('EventOffsetUnits', value);
    }

    get GeneralTimingSpecification() {
        return this.getComponent('GeneralTimingSpecification');
    }

    set GeneralTimingSpecification(value) {
        this.setComponentValue('GeneralTimingSpecification', value);
    }
}
