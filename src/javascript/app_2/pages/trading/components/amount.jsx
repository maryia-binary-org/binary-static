import React from 'react';
import Dropdown from './form/dropdown.jsx';
import Fieldset from './elements/fieldset.jsx';
import InputField from './form/input_field.jsx';
import Client from '../../../../app/base/client';
import { connect } from '../store/connect';
import { localize } from '../../../../_common/localize';

const basis_list = [
    { text: localize('Payout'), value: 'payout' },
    { text: localize('Stake'),  value: 'stake' },
];

const Amount = ({
    basis,
    currency,
    currencies_list,
    amount,
    onChange,
    is_minimized,
    is_nativepicker,
}) => {
    if (is_minimized) {
        return (
            <div>Amount: {amount}</div>
        );
    }
    return (
        <Fieldset
            header={localize('Invest Amount')}
            icon='invest-amount'
            tooltip={localize('Text for Invest Amount goes here.')}
        >
            <div className='amount-container'>
                <Dropdown
                    list={basis_list}
                    value={basis}
                    name='basis'
                    onChange={onChange}
                    is_nativepicker={is_nativepicker}
                />
                <InputField
                    type='number'
                    name='amount'
                    value={amount}
                    onChange={onChange}
                    is_currency
                    prefix={currency}
                />
            </div>

            {!Client.get('currency') &&
                <Dropdown
                    list={currencies_list}
                    value={currency}
                    name='currency'
                    onChange={onChange}
                    is_nativepicker={is_nativepicker}
                />
            }
        </Fieldset>
    );
};

export default connect(
    ({trade}) => ({
        basis          : trade.basis,
        currency       : trade.currency,
        currencies_list: trade.currencies_list,
        amount         : trade.amount,
        onChange       : trade.handleChange,
    })
)(Amount);
