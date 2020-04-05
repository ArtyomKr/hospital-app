import React from 'react';

import cn from 'classnames';

import DatePicker from 'react-datepicker';

import {registerLocale, setDefaultLocale} from 'react-datepicker';

import {ru} from 'date-fns/esm/locale';

import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru);
setDefaultLocale('ru');

export default class DateField extends React.Component {
    static defaultProps = {
        onChange: function () {}
    };

    handleChange= (value) => {
        const name = this.props.name;
        this.props.onChange(name, value);
    };

    render(){
        const {
            className = '',
            placeholder = '',
            label = null,
            name = '',
            value = '',
            showTimeSelect = false
        } = this.props;

        return(
            <div className={cn('form-group', className)}>
                {label? (
                    <label className='form-label'>{label}</label>
                ): null}
                <DatePicker
                    className='form-control'
                    placeholderText={[placeholder]}
                    name={name}
                    selected={value}
                    dateFormat='dd/MM/yyyy'
                    timeFormat='HH:mm'
                    showTimeSelect={showTimeSelect}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}