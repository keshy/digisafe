import './Auth.css';
import React from 'react';

function Auth() {
    let gToken = sessionStorage.getItem('gTokenDigiSafe');
    if (gToken) {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="jumbotron">
                                    <h3 class="text-left">
                                        Brindavanam
                                    </h3>
                                    <p>
                                        A private virtual infrastructure for maintaining private data.
                                    </p>
                                </div>
                            </div>
                            <div id="user-profile-display" class="col-md-4">
                                <address id="user-profile-details">
                                </address>
                                <button type="button" class="btn btn-outline-primary btn-sm" onclick="signOut()">
                                    Sign-Out
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active">
                                Home
                            </li>
                            <li class="breadcrumb-item">
                                <a href="./pm.html">Password Manager</a>
                            </li>
                        </ol>
                    </nav>
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
                                    <td id="stats_data"></td>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        );
    } else {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="jumbotron" align-items="center">
                            <h3 class="text-center">
                                Brindavanam
                            </h3>
                            <p class="text-center">
                                A private virtual infrastructure for maintaining and sharing sensitive data.
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div id="gButton" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
