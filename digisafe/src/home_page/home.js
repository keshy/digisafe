import React from 'react';
import jwt_decode from "jwt-decode";


function getDetailsForUser(props) {
    return {
        "saved_count": 0,
        "last_access": 0,
        "last_modified": 0
    }
}


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        let decoded_jwt = jwt_decode(props.jwt);
        this.state = {
            jwt: decoded_jwt,
            u_info: getDetailsForUser(props.jwt)
        };
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-12">
                    <table id="user_summary" class="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>
                                    Username
                                </th>
                                <th>
                                    No. saved passwords
                                </th>
                                <th>
                                    Last Accessed
                                </th>
                                <th>
                                    Last Modified
                                </th>
                            </tr>
                            <tr>
                                <td>{this.state.jwt.name}</td>
                                <td>{this.state.u_info.saved_count}</td>
                                <td>{this.state.u_info.last_access}</td>
                                <td>{this.state.u_info.last_modified}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        );

    }
}

export default HomePage;