import React from 'react'
import "./ConsignmentTitle.css";
import FieldSet from "../FieldSet/FieldSet";
import Input from "../Input/Input";
import Button from '../Button/Button';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import PropertyProfile from "@/components/PropertyProfile/PropertyProfile";


type Property = {
    propertyId: 1,
    titleInfo: '',
    leinInfo: '',
    mortgageInfo: ''
}


class ConsignmentTitle extends React.Component {
    state = {
        property: {
            propertyId: PropertyProfile.getPropertyId(),
            titleInfo: '',
            leinInfo: '',
            mortgageInfo: ''
        }
    }



    headers = { headers: { "Access-Control-Allow-Origin": "*" } };

    constructor(props, context) {
        super(props, context);
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        axios.get(`http://localhost:3001/property/get?propertyId=${this.state.property.propertyId}`)
            .then(res => {
                const property = res.data;
                console.log('componentDidMount property = ', property)
                console.log('componentDidMount state = ', this.state)

                this.setState({ property });
            })
    }

    save(e) {
         console.log('save state = ', this.state)

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
        return (
            <div className='grid grid-cols-2 gap-2'>
                <div className="col-span-2">
                    <FieldSet title="Title Information">
                        <Input label="Do you have the title in your posession?" value={this.state.property.titleInfo} onChange={() => this.handleChange("titleInfo", event)}></Input>
                    </FieldSet>
                    <FieldSet title="Lein Information">
                        <Input label="Are there any Liens on this property?" value={this.state.property.leinInfo} onChange={() => this.handleChange("leinInfo", event)}></Input>
                    </FieldSet>
                    <FieldSet title="Mortgage Information">
                        <Input label="Is there a mortgage on this property?" value={this.state.property.mortgageInfo} onChange={() => this.handleChange("mortgageInfo", event)}></Input>
                    </FieldSet>
                </div>
                <div></div>
                <div className="consignNavButtons">
                    <Link to="/consign/pricing" onClick={this.save}>
                        <Button label="Pricing"></Button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default ConsignmentTitle;