import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Star } from '../../images/Icons/star.svg';
import service from '../../services/EventsService';
import {bindActionCreators} from 'redux';
import moment from 'moment';

import Header from '../Header/Header.js';
import Event from '../../components/Event/Event.js'
import './Events.scss';
import * as EventsActions from "../../redux/Events/actions/EventsActions";

const TITLE = 'События';

function mapStateToProps(state){
    return{
        error: state.events.list.error,
        isFetching: state.events.list.isFetching,
        dataSource: state.events.list.dataSource,
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: {
            ...bindActionCreators(EventsActions, dispatch),
        }
    }
}

class Events extends React.Component {
    load = () => {
        this.props.actions.load();
    };

    componentDidMount(){
        this.load();
    }

    render(){
        const {
            isFetching,
            dataSource,
        } = this.props;
        const ODD_EVENTS = [];
        const EVEN_EVENTS = [];

        dataSource.data.forEach((event, i) => {
            const {
                title,
                date,
                time,
                place,
                from,
                text
            } = event;

            if ( i === 0 || i % 2 === 0 ) {
                ODD_EVENTS.push(
                    <Event
                        title= {title}
                        date= {moment(date).format('DD.MM.YYYY')}
                        time = {time}
                        place = {place}
                        from = {from}
                        text =  {text}
                    />
                )
            } else {
                EVEN_EVENTS.push(
                    <Event
                        title= {title}
                        date= {moment(date).format('DD.MM.YYYY')}
                        time = {time}
                        place = {place}
                        from = {from}
                        text =  {text}
                    />
                )
            }
        });

        return(
            <div className='events'>
                <Header
                    title={TITLE}
                    Icon={Star}
                    className='events'
                />
                <div className='events-body'>

                        {isFetching?
                            <div className="spinner-border text-secondary margin-top-40" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                             :
                            <div className='events-container'>
                                <div className='events-column'>
                                    {ODD_EVENTS}
                                </div>
                                <div className='events-column margin-left-40'>
                                    {EVEN_EVENTS}
                                </div>
                            </div>
                        }

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);