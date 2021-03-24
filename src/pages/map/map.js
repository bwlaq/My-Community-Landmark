import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: -33.86,
            lng: 151.20
        },
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.state = {
            location: {
                lat: '',
                lng: ''
            },
            landmarkName: '',
            editor: '',
            note: 'Please write something about this landmark.'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A landmark was submitted. \nName: ' + this.state.landmarkName +
            '\nEditor: ' + this.state.editor +
            '\nNote: ' + this.state.note);
        event.preventDefault();
    }

    componentDidMount() {
        this.updateLocation();
    }

    updateLocation() {
        // Get location of user
        let success = position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.setState(
                {
                    location: {
                        lat: latitude,
                        lng: longitude
                    }
                }
            );
        };

        function error() {
            console.log("Unable to retrieve your location");
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '75vh', width: '100%' }}>
                <button onClick={this.updateLocation()}>Update My Location on Map</button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Landmark Name:
                          <input
                            type="text"
                            name="landmarkName"
                            value={this.state.value}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Editor's Name:
                          <input
                            type="text"
                            name="editor"
                            value={this.state.value}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        <br />
                        Notes about this Landmark:
                    <textarea
                            type="text"
                            name="note"
                            value={this.state.value}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCGbA8I_ftApSw83dkxEw0FFmfCOU1im5A" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    center={this.state.location}
                >
                    <AnyReactComponent
                        lat={-27.470125}
                        lng={153.021072}
                        text="You are here"
                    />
                </GoogleMapReact>

            </div >
        );
    }
}

export default Map;