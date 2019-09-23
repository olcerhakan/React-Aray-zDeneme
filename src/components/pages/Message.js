import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Message extends Component {
    render() {
        return (
            <div>
            <ul className="nav-links">
                <Link to='/message'>
                <p>Mesajlar</p>
                </Link>
                </ul>
            </div>
        )
    }
}
