import React from 'react'

function Navbar({onSearch}) {
  return (
    <nav className="nav-bg px-4">
      <div className="navbar justify-content-between">
        <h1 className="navbar-brand">Notes.</h1>
        <form className="d-flex">
          <input onChange={(event) => onSearch(event)} type="text" className="form-control" placeholder="Cari..."/>
        </form>
      </div>
    </nav>
  )
}

export default Navbar