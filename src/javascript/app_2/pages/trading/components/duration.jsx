import React from 'react';
import moment from 'moment';
import InputField from './form/input_field.jsx';
import Datepicker from './form/date_picker.jsx';
import Dropdown from './form/dropdown.jsx';
import Fieldset from './elements/fieldset.jsx';
import TimePicker from './form/time_picker.jsx';
import { connect } from '../store/connect';
import { localize } from '../../../../_common/localize';

const expiry_list = [
    { text: localize('Duration'), value: 'duration' },
    { text: localize('End Time'), value: 'endtime' },
];

let min_date_duration,
    max_date_duration,
    min_date_expiry;

const Duration = ({
    expiry_type,
    expiry_time,
    duration,
    duration_unit,
    duration_units_list,
    server_time,
    onChange,
    is_nativepicker,
    is_minimized,
}) => {
    const moment_now = moment(server_time);
    if (!min_date_expiry || moment_now.date() !== min_date_expiry.date()) {
        min_date_duration = moment_now.clone().add(1, 'd');
        max_date_duration = moment_now.clone().add(365, 'd');
        min_date_expiry   = moment_now.clone();
    }
    if (is_minimized) {
        return (
            <div>Duration: {duration}</div>
        );
    }
    return (
        <Fieldset
            time={server_time}
            header={localize('Trade Duration')}
            icon='trade-duration'
            tooltip={localize('Text for Duration goes here.')}
        >
            <Dropdown
                list={expiry_list}
                value={expiry_type}
                name='expiry_type'
                onChange={onChange}
                is_nativepicker={is_nativepicker}
            />

            {expiry_type === 'duration' ?
                <React.Fragment>
                    <div className='duration-container'>
                        {duration_unit === 'd' ?
                            <Datepicker
                                name='duration'
                                minDate={min_date_duration}
                                maxDate={max_date_duration}
                                displayFormat='d'
                                onChange={onChange}
                                is_nativepicker={is_nativepicker}
                            /> :
                            <InputField
                                type='number'
                                name='duration'
                                value={duration}
                                onChange={onChange}
                            />
                        }
                        <Dropdown
                            list={duration_units_list}
                            value={duration_unit}
                            name='duration_unit'
                            onChange={onChange}
                            is_nativepicker={is_nativepicker}
                        />
                    </div>
                </React.Fragment> :
                <React.Fragment>
                    <Datepicker
                        name='expiry_date'
                        showTodayBtn
                        minDate={min_date_expiry}
                        onChange={onChange}
                        is_nativepicker={is_nativepicker}
                    />
                    <TimePicker
                        onChange={onChange}
                        name='expiry_time'
                        value={expiry_time}
                        placeholder='12:00 pm'
                        is_nativepicker={is_nativepicker}
                    />
                </React.Fragment>
            }
        </Fieldset>
    );
};

export default connect(
    ({trade}) => ({
        expiry_type        : trade.expiry_type,
        expiry_time        : trade.expiry_time,
        duration           : trade.duration,
        duration_unit      : trade.duration_unit,
        duration_units_list: trade.duration_units_list,
        server_time        : trade.server_time,
        onChange           : trade.handleChange,
    })
)(Duration);