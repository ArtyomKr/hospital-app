import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header.js';

import { ReactComponent as Medicine } from '../../images/Icons/medicine.svg';
import { ReactComponent as Calendar } from '../../images/Icons/calendar.svg';
import { ReactComponent as Star } from '../../images/Icons/star.svg';
import { ReactComponent as Speaker } from '../../images/Icons/speaker.svg';
import { ReactComponent as Chat } from '../../images/Icons/chat.svg';
import { ReactComponent as Baby } from '../../images/Icons/baby.svg';
import { ReactComponent as Doctor } from '../../images/Icons/doctor.svg';

import './Home.scss';

const SECTIONS = [
    {title:'Приёмы', Icon: Calendar, href:'/appointments', isActive: true},
    {title:'События', Icon: Star, href:'/events', isActive: true},
    {title:'Оповещения', Icon: Speaker, href:'/notifications', isActive: false},
    {title:'Сообщения', Icon: Chat, href:'/messages', isActive: false},
    {title:'Пациенты', Icon: Baby, href:'/clients', isActive: false},
    {title:'Сотрудники', Icon: Doctor, href:'/employees', isActive: true}
];
const TITLE = 'Домашняя';

class Home extends React.Component {
    render() {
        const NAV_SECTIONS = SECTIONS.map(section => {
            let Icon = section.Icon;
            let isActive = section.isActive;
            let title = section.title;
            if (isActive) {
                return(
                    <Link className='section-navigation-item' key={title} to={section.href}>
                        <Icon className='section-navigation-item__icon'/>
                        <span className='section-navigation-item__title'>{section.title}</span>
                    </Link>
                )
            } else {
                return(
                    <div className='section-navigation-item section-navigation-item_disabled' key={title}>
                        <Icon className='section-navigation-item__icon'/>
                        <span className='section-navigation-item__title'>{section.title}</span>
                    </div>
                )
            }

        });

        return (
            <div className="home">
                <Header
                    title={TITLE}
                    Icon={Medicine}
                    className='home'
                />
                <div className="home-body">
                    <div className="section-navigation">
                        {NAV_SECTIONS}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Home);