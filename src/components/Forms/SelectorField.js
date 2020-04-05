import React from 'react';

import cn from 'classnames';

export default class SelectorField extends React.Component {
    static defaultProps = {
        onChange: function () {}
    };

    handleChange= (e) => {
        const name = this.props.name;
        const value = e.target.value;
        this.props.onChange(name, value);
    };

    render (){
        const {
            className = '',
            label = null,
            name = '',
            value = '',
            options
        } = this.props;

        return (
            <div className={cn('form-group', className )}>
                {label? (
                    <label className="form-label">{label}</label>
                ): null}
                <select
                       className='form-control'
                       name={name}
                       value={value}
                       onChange={this.handleChange}>
                    {options.map(o => <option id={o.value} key={o.value} value={o.value}>{o.text}</option>)}
                </select>
            </div>
        )
    }
}