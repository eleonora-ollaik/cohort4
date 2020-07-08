import React from 'react';

class OddComp extends React.Component {

    render() {
        return (
            <div>
                <h1>This number is Odd {this.props.whatToSay}</h1>
            </div>
        )
    }
}

export default OddComp;