import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTripThunk } from '../thunks';
import { Link } from 'react-router-dom';

class SingleTrip extends Component{
  constructor(props){
  	super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchTrip()
  }

  render() {
    console.log('Trip Render', this.props)
    const { thisTrip } = this.props

    return (
      <div>
        <h1 className="title"> Trip:  {thisTrip.destination}</h1>
       
      </div>
    );
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  return {
    thisTrip: state.thisTrip
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchTrip: () => dispatch(fetchTripThunk())
  }
}

// Connect Student to the redux-store
export default connect(mapStateToProps, mapDispatch)(SingleTrip);
