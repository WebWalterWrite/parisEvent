import React, { Component } from "react";
import PropTypes from 'prop-types';
import Loader from '../utils/loader';


const Hoc = (WrappedComponent, action ) => {

	class EventsHoc extends Component {
	
		constructor(props) {
			super(props);
			console.log(props)
			this.state = {
				data: []
			};
		}

		componentDidUpdate = async (prevProps) => {
			// Typical usage (don't forget to compare props):
			console.log(prevProps);
			if (this.props.match.params.name !== prevProps.match.params.name) {
				const { name } = this.props.match.params
				const EventsList = await action(name);
				this.insertEvents(EventsList.data);
			}
		  }
		
		componentDidMount= async () => {
			const { name } = this.props.match.params
			const EventsList = await action(name);
			this.insertEvents(EventsList.data);
		};

		insertEvents = list => {
			this.setState({ data: list });
		};

		render() {
			if(!this.state.data || this.state.data.length === 0)
			return <Loader event = {this.props.match.params.name} />;
			return <WrappedComponent events={this.state.data} event={this.props.match.params.name}/>;
		
		}
    };

	return EventsHoc;
	
	
};

Hoc.propTypes = {
	action : PropTypes.bool.isRequired
}


export default Hoc;
