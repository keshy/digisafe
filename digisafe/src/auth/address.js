import React from "react";
import jwt_decode from "jwt-decode";


class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jwt: jwt_decode(props.jwt)
        };
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-12">
                    <img src={this.state.jwt.picture}></img>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p>{this.state.jwt.name}</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default Address;