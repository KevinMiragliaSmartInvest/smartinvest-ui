import React from 'react'
import "./ConsignmentReview.css";
import FieldSet from "../FieldSet/FieldSet";
import Input from "../Input/Input";
import Button from '../Button/Button';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import PropertyProfile from "@/components/PropertyProfile/PropertyProfile";


class ConsignmentReview extends React.Component {
    state = {
        property: {
            propertyId: PropertyProfile.getPropertyId(),
            status: 'unlisted',
            titleInfo: '',
            leinInfo: '',
            mortgageInfo: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            stateProvince: '',
            country: '',
            postalCode: '',
            bedrooms: '',
            bathrooms: '',
            propertyType: '',
            hoa: '',
            yearBuilt: '',
            squareFootage: '',
            lotSize: '',
            constructionMaterials: '',
            annualTaxAmount: '',
            centralHeating: '',
            centralAirconditioning: '',
            price:''
        }
    }



    headers = { headers: { "Access-Control-Allow-Origin": "*" } };

    constructor(props, context) {
        super(props, context);
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.list=this.list.bind(this);


    }

    componentDidMount() {
        axios.get(`http://localhost:3001/property/get?propertyId=${this.state.property.propertyId}`)
            .then(res => {
                const property = res.data;
                this.setState({ property });
            })
    }

    save(e) {
        this.state.property.status = 'unlisted';

        axios.post(`http://localhost:3001/property/insert`, this.state.property)
            .then(res => {
                console.log(res);
            })

    }

    list(e){
        this.state.property.status = 'listed';

        axios.post(`http://localhost:3001/property/insert`, this.state.property)
            .then(res => {
                console.log(res);
            })
    }

    handleChange(field, event) {
        var property = { ...this.state.property }
        property[field] = event.target.value;
        this.setState({ property })
    }

    render() {
        return (
            <div className='grid grid-cols-2 gap-2'>

                <div className='col-span-1'>
                    <FieldSet title="Address">
                        <Input label="Address Line 1" value={this.state.property.addressLine1} onChange={() => this.handleChange("addressLine1", event)} disabled={true}></Input>
                        <Input label="Address Line 2" value={this.state.property.addressLine2} onChange={() => this.handleChange("addressLine2", event)} disabled={true}></Input>
                        <Input label="City" value={this.state.property.city} onChange={() => this.handleChange("city", event)} disabled={true}></Input>
                        <Input label="State / Province" value={this.state.property.stateProvince} onChange={() => this.handleChange("stateProvince", event)} disabled={true}></Input>
                        <Input label="Country" value={this.state.property.country} onChange={() => this.handleChange("country", event)} disabled={true}></Input>
                        <Input label="Postal Code" value={this.state.property.postalCode} onChange={() => this.handleChange("postalCode", event)} disabled={true}></Input>
                    </FieldSet>
                </div>
                <div className='col-span-1'>
                    <FieldSet title="Property Information">
                        <Input label="Bedrooms" value={this.state.property.bedrooms} onChange={() => this.handleChange("bedrooms", event)} disabled={true}></Input>
                        <Input label="Bathrooms" value={this.state.property.bathrooms} onChange={() => this.handleChange("bathrooms", event)} disabled={true}></Input>
                        <Input label="Property Type" value={this.state.property.propertyType} onChange={() => this.handleChange("propertyType", event)} disabled={true}></Input>
                        <Input label="HOA" value={this.state.property.hoa} onChange={() => this.handleChange("hoa", event)} disabled={true}></Input>
                        <Input label="Year Built" value={this.state.property.yearBuilt} onChange={() => this.handleChange("yearBuilt", event)} disabled={true}></Input>
                        <Input label="Size in Feet Squared" value={this.state.property.squareFootage} onChange={() => this.handleChange("squareFootage", event)} disabled={true}></Input>
                        <Input label="Lot Size in Feet Squared" value={this.state.property.lotSize} onChange={() => this.handleChange("lotSize", event)} disabled={true}></Input>
                        <Input label="Construction Materials" value={this.state.property.constructionMaterials} onChange={() => this.handleChange("constructionMaterials", event)} disabled={true}></Input>
                        <Input label="Annual Tax Amount" value={this.state.property.annualTaxAmount} onChange={() => this.handleChange("annualTaxAmount", event)} disabled={true}></Input>
                        <Input label="Centeral Heating" value={this.state.property.centralHeating} onChange={() => this.handleChange("centralHeating", event)} disabled={true}></Input>
                        <Input label="Centeral Airconditioning" value={this.state.property.centralAirconditioning} onChange={() => this.handleChange("centralAirconditioning", event)} disabled={true}></Input>
                    </FieldSet>
                    </div>
                    <div className='col-span-1'>
                    <FieldSet title="Title Information">
                        <Input label="Do you have the title in your posession?" value={this.state.property.titleInfo} onChange={() => this.handleChange("titleInfo", event)} disabled={true}></Input>
                    </FieldSet>
                    <FieldSet title="Lein Information">
                        <Input label="Are there any Liens on this property?" value={this.state.property.leinInfo} onChange={() => this.handleChange("leinInfo", event)} disabled={true}></Input>
                    </FieldSet>
                    <FieldSet title="Mortgage Information">
                        <Input label="Is there a mortgage on this property?" value={this.state.property.mortgageInfo} onChange={() => this.handleChange("mortgageInfo", event)} disabled={true}></Input>
                    </FieldSet>
                    </div>
                    <div className='col-span-1'>
                    <FieldSet title="Asking Price">
                        <Input key={this.state.property.propertyId} label="Asking Price" value={this.state.property.price} onChange={() => this.handleChange("price", event)}  disabled={true}></Input>
                    </FieldSet>
                    </div>
                    <div className='col-span-2'>

                    <Link to="/" onClick={this.save}>
                        <Button label="Save"></Button>
                    </Link>
                    <Link to="/" onClick={this.list}>
                        <Button label="List this"></Button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default ConsignmentReview;