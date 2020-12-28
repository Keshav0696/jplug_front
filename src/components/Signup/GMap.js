import React, { Component, PropTypes } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GMap extends Component {


    render() {
        const mapStyles = {
          width: '100%',
          height: '400px',
          position: 'relative'
        };

        return (
          <Map
            containerStyle={mapStyles}
            google={this.props.google}
            zoom={15}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          />
        );
    }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyA7CqD38HtBHqG9BXAAktRL6CQwNMj0Yy0'
})(GMap);
