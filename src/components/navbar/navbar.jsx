import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class Navbar extends React.Component {
  render() {


    return (
        <Router>
        <div className='navbar'>
            <Link to = {`/profile`}>
            <Button className='nav-button' variant='link'>PROFILE</Button>
            </Link>
            <Link to = {`/`}>
            <Button className='nav-button' variant='link'>HOME</Button>
            </Link>
            <Link to = {`/`}>
            <Button className='nav-button' variant='link' onClick={this.onLoggedOut.bind(this)}
            >LOGOUT</Button>
            </Link>
        </div>
      </Router>
    );
  }
}