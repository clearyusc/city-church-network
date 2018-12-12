import React from 'react'
import MapWithPin from './MapWithPin'
import CircleImage from './CircleImage';
//import SimpleCard from './SimpleCard'
//import ContactInfo from './ContactInfo'


const ChurchInfo = ({ name, location, geolocation, meetingTime, contact }) => (
    <div className="card shadow">
        <div className="card-body">
            <h1 className="text-center card-title">{name}</h1>
            <br />
            <div className="row">
                <div className="col-md">
                    <MapWithPin geolocation={geolocation} />
                </div>
                <div className="col-md d-flex flex-column">
                    <p className="lead">Meeting Info</p>
                    <div className="bg-light p-2 mb-1" style={{ 'min-height': '15%' }}>
                        <p><strong>{meetingTime}</strong><br /><span className="muted">{location}</span></p>
                    </div>
                    <p className="lead">Contact</p>
                    <div className="bg-dark p-2 text-white d-flex" style={{ 'height': '50%' }}>
                        <div style={{ 'width': '50%', 'height': '50%' }}>
                            <CircleImage>
                                <h6 className="text-center mt-1">{contact.name}</h6>
                            </CircleImage>
                        </div>
                        <div className="p-2 d-flex flex-column justify-content-center">
                            <p>{contact.phone}<br />{contact.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ChurchInfo