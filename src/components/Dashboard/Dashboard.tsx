
import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import PropertyProfile from "@/components/PropertyProfile/PropertyProfile";
import Property from '../Property/Property';

type Property = {
    propertyId: 1,
    titleInfo: '',
    leinInfo: '',
    mortgageInfo: ''
}


class Dashboard extends React.Component {
    state = {
        properties: []
    }

    headers = { headers: { "Access-Control-Allow-Origin": "*" } };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/property/getForUser?userId=1`)
            .then(res => {
                const properties = res.data;
                console.log("properties = ", properties)
                this.setState({ properties });
            })
    }

    setProperty(propertyId){
        PropertyProfile.setPropertyId(propertyId);
    }

    filterByStatus(status){

        let destination = {
            draft: '/consign/general',
            unlisted: '/consign/review',
            listed: '/listed/overview'
        }


        let properties = this.state.properties.filter(property => {
            return property.status == status;
        }).map(property => {
            return <div key={property.propertyId}><Link to={destination[status]} onClick={()=>this.setProperty(property.propertyId)}><Property  title={property.addressLine1}></Property></Link></div>
        });
    

        return properties;
    }

    render() {

        let drafts = this.filterByStatus('draft');
        let unlisted = this.filterByStatus('unlisted');
        let listed = this.filterByStatus('listed');
        let closed = this.filterByStatus('sold');
        
        return (
            <div>
                <div>
                    <h2>Drafts</h2>
                    {drafts}
                </div>

                <div>
                    <h2>Unlisted</h2>
                    {unlisted}
                </div>

                <div>
                    <h2>Listed</h2>
                    {listed}
                </div>

                <div>
                    <h2>Closed</h2>
                    {closed}
                </div>
            </div>
        );
    }

}

export default Dashboard;


