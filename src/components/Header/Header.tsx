import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import uuid from 'node-uuid';
import PropertyProfile from "@/components/PropertyProfile/PropertyProfile";

class Header extends React.Component {

    //useProperty = () => React.useContext(PropertyContext)
    //property = this.useProperty();
    //console.log('property = ', property);

    setPropertyId = propertyId => {
        console.log(propertyId)
        this.setState({ propertyId });
    };

    state = {
        propertyId: '',
        setPropertyId: this.setPropertyId
    };


    render(): React.ReactNode {

        return (
            <div>
                <div className='header full-page-width grid grid-cols-2 gap-3'>

                    <span className='col-span-1'>
                        <h1 >
                            <Link to="/">Easy Home Agent</Link>
                        </h1>
                    </span>



                    <span className='col-span-1 newPropertyButton'>
                        <Link to="/consign/general" onClick={this.newProperty}>
                            <Button label="+ New Property"></Button>
                        </Link>
                    </span>
                </div>
            </div>
        );
    }
    newProperty(e) {
        let propertyId = uuid.v4();
        console.log('here')
        PropertyProfile.setPropertyId(propertyId);

    }

}

export default Header;