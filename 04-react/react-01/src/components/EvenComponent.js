import React from 'react';

class EvenComp extends React.Component {
    render() {
        return (
            <div>
                <h1>This number is Even {this.props.whatToSay}</h1>
            </div>
        )
    }

}

export default EvenComp;