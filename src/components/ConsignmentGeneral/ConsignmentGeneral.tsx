import React from 'react'
import "./ConsignmentGeneral.css";
import FieldSet from "../FieldSet/FieldSet";
import Input from "../Input/Input";
import Button from '../Button/Button';
import axios from 'axios';
import { Link, useNavigate  } from "react-router-dom";
import PropertyProfile from "@/components/PropertyProfile/PropertyProfile";


class ConsignmentGeneral extends React.Component{
    state = {
        property: {
            propertyId: PropertyProfile.getPropertyId(),
            status:'draft',
            userId: '1',
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
            centralAirconditioning: ''
        }
    }



    headers = {headers: {"Access-Control-Allow-Origin": "*"}};

    constructor(props, context){
        super(props, context);
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log('general ID = ', PropertyProfile.getPropertyId())
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/property/get?propertyId=${this.state.property.propertyId}`)
        .then(res => {
          const property = res.data;
          if(property.propertyId){
            this.setState({ property });
          }
        })
      }

    save(){

        console.log('save state', this.state)

        axios.post(`http://localhost:3001/property/insert`, this.state.property)
        .then(res => {
            console.log(res);
        })

    }

    handleChange(field, event){
        var property = {...this.state.property}
        property[field] =  event.target.value;
        this.setState({property})
    }

    render(){
        return (
            <div className='grid grid-cols-2 gap-2'>
            <div className='col-span-1'>
            <FieldSet title="Address">
                <Input label="Address Line 1" value={this.state.property.addressLine1} onChange={() => this.handleChange("addressLine1", event)}></Input>
                <Input label="Address Line 2" value={this.state.property.addressLine2} onChange={() => this.handleChange("addressLine2", event)}></Input>
                <Input label="City" value={this.state.property.city} onChange={() => this.handleChange("city", event)}></Input>
                <Input label="State / Province" value={this.state.property.stateProvince} onChange={() => this.handleChange("stateProvince", event)}></Input>
                <Input label="Country" value={this.state.property.country} onChange={() => this.handleChange("country", event)}></Input>
                <Input label="Postal Code" value={this.state.property.postalCode} onChange={() => this.handleChange("postalCode", event)}></Input>
            </FieldSet>
            </div>
            <div className='col-span-1'>
            <FieldSet title="Property Information">
                <Input label="Bedrooms" value={this.state.property.bedrooms} onChange={() => this.handleChange("bedrooms", event)}></Input>
                <Input label="Bathrooms" value={this.state.property.bathrooms} onChange={() => this.handleChange("bathrooms", event)}></Input>
                <Input label="Property Type" value={this.state.property.propertyType} onChange={() => this.handleChange("propertyType", event)}></Input>
                <Input label="HOA" value={this.state.property.hoa} onChange={() => this.handleChange("hoa", event)}></Input>
                <Input label="Year Built" value={this.state.property.yearBuilt} onChange={() => this.handleChange("yearBuilt", event)}></Input>
                <Input label="Size in Feet Squared" value={this.state.property.squareFootage} onChange={() => this.handleChange("squareFootage", event)}></Input>
                <Input label="Lot Size in Feet Squared" value={this.state.property.lotSize} onChange={() => this.handleChange("lotSize", event)}></Input>
                <Input label="Construction Materials" value={this.state.property.constructionMaterials} onChange={() => this.handleChange("constructionMaterials", event)}></Input>
                <Input label="Annual Tax Amount" value={this.state.property.annualTaxAmount} onChange={() => this.handleChange("annualTaxAmount", event)}></Input>
                <Input label="Centeral Heating" value={this.state.property.centralHeating} onChange={() => this.handleChange("centralHeating", event)}></Input>
                <Input label="Centeral Airconditioning" value={this.state.property.centralAirconditioning} onChange={() => this.handleChange("centralAirconditioning", event)}></Input>
            </FieldSet>
            </div>
            <div className='col-span-1'></div>
            <div className='col-span-1 consignNavButtons'>
            <Link to="/consign/title" onClick={this.save}>
                <Button label="Title >" ></Button>
            </Link>
            </div>
            </div>
          );
    }

}

export default ConsignmentGeneral;