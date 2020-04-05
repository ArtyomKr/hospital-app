import React from 'react';
import './Event.scss'
import cn from 'classnames';

export default class Event extends React.Component{
    render(){
        const {
            className = '',
            title = 'Событие',
            date = '',
            time = '',
            place = '',
            from = '',
            text = 'Новое событие'
        } = this.props;
        return(
            <div className={cn('event', className)}>

                <div className='event__header'>
                    <div className='event__header__title'>
                        {title}
                     </div>

                    <div className='event__header__details'>
                        <div className='event__header__details__item'>Дата:<br/> {date}</div>
                        <div className='event__header__details__item'>Время:<br/> {time}</div>
                        <div className='event__header__details__item'>Место:<br/> {place}</div>
                        <div className='event__header__details__item'>От кого:<br/> {from}</div>
                    </div>
                </div>

                <div className='event__body'>
                    <p >{text}</p>
                </div>
            </div>
        )
    }
}

