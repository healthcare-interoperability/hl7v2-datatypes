import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { WVI } from './WVI';
import { CM_WVI } from './CM_WVI';
import { WVS } from './WVS';
import { CM_CD_ELECTRODE } from './CM_CD_ELECTRODE';
import { CSU } from './CSU';
import { CM_CSU } from './CM_CSU';
import { CCP } from './CCP';
import { CM_CCP } from './CM_CCP';
import { NM } from './NM';
import { NR } from './NR';
import { CM_MDV } from './CM_MDV';

export class CD extends ComplexDataType {
    static components = {
        ChannelIdentifier: {
            defaultDataType: WVI,
            dataTypes: [
                { dataType: WVI, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_WVI, versions: ['2.3'] },
            ],
            position: 1,
        },
        WaveformSource: {
            defaultDataType: WVS,
            dataTypes: [
                { dataType: WVS, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_CD_ELECTRODE, versions: ['2.3'] },
            ],
            position: 2,
        },
        ChannelSensitivityAndUnits: {
            defaultDataType: CSU,
            dataTypes: [
                { dataType: CSU, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_CSU, versions: ['2.3'] },
            ],
            position: 3,
        },
        ChannelSensitivityUnits: { aliasOf: 'ChannelSensitivityAndUnits' },
        ChannelCalibrationParameters: {
            defaultDataType: CCP,
            dataTypes: [
                { dataType: CCP, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_CCP, versions: ['2.3'] },
            ],
            position: 4,
        },
        CalibrationParameters: { aliasOf: 'ChannelCalibrationParameters' },
        ChannelSamplingFrequency: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 5,
        },
        SamplingFrequency: { aliasOf: 'ChannelSamplingFrequency' },
        MinimumAndMaximumDataValues: {
            defaultDataType: NR,
            dataTypes: [
                { dataType: NR, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] },
                { dataType: CM_MDV, versions: ['2.3'] },
            ],
            position: 6,
        },
        MinimumMaximumDataValues: { aliasOf: 'MinimumAndMaximumDataValues' },
    };

    static componentsByIndex = ['', 'ChannelIdentifier', 'WaveformSource', 'ChannelSensitivityAndUnits', 'ChannelCalibrationParameters', 'ChannelSamplingFrequency', 'MinimumAndMaximumDataValues'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ChannelIdentifier() {
        return this.getComponent('ChannelIdentifier');
    }

    set ChannelIdentifier(value) {
        this.setComponentValue('ChannelIdentifier', value);
    }

    get WaveformSource() {
        return this.getComponent('WaveformSource');
    }

    set WaveformSource(value) {
        this.setComponentValue('WaveformSource', value);
    }

    get ChannelSensitivityAndUnits() {
        return this.getComponent('ChannelSensitivityAndUnits');
    }

    set ChannelSensitivityAndUnits(value) {
        this.setComponentValue('ChannelSensitivityAndUnits', value);
    }

    get ChannelSensitivityUnits() {
        return this.getComponent('ChannelSensitivityAndUnits');
    }

    set ChannelSensitivityUnits(value) {
        this.setComponentValue('ChannelSensitivityAndUnits', value);
    }

    get ChannelCalibrationParameters() {
        return this.getComponent('ChannelCalibrationParameters');
    }

    set ChannelCalibrationParameters(value) {
        this.setComponentValue('ChannelCalibrationParameters', value);
    }

    get CalibrationParameters() {
        return this.getComponent('ChannelCalibrationParameters');
    }

    set CalibrationParameters(value) {
        this.setComponentValue('ChannelCalibrationParameters', value);
    }

    get ChannelSamplingFrequency() {
        return this.getComponent('ChannelSamplingFrequency');
    }

    set ChannelSamplingFrequency(value) {
        this.setComponentValue('ChannelSamplingFrequency', value);
    }

    get SamplingFrequency() {
        return this.getComponent('ChannelSamplingFrequency');
    }

    set SamplingFrequency(value) {
        this.setComponentValue('ChannelSamplingFrequency', value);
    }

    get MinimumAndMaximumDataValues() {
        return this.getComponent('MinimumAndMaximumDataValues');
    }

    set MinimumAndMaximumDataValues(value) {
        this.setComponentValue('MinimumAndMaximumDataValues', value);
    }

    get MinimumMaximumDataValues() {
        return this.getComponent('MinimumAndMaximumDataValues');
    }

    set MinimumMaximumDataValues(value) {
        this.setComponentValue('MinimumAndMaximumDataValues', value);
    }
}
