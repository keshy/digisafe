import './Auth.css';
import React from 'react';
import Address from './address';
import TabContent from '../tab_flipper/tab_content.js';


function Auth() {
    let gToken = sessionStorage.getItem('gTokenDigiSafe');
    if (gToken) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="jumbotron">
                                    <h3 className="text-center">
                                        Brindavanam
                                    </h3>
                                    <p className="text-center">
                                        A private virtual infrastructure for maintaining private data.
                                    </p>
                                </div>
                            </div>
                            <div id="user-profile-display" className="col-md-2">
                                <Address jwt={gToken}></Address>
                                <button type="button" className="btn btn-outline-primary btn-md" onClick={signOut}>
                                    Sign-Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <TabContent jwt={gToken}></TabContent>
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

