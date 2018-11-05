import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AllEvents } from "../../../utils/api";

import Hoc from '../../../hoc/events.hoc';

// import style
import {CardContainer, Card, Text} from './events.styled';

const Events = (props) => {
    console.log(props);
    const {events} = props
    const {event} = props

    return(
    <CardContainer>
        {events.map((elem) => {
            const {title, image, id, leadText } = elem;

            const slugEvent = event.toLowerCase().split(' ').join('-');
            const slugName = title.toLowerCase().split(' ').join('-');

            return(
                <Card img={image.url} key={id}>
                  <h1>{title}</h1>
                  <Text>
                  <Link to={{pathname:`/parisbyme/event/${slugEvent}/${slugName}/${id}`, state:{data: elem}}}>
                  
                      {leadText}
                      </Link>  
                  </Text>
           
                </Card>
            )
    })}
     </CardContainer>
    )   
};

// 
Events.propTypes = {
    events : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            leadText: PropTypes.string.isRequired,
            image: PropTypes.objectOf(PropTypes.string).isRequired,
        })
    ).isRequired
};


const WrappedComponent = Hoc(Events, (eventType) => AllEvents(eventType));

export default WrappedComponent;
