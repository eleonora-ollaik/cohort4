import React, { Component } from 'react';

export class CreateAcc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   accounts: props.accounts,
      accName: '',
      startBal: '',
    };
    // this.handleCreateAcc = this.props.handleCreateAcc.bind(this);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    // console.log( this.props);
    this.props.onNewAcc(this.state.accName, Number(this.state.startBal));
    this.setState({ accName: '', startBal: '' });
  };

  render() {
    return (
      <div className='container'>
        <h1> Add New Acc</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            className='form-control'
            name='accName'
            placeholder='AccountName'
            style={{ flex: '10', padding: '5px' }}
            value={this.state.accName}
            onChange={this.onChange}
          />

          <input
            type='number'
            className='form-control'
            name='startBal'
            placeholder='Starting balance'
            style={{ flex: '10', padding: '5px' }}
            value={this.state.startBal}
            onChange={this.onChange}
          />

          <button type='Submit' className='btn' style={{ flex: 1 }}>
            Add Account
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAcc;
