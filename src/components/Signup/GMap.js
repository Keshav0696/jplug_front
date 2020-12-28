import React, { Component, PropTypes } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GMap extends Component {


    render() {
        const mapStyles = {
          width: '100%',
          height: '100%',
        };

        return (
                <Map
                  google={this.props.google}
                  zoom={8}
                  style={mapStyles}
                  initialCenter={{ lat: 47.444, lng: -122.176}}
                />
        );
    }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCP-g2lCwitV2Ul1uCvq-q5QrnUFbcqnMo'
})(GMap);
