import React from 'react'
import PropTypes from 'prop-types'

function SearchInput(props) {
  return (
    <input 
      type='search'
      className="form-control form-control-lg"
      placeholder="Enter user name"
      onChange={props.handleSearch}
    />
  )
}

SearchInput.propTypes = {
  handleSearch: PropTypes.func
}

export default SearchInput
