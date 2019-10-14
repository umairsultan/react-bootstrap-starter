import React from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

const navLinksData = [
        { linkName: 'Home', linkUrl: '/' },
        { linkName: 'About', linkUrl: '/about' },
        { linkName: 'Services', linkUrl: '/services' },
        { linkName: 'Contact', linkUrl: '/contact' }
]

export default class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/#">
                            <img className="logo-img" src={logo} alt="Logo" />
                            React Bootstrap
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                {
                                    navLinksData.map(function(link){
                                        return <Navlinks key={link.linkName} linkData={link} />
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

class Navlinks extends React.Component {
    
    render(){        
        return (
            <li className="nav-item">
                <NavLink className="nav-link" to={this.props.linkData.linkUrl} exact activeClassName="active">{this.props.linkData.linkName}</NavLink>
            </li>
        )
    }
}
