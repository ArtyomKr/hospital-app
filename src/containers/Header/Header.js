import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button.js'
import './Header.scss';

import cn from 'classnames';

function mapStateToProps(state){
    return{
        username: state.authentication.user.name
    }
}

 class Header extends React.Component{
    render(){
        const {
            title = '',
            Icon,
            userName = this.props.username,
            className = ''
        } = this.props;

        return(
            <div className={cn('header', className)}>
                <div className='header-body'>
                    <div className='d-flex flex-row justify-content-start align-items-center'>
                        <Link className='header-body__link' to='/home'>
                            <Icon className='header-body__icon'/>
                        </Link>
                        <Link className='header-body__link' to='/home'>
                            <span className='header-body__title'>{title}</span>
                        </Link>

                    </div>
                    <div className='flex-1 d-flex flex-row justify-content-end align-items-center'>
                        <span className='header-body__username'>{userName}</span>
                            <Button
                                href='/authentication'
                                className='header-body__exitButton'
                                text='Выйти'
                            />
                    </div>
                </div>
            </div>
        )
    }
}
//add current user and exit button
export default connect(mapStateToProps)(Header);