import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logoicon.png';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <section id='navigation'>
        <div id='logo' href='#home'>
          <Link to='/'>
            <Image
              src={logo}
              width='50'
              height='50'
              alt='React Bootstrap logo'
              roundedCircle
            />
          </Link>
        </div>

        <Nav id='navbtn' className='justify-content-end'>
          {localStorage.getItem('token') && (
            <Nav.Link>
              <Link to='/dashboard'>
                <Button variant='outline-light'>Add Items</Button>
              </Link>
            </Nav.Link>
          )}

          {localStorage.getItem('token') && (
            <Nav.Link>
              <Link to='/mfeed'>
                <Button variant='outline-light'>Market</Button>
              </Link>
            </Nav.Link>
          )}

          <Nav.Link>
            <Link to='/login'>
              <Button variant='outline-light'>Login</Button>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to='/signup'>
              <Button variant='outline-light'>Sign Up</Button>
            </Link>
          </Nav.Link>
        </Nav>
      </section>
    </>
  );
};
export default Navigation;
