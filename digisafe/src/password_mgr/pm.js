import React from 'react';
import './pm.css';

class PasswordManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jwt: props.jwt,
            pwds: this.getPwdsList(props.jwt)
        };
    }

    getPwdsList(token) {
        return [
            {"id": 1, "name": "sbi_account", "date_created": Date()},
            {"id": 2, "name": "wellsfargo_account", "date_created": Date()},
            {"id": 3, "name": "wellsfargo_account", "date_created": Date()},
        ]
    }

    renderTableData() {
      return this.state.pwds.map((pwd, index) => {
         const { id, name, date_created } = pwd //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{date_created}</td>
            </tr>
         )
      })
   }

    render() {
        return (

                <div className="row">

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                ID
                                            </th>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Date Modified
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderTableData()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Lookup..."/>
                                        <div className="input-group-append">
                                          <button className="btn btn-secondary" type="button">
                                            <i className="bi bi-search">Search</i>
                                          </button>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <pre><code>Some Text Will Go here</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

}

export default PasswordManager;