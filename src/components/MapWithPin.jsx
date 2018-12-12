import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const SmallDot = ({ text }) => (
    <div style={{
        color: 'white',
        background: '#007bff',
        padding: '5px 5px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
    </div>
)

class MapWithPin extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        // Basically use Memphis, TN as default center
        center: {
            lat: 35.149532,
            lng: -89.95
        },
        zoom: 10
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ 'height': '45vh' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBvcrb4oDh3i2TSKJARU37MpgdYivP6UXk' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <SmallDot
                        lat={this.props.geolocation.lat}
                        lng={this.props.geolocation.lng}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapWithPin;