import React from 'react';



class TabFlipper extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tab: props.tab
        }
    }

    render () {
        return (<h1>Hello World</h1>);
    }
}
export default TabFlipper;