import React, {Component} from 'react';

class UserForm extends Component{
  onSubmit(e){
    e.preventDefault();
    var node = this.refs.userName;
    var userName = node.value;
    this.props.setUserName(userName);
    node.value = '';
  }
  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Set Your Name...'
            ref='userName'
          />
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  setUserName: React.PropTypes.func.isRequired
}

export default UserForm;
