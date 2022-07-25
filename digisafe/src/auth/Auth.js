import './Auth.css';
import React from 'react';
import HomePage from '../home_page/home.js'
import Address from './address';
import TabFlipper from './tab_flipper/tab_flipper.js'

function Auth() {
    let gToken = sessionStorage.getItem('gTokenDigiSafe');
    if (gToken) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="jumbotron">
                                    <h3 className="text-left">
                                        Brindavanam
                                    </h3>
                                    <p>
                                        A private virtual infrastructure for maintaining private data.
                                    </p>
                                </div>
                            </div>
                            <div id="user-profile-display" className="col-md-4">
                                <Address jwt={gToken}></Address>
                                <button type="button" className="btn btn-outline-primary btn-md" onClick={signOut}>
                                    Sign-Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <nav>
                            <ol className="breadcrumb btn-group btn-group-toggle" data-toggle="buttons">
                                <li className="breadcrumb-item active">
                                    <button href="#" className="btn btn-info active" aria-disabled="false">Home</button>
                                </li>
                                <li className="breadcrumb-item">
                                    <button href="#" className="btn btn-info" aria-disabled="true">Password Manager</button>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <TabFlipper props/>
                <div id='tab-loader' className="row">

                </div>
            </div>
        );
    } else {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron" align-items="center">
                            <h3 className="text-center">
                                Brindavanam
                            </h3>
                            <p className="text-center">
                                A private virtual infrastructure for maintaining and sharing sensitive data.
                            </p>
                        </div>
                        <div className="row">
                            <div className='col-md-5' />
                            <div className="col-md-1">
                                <div id="gButton" />
                            </div>
                            <div className='col-md-6' />
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

function flipTabs(domain) {
<HomePage jwt={gToken}></HomePage>
}