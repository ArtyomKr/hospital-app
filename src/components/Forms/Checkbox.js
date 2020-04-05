import React from 'react';

import cn from 'classnames';

export default class Checkbox extends React.Component {
    static defaultProps = {
        onChange: function () {}
    };

    handleChange= (e) => {
        const name = this.props.name;
        const checked = e.target.checked;
        this.props.onChange(name, checked);
    };

    render() {
        const {
            className = '',
            label = null,
            name = ''
        } = this.props;

        return(
            <div className={cn('form-group form-check', className)}>
                <input type='checkbox'
                       className='form-check-input'
                       name={name}
                       onChange={this.handleChange}
                />
                {label? (
                    <label className='form-check-label'>{label}</label>
                ): null}
            </div>
        )
    }
}