import React from 'react';
import logo from '../assets/images/logo.svg';

const navLinks = [
        { linkName: 'Home', linkUrl: '#home' },
        { linkName: 'About', linkUrl: '#about' },
        { linkName: 'Services', linkUrl: '#services' },
        { linkName: 'Contact', linkUrl: '#contact' }
]

console.log(navLinks);


export default class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img className="logo-img" src={logo} alt="Logo" />
                            {this.props.AppTitle}
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href={navLinks[0].linkUrl}>{navLinks[0].linkName}
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={navLinks[1].linkUrl}>{navLinks[1].linkName}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={navLinks[2].linkUrl}>{navLinks[2].linkName}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={navLinks[3].linkUrl} data-toggle="modal" data-target="#exampleModal">{navLinks[3].linkName}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
