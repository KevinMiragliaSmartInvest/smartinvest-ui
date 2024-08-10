import React from 'react';
import useState from 'react';
import "./ConsignmentAskingPrice.css";
import FieldSet from "../FieldSet/FieldSet";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Property from '../Property/Property';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import PropertyProfile from "@/components/PropertyProfile/PropertyProfile";


type Property = {
    propertyId: string,
    addressLine1: string,
    formattedAddress: string,
    addressLine2: null, city: string,
    state: string
}


class ConsignmentAskingPrice extends React.Component<{}, { [key: string]: any }> {

    headers = { headers: { "Access-Control-Allow-Origin": "*" } };

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            property: {
                propertyId: PropertyProfile.getPropertyId(),
                price: ''
            },
            similarProperties: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/property/get?propertyId=${this.state.property.propertyId}`)
            .then(res => {
                const property = res.data;
                this.setState({ property });
            })

        axios.get(`http://localhost:3001/property/propertyValue`)
            .then(res => {

                const similarProperties = res.data.comparables;
                const estimatedPrice = {
                    price: res.data.price,
                    priceRangeHigh: res.data.priceRangeHigh,
                    priceRangeLow: res.data.priceRangeLow
                }

                console.log("estimatedPrice = ", estimatedPrice)

                this.setState({ similarProperties });
                this.setState({ estimatedPrice });
                console.log(this.state)
            })
    }

    save(e){
        // e.preventDefault();
 
         axios.post(`http://localhost:3001/property/insert`, this.state.property)
         .then(res => {
            // const navigate = useNavigate();
             console.log(res);
            // navigate('/consign/title')
         })
 
     }

    handleChange(field, event) {
        var property = { ...this.state.property }
        property[field] = event.target.value;
        this.setState({ property })
    }

    render() {
        let estimatedPrice, similarProperties;

        console.log("state = ", this.state)

        similarProperties = <div>
            {(this.state.similarProperties || []).map(similarProp => (
                <Property title={similarProp.formattedAddress} price={similarProp.price}></Property>
            ))}
        </div>;

        if (this.state.estimatedPrice && this.state.estimatedPrice.price) {
            estimatedPrice = <div>
            <h2>Highest estimated value</h2>
            <h2>{this.state.estimatedPrice.price}</h2>

            <h2>Estimated Value</h2>
            <h2>{this.state.estimatedPrice.priceRangeHigh}</h2>

            <h2>Lowest estimated value</h2>
            <h2>{this.state.estimatedPrice.priceRangeLow}</h2>



        </div>
        }

        return (
            <div className='grid grid-cols-2 gap-2'>
                <div className='col-span-2'>
                    {estimatedPrice}
                    <FieldSet title="Asking Price">
                        <Input key={this.state.property.propertyId} label="Asking Price" value={this.state.property.price} onChange={() => this.handleChange("price", event)}></Input>
                    </FieldSet>
                    <div>
                        <h2>Similar Listings</h2>
                        {similarProperties}

                    </div>
                </div>

                <div></div>
                <div>
                    <Link to="/consign/photos" onClick={this.save}>
                        <Button label="Photos"></Button>
                    </Link>
                </div>

            </div>
        );
    }

}

export default ConsignmentAskingPrice;