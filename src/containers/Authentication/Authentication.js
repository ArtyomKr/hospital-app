import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import TextField from '../../components/Forms/TextField.js';
import Button from '../../components/Button/Button.js';
import { ReactComponent as Hospital } from '../../images/Icons/hospital.svg';
import './Authentication.scss';

import * as AuthenticationActions from '../../redux/Authentication/actions/AuthenticationActions.js';
import { ACTION_TYPES } from '../../redux/Authentication/actions/Constants';
const { VALIDATION_ERROR } = ACTION_TYPES;

const clinicName = 'Поликлиника № 16';

function mapStateToProps(state){
    return{
        error: state.authentication.error,
        isFetching: state.authentication.isFetching,
        user: state.authentication.user,
        form: state.authentication.form
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: {
            ...bindActionCreators(AuthenticationActions, dispatch)
        }
    }
}

class Authentication extends React.Component {

    login = ({ login, password }) => {
        const {
            actions,
        } = this.props;

        actions.login({ login, password }).then((response) =>{
            const success = response.data.success;
            if (success) return true;
        });
    };

    validate({ login, password }) {
        const {
            actions,
        } = this.props;

        const action = actions.validate(login, password);
        return (action.type !== VALIDATION_ERROR)
    }

    handleChange = (name, value) => {
        this.props.actions.changeFormField(name, value);
    };

    handleClick = () => {
        const login = this.props.form.loginField;
        const password = this.props.form.passwordField;


        if (this.validate({ login, password })){
            this.login({ login, password });
        }
    };

    loginErrorCheck(){
        const { type, message } = this.props.error;
        if (type === 'user_not_found' || type === 'empty_login') {
            return {message: message}
        }
    }

    passwordErrorCheck(){
        const { type, message } = this.props.error;
        if (type === 'incorrect_password' || type === 'empty_password') {
            return {message: message}
        }
    }

    render(){
        const { loginField, passwordField } = this.props.form;
        const isFetching = this.props.isFetching;
        const loggedUser = this.props.user.login;

        return(
            <div className='authentication'>
                <div className='authentication-body'>

                    <div className='clinic-showcase'>
                        <Hospital className='clinic-showcase__icon'/>
                        <span className='clinic-showcase__title'>
                            {clinicName}
                        </span>
                    </div>

                    <form className='logging-form'>
                        <TextField
                            className='logging-form__loginField'
                            placeholder='Логин'
                            name='loginField'
                            value={loginField}
                            onChange={this.handleChange}
                            invalidInput={this.loginErrorCheck()}
                        />
                        <TextField
                            className='logging-form__passwordField'
                            type='password'
                            placeholder='Пароль'
                            name='passwordField'
                            value={passwordField}
                            onChange={this.handleChange}
                            invalidInput={this.passwordErrorCheck()}
                        />
                        {loggedUser? <Redirect to='/'/> :
                            <Button
                                className='logging-form__logInButton '
                                text='Войти'
                                isLoading={isFetching}
                                onClick={this.handleClick}
                            />
                        }

                    </form>

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);