import React from 'react'
import PropTypes from 'prop-types'

function Card({user}) {
  return (
    <li>
      <a href={user.html_url}
          className="user-link p-2 d-flex flex-row align-items-center text-decoration-none text-black"
          rel="noreferrer"
          target='_blank'
      >
        <img src={user.avatar_url} className="img-fluid rounded-circle" style={{ width: 48, height: 48, objectFit: 'cover' }} alt="User avatar"/>
        <strong className="mx-3">
          {user.login}
        </strong>
      </a>
    </li>
  )
}

Card.propTypes = {

}

export default Card

