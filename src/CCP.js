import { ComplexDataType } from '@healthcare-interoperability/hl7v2-core';
import { NM } from './NM';

export class CCP extends ComplexDataType {
    static components = {
        ChannelCalibrationSensitivityCorrectionFactor: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 1,
        },
        ChannelCalibrationBaseline: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 2,
        },
        ChannelCalibrationTimeSkew: {
            defaultDataType: NM,
            dataTypes: [{ dataType: NM, versions: ['2.8', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1'] }],
            position: 3,
        },
    };

    static componentsByIndex = ['', 'ChannelCalibrationSensitivityCorrectionFactor', 'ChannelCalibrationBaseline', 'ChannelCalibrationTimeSkew'];

    constructor(values, configs, isSubComponent = false) {
        super(values, configs, isSubComponent);
    }

    get ChannelCalibrationSensitivityCorrectionFactor() {
        return this.getComponent('ChannelCalibrationSensitivityCorrectionFactor');
    }

    set ChannelCalibrationSensitivityCorrectionFactor(value) {
        this.setComponentValue('ChannelCalibrationSensitivityCorrectionFactor', value);
    }

    get ChannelCalibrationBaseline() {
        return this.getComponent('ChannelCalibrationBaseline');
    }

    set ChannelCalibrationBaseline(value) {
        this.setComponentValue('ChannelCalibrationBaseline', value);
    }

    get ChannelCalibrationTimeSkew() {
        return this.getComponent('ChannelCalibrationTimeSkew');
    }

    set ChannelCalibrationTimeSkew(value) {
        this.setComponentValue('ChannelCalibrationTimeSkew', value);
    }
}
