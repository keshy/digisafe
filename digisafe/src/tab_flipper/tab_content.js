import React from 'react';
import HomePage from '../home_page/home.js'
import PasswordManager from '../password_mgr/pm.js'

class TabContent extends React.Component {
    constructor (props) {
        super(props);
        this.tab_html = null;
        this.state = {
            jwt: props.jwt,
            tab: 'home'
        }
        this.flipTabs = this.flipTabs.bind(this);
    }

    flipTabs(d) {
        this.setState({
            tab: d
        }, () => {
        });
    }

    render() {
        let tab_html = null;
        switch (this.state.tab) {
            case 'home': {
                tab_html = <HomePage jwt={this.state.jwt}/>;
                break;
            }
            case 'pm': {
                tab_html = <PasswordManager jwt={this.state.jwt}/>;
                break;
            }
            default: {
                tab_html = <h3>This will be the space for the next great app</h3>;
                break;
            }
        }

        return (
            <div className="row">
                    <div className="col-md-12">
                        <nav>
                            <ol className="breadcrumb btn-group btn-group-toggle" data-toggle="buttons">
                                <li className="breadcrumb-item active">
                                    <button href="#" className="btn active" aria-disabled="false" onClick={this.flipTabs.bind(this, 'home')}>Home</button>
                                </li>
                                <li className="breadcrumb-item">
                                    <button href="#" className="btn" aria-disabled="true" onClick={this.flipTabs.bind(this, 'pm')}>Password Manager</button>
                                </li>
                                <li className="breadcrumb-item">
                                    <button href="#" className="btn" aria-disabled="true" onClick={this.flipTabs.bind(this, 'fsafe')}>File Safe</button>
                                </li>
                                <li className="breadcrumb-item">
                                    <button href="#" className="btn" aria-disabled="true" onClick={this.flipTabs.bind(this, 'aw')}>Ancestry Wiki</button>
                                </li>
                                <li className="breadcrumb-item">
                                    <button href="#" className="btn" aria-disabled="true" onClick={this.flipTabs.bind(this, 'pTimeline')}>Project Timeline</button>
                                </li>
                            </ol>

                        </nav>
                        <div id='tab-loader' className="row">
                            {tab_html}
                        </div>
                    </div>
            </div>
        );
    }
}

export default TabContent;