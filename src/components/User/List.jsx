import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card';

function List({users}) {
  return (
    <ul className="list-users list-unstyled m-0 mt-3 p-0 border rounded">
      {
        users.map((user, index) => (
          <Card user={user} key={index}/>
        ))
      }
    </ul>
  )
}

List.propTypes = {

}

export default List

