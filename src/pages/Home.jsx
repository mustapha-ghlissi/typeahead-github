import React, { Component } from 'react'
import { getUsers } from '../api/services/user';
import SearchInput from '../components/SearchInput'
import UserList from '../components/User/List';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: null,
    }
  }

  onSearch = (e) => {
    const {value} = e.target;

    if (value.trim() === '') {
      this.setState({
        users: null
      });

      return false;
    }

    getUsers(value).then(response => {
      //console.log(response);
      this.setState({
        users: response.items
      })
    })
  }

  render() {

    const {users} = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card">
              <div className="card-header">
                <h5>Tap to search Github User</h5>
              </div>
              <div className="card-body">
                <SearchInput handleSearch={this.onSearch} />
                {
                  users && <UserList users={users} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
