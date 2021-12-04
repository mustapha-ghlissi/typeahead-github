import React from 'react'
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

export default List

