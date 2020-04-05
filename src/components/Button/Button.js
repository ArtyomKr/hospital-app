import React from 'react';
import cn from "classnames";

import './Button.scss';

export default class Button extends React.Component {
    static defaultProps = {
        onClick: function () {}
    };

    handleClick = () => {
        this.props.onClick();
    };

    render(){
        const {
            className = '',
            text = '',
            href = null,
            isLoading = false
        } = this.props;

        return (
            <button
                type='button'
                onClick={href? () => document.location = href : this.handleClick}
                className={cn('button', className)}
                disabled={isLoading}
            >
                {isLoading?
                    <span className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true">
                    </span>:true}
                    <span className='button-text'>{text}</span>
            </button>
        )
    }
}