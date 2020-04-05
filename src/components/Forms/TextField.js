import React from 'react';

import cn from 'classnames';

export default class TextField extends React.Component {
    static defaultProps = {
        onChange: function () {}
    };

    handleChange= (e) => {
        const name = this.props.name;
        const value = e.target.value;
        this.props.onChange(name, value);
    };

    render (){
        let {
            className = '',
            placeholder= '',
            label = null,
            name = '',
            value = '',
            type = 'text',
            invalidInput = null
        } = this.props;

        if (invalidInput){
            label = invalidInput.message;
            className = cn(className, 'not-valid')
        }

        return (
            <div className={cn('form-group', className )}>
                {label? (
                    <label className="form-label">{label}</label>
                ): null}
                <input type={type}
                       className='form-control'
                       placeholder={placeholder}
                       name={name}
                       value={value}
                       onChange={this.handleChange}
                />
            </div>
        )
    }
}