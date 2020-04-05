import React from 'react';
import './Employe.scss';
import cn from 'classnames';


export default class Event extends React.Component{
    render(){
        const {
            className = '',
            name = 'Сотрудник',
            image= '',
            birth = '',
            position = '',
            tel = '',
            email = '',
            adress = ''
        } = this.props;

        return(
            <div className={cn('employe', className)}>
                <img className='employe__img' src={process.env.PUBLIC_URL + image} alt='doctor'/>
                <div className='employe__info'>
                    <div className='employe__name'>
                        {name}
                    </div>
                    <div className='employe__details'>
                        <div className='employe__details-birth'>{birth}</div>
                        <div className='employe__details-position'>{position}</div>

                        <div className='employe__details-contacts d-flex flex-row align-items-baseline'>
                            <p className='employe__details-contacts-name '>
                                Контактная<br/> информация:
                            </p>
                            <div className='padding-left-60'>
                                <div className='employe__contacts '>{tel}</div>
                                <div className='employe__contacts'>{email}</div>
                                <div className='employe__contacts'>{adress}</div>
                            </div>

                        </div>

                    </div>


                </div>


            </div>
        )
    }
}