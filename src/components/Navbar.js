import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const Navbar = () => {

    const history = useHistory()
    const { actions } = useContext(Context)

    const handleLogout = () => {
        actions.logout(history)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/main">StarWars</Link>
                <div className="navbar-nav ml-auto">
                    <button className="btn btn-outline-primary rounded-pill" onClick={handleLogout}>Logout</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
