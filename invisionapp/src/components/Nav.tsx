import * as React from 'react';
import { NavLink } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        if (!sessionStorage.getItem('accesstoken')) {
            return <Redirect to='/login'  />
        }
        return (
            <div>
                <nav className="nav" id="myNav">
                    <a href="#home" className="active">Channel</a>
                    <a href="#news">Book Mark</a>
                    <a href="#contact">Overview</a>
                    <a href="#about">Widget</a>
                    <div className="search-container">
                        <i className="fa fa-search" />
                        <span className="fb-image-container"><img src={`${sessionStorage.getItem('picture')}`} /></span>
                        <span className="fb-name">{sessionStorage.getItem('name')}</span>
                        
                    </div>
                </nav>
                <nav className="topnav" id="myTopnav">
                    <NavLink exact={true} activeClassName="navbar__link--active" className="navbar__link" to="/trand">Tranding</NavLink>
                    <NavLink exact={true} activeClassName="navbar__link--active" className="navbar__link" to="/">Travel</NavLink>
                    <NavLink exact={true} activeClassName="navbar__link--active" className="navbar__link" to="/">Climate</NavLink>
                    <NavLink exact={true} activeClassName="navbar__link--active" className="navbar__link" to="/">Music</NavLink>
                    <NavLink exact={true} activeClassName="navbar__link--active" className="navbar__link" to="/">People</NavLink>
                    <div className="explore">
                        <NavLink exact={true} activeClassName="navbar__link--active" className="navbar__link" to="/explore">Explore</NavLink>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;