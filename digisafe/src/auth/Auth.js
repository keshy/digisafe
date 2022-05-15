import './Auth.css';
import React from 'react';
import HomePage from '../home_page/home.js'
import Address from './address';

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
                                <Address jwt={gToken}></Address>
                                <button type="button" class="btn btn-outline-primary btn-md" onClick={signOut}>
                                    Sign-Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <nav>
                            <ol class="breadcrumb btn-group btn-group-toggle" data-toggle="buttons">
                                <li class="breadcrumb-item active">
                                    <button href="#" class="btn btn-info active" aria-disabled="true">Home</button>
                                </li>
                                <li class="breadcrumb-item">
                                    {/* <button href="#" class="btn btn-info" role="button" aria-disabled="true" className='PM' onClick={this.loadPm(gToken)}>Password Manager</button> */}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="row">
                    <HomePage jwt={gToken}></HomePage>    
                </div>
            </div>
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
                            <div class='col-md-5' />
                            <div class="col-md-1">
                                <div id="gButton" />
                            </div>
                            <div class='col-md-6' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function signOut() {
    sessionStorage.removeItem('gTokenDigiSafe');
    window.location.href = 'index.html';
}
export default Auth;
