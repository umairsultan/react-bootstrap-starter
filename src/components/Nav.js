import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const navLinksData = [
        { linkName: 'Home', linkUrl: '/' },
        { linkName: 'About', linkUrl: '/about' }
        // ,
        // { linkName: 'Services', linkUrl: '/services' },
        // { linkName: 'Contact', linkUrl: '/contact' }
]

export default class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/#">
                            <img className="logo-img" src={logo} alt="Logo" />
                            {/* {this.props.AppTitle} */}
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
                                {/* <li className="nav-item active">
                                    <a className="nav-link" href="#">Link
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li> */}
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

        let classes = (this.props.linkData.linkName === 'Home' ? 'nav-link active' : 'nav-link');
        
        return (
            <li className="nav-item">
                {/* <a className={classes} href={this.props.linkData.linkUrl}>{this.props.linkData.linkName}</a> */}
                <Link className={classes} to={this.props.linkData.linkUrl}>{this.props.linkData.linkName}</Link>
            </li>
        )
    }
}
